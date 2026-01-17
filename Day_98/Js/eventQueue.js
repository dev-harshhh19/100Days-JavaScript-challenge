/**
 * Event Queue System
 * Day 98.3 - Custom event queue for ordered execution of application events
 */

class EventQueue {
  constructor(options = {}) {
    this.queue = [];
    this.isProcessing = false;
    this.isPaused = false;
    this.handlers = new Map();
    this.middleware = [];
    this.processDelay = options.processDelay || 0;
    this.maxConcurrent = options.maxConcurrent || 1;
    this.activeCount = 0;
    this.history = [];
    this.maxHistory = options.maxHistory || 100;
  }

  /**
   * Register an event handler
   */
  on(eventType, handler, options = {}) {
    if (!this.handlers.has(eventType)) {
      this.handlers.set(eventType, []);
    }

    this.handlers.get(eventType).push({
      handler,
      priority: options.priority || 0,
      once: options.once || false
    });

    // Sort by priority
    this.handlers.get(eventType).sort((a, b) => b.priority - a.priority);

    return this;
  }

  /**
   * Register a one-time event handler
   */
  once(eventType, handler, options = {}) {
    return this.on(eventType, handler, { ...options, once: true });
  }

  /**
   * Remove an event handler
   */
  off(eventType, handler) {
    if (this.handlers.has(eventType)) {
      const handlers = this.handlers.get(eventType);
      this.handlers.set(
        eventType,
        handlers.filter(h => h.handler !== handler)
      );
    }
    return this;
  }

  /**
   * Add middleware to process events before handlers
   */
  use(middleware) {
    this.middleware.push(middleware);
    return this;
  }

  /**
   * Enqueue an event
   */
  enqueue(eventType, payload = {}, options = {}) {
    const event = {
      id: this._generateId(),
      type: eventType,
      payload,
      priority: options.priority || 0,
      timestamp: Date.now(),
      delay: options.delay || 0
    };

    // Insert by priority
    const insertIndex = this.queue.findIndex(e => e.priority < event.priority);
    if (insertIndex === -1) {
      this.queue.push(event);
    } else {
      this.queue.splice(insertIndex, 0, event);
    }

    this._processQueue();

    return event.id;
  }

  /**
   * Emit an event immediately (bypass queue)
   */
  emit(eventType, payload = {}) {
    return this._executeEvent({
      id: this._generateId(),
      type: eventType,
      payload,
      timestamp: Date.now()
    });
  }

  /**
   * Process the event queue
   */
  async _processQueue() {
    if (this.isPaused || this.isProcessing) return;
    if (this.queue.length === 0) return;
    if (this.activeCount >= this.maxConcurrent) return;

    this.isProcessing = true;

    while (this.queue.length > 0 && !this.isPaused && this.activeCount < this.maxConcurrent) {
      const event = this.queue.shift();

      // Handle delayed events
      if (event.delay > 0) {
        const elapsed = Date.now() - event.timestamp;
        if (elapsed < event.delay) {
          setTimeout(() => {
            this.queue.unshift(event);
            this._processQueue();
          }, event.delay - elapsed);
          continue;
        }
      }

      this.activeCount++;

      try {
        await this._executeEvent(event);
      } catch (error) {
        console.error(`Error processing event "${event.type}":`, error);
      }

      this.activeCount--;

      // Add delay between events if configured
      if (this.processDelay > 0 && this.queue.length > 0) {
        await this._delay(this.processDelay);
      }
    }

    this.isProcessing = false;
  }

  /**
   * Execute a single event
   */
  async _executeEvent(event) {
    // Run middleware
    for (const mw of this.middleware) {
      const result = await mw(event);
      if (result === false) {
        return { cancelled: true, event };
      }
      if (result && typeof result === 'object') {
        event = { ...event, ...result };
      }
    }

    // Get handlers
    const handlers = this.handlers.get(event.type) || [];
    const results = [];

    for (const { handler, once } of handlers) {
      try {
        const result = await handler(event.payload, event);
        results.push(result);
      } catch (error) {
        console.error(`Handler error for "${event.type}":`, error);
      }

      if (once) {
        this.off(event.type, handler);
      }
    }

    // Add to history
    this._addToHistory(event, results);

    return { event, results };
  }

  /**
   * Pause queue processing
   */
  pause() {
    this.isPaused = true;
    return this;
  }

  /**
   * Resume queue processing
   */
  resume() {
    this.isPaused = false;
    this._processQueue();
    return this;
  }

  /**
   * Clear the queue
   */
  clear() {
    this.queue = [];
    return this;
  }

  /**
   * Get queue length
   */
  get length() {
    return this.queue.length;
  }

  /**
   * Get event history
   */
  getHistory() {
    return [...this.history];
  }

  _addToHistory(event, results) {
    this.history.push({
      ...event,
      results,
      processedAt: Date.now()
    });

    if (this.history.length > this.maxHistory) {
      this.history.shift();
    }
  }

  _generateId() {
    return `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  _delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EventQueue };
}
