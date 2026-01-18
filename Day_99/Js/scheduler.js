/**
 * Alarm Scheduler
 * Day 99.2 - Accurate time-checking logic to trigger alarms
 */

class AlarmScheduler {
  constructor(options = {}) {
    this.alarms = [];
    this.checkInterval = options.checkInterval || 1000; // Check every second
    this.intervalId = null;
    this.listeners = {
      trigger: [],
      snooze: [],
      dismiss: [],
      update: []
    };
    this.activeAlarm = null;
  }

  /**
   * Add an alarm to the scheduler
   */
  addAlarm(alarm) {
    this.alarms.push(alarm);
    this._emit('update', { type: 'add', alarm });
    return this;
  }

  /**
   * Remove an alarm by ID
   */
  removeAlarm(id) {
    const index = this.alarms.findIndex(a => a.id === id);
    if (index !== -1) {
      const removed = this.alarms.splice(index, 1)[0];
      this._emit('update', { type: 'remove', alarm: removed });
    }
    return this;
  }

  /**
   * Get alarm by ID
   */
  getAlarm(id) {
    return this.alarms.find(a => a.id === id);
  }

  /**
   * Get all alarms
   */
  getAllAlarms() {
    return [...this.alarms];
  }

  /**
   * Start the scheduler
   */
  start() {
    if (this.intervalId) return this;

    this.intervalId = setInterval(() => {
      this._checkAlarms();
    }, this.checkInterval);

    return this;
  }

  /**
   * Stop the scheduler
   */
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    return this;
  }

  /**
   * Check all alarms for triggers
   */
  _checkAlarms() {
    if (this.activeAlarm) return; // Don't check while alarm is active

    for (const alarm of this.alarms) {
      if (alarm.shouldTrigger()) {
        this._triggerAlarm(alarm);
        break;
      }
    }
  }

  /**
   * Trigger an alarm
   */
  _triggerAlarm(alarm) {
    alarm.lastTriggered = Date.now();
    this.activeAlarm = alarm;
    this._emit('trigger', { alarm });
  }

  /**
   * Snooze the active alarm
   */
  snooze() {
    if (!this.activeAlarm) return false;

    const alarm = this.activeAlarm;

    if (alarm.snoozeCount >= alarm.maxSnooze) {
      return this.dismiss();
    }

    alarm.snoozeCount++;

    // Calculate new trigger time
    const snoozeTime = new Date();
    snoozeTime.setMinutes(snoozeTime.getMinutes() + alarm.snoozeDuration);

    // Temporarily update alarm time
    const newHours = snoozeTime.getHours().toString().padStart(2, '0');
    const newMinutes = snoozeTime.getMinutes().toString().padStart(2, '0');
    alarm.time = `${newHours}:${newMinutes}`;
    alarm.lastTriggered = null; // Allow re-trigger

    this._emit('snooze', {
      alarm,
      snoozeCount: alarm.snoozeCount,
      nextTrigger: snoozeTime
    });

    this.activeAlarm = null;
    return true;
  }

  /**
   * Dismiss the active alarm
   */
  dismiss() {
    if (!this.activeAlarm) return false;

    const alarm = this.activeAlarm;
    alarm.snoozeCount = 0;

    // If non-repeating, deactivate
    if (alarm.repeat.length === 0) {
      alarm.active = false;
    }

    this._emit('dismiss', { alarm });
    this._emit('update', { type: 'dismiss', alarm });

    this.activeAlarm = null;
    return true;
  }

  /**
   * Subscribe to events
   */
  on(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event].push(callback);
    }
    return this;
  }

  /**
   * Unsubscribe from events
   */
  off(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
    }
    return this;
  }

  /**
   * Emit an event
   */
  _emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => cb(data));
    }
  }

  /**
   * Get upcoming alarms sorted by next trigger time
   */
  getUpcoming(limit = 5) {
    return this.alarms
      .filter(a => a.active)
      .sort((a, b) => a.getNextTrigger() - b.getNextTrigger())
      .slice(0, limit);
  }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AlarmScheduler };
}
