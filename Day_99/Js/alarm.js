/**
 * Alarm Core Logic
 * Day 99.1 - Create alarm objects with time, label, active state, and unique identifiers
 */

class Alarm {
  constructor(options = {}) {
    this.id = options.id || this._generateId();
    this.time = options.time || '08:00'; // HH:MM format
    this.label = options.label || 'Alarm';
    this.active = options.active !== false;
    this.repeat = options.repeat || []; // Array of days: [0-6] (Sun-Sat)
    this.sound = options.sound || 'default';
    this.snoozeDuration = options.snoozeDuration || 5; // minutes
    this.snoozeCount = options.snoozeCount || 0;
    this.maxSnooze = options.maxSnooze || 3;
    this.createdAt = options.createdAt || Date.now();
    this.lastTriggered = options.lastTriggered || null;
  }

  _generateId() {
    return `alarm_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get time as { hours, minutes }
   */
  getTimeParts() {
    const [hours, minutes] = this.time.split(':').map(Number);
    return { hours, minutes };
  }

  /**
   * Get next trigger date
   */
  getNextTrigger() {
    const now = new Date();
    const { hours, minutes } = this.getTimeParts();

    let triggerDate = new Date();
    triggerDate.setHours(hours, minutes, 0, 0);

    // If time has passed today, move to tomorrow
    if (triggerDate <= now) {
      triggerDate.setDate(triggerDate.getDate() + 1);
    }

    // If repeat is set, find next valid day
    if (this.repeat.length > 0) {
      while (!this.repeat.includes(triggerDate.getDay())) {
        triggerDate.setDate(triggerDate.getDate() + 1);
      }
    }

    return triggerDate;
  }

  /**
   * Check if alarm should trigger now
   */
  shouldTrigger() {
    if (!this.active) return false;

    const now = new Date();
    const { hours, minutes } = this.getTimeParts();

    const nowHours = now.getHours();
    const nowMinutes = now.getMinutes();

    // Check time match
    if (nowHours !== hours || nowMinutes !== minutes) {
      return false;
    }

    // Check if already triggered this minute
    if (this.lastTriggered) {
      const lastTrigger = new Date(this.lastTriggered);
      if (lastTrigger.getHours() === nowHours &&
        lastTrigger.getMinutes() === nowMinutes &&
        lastTrigger.getDate() === now.getDate()) {
        return false;
      }
    }

    // Check repeat days
    if (this.repeat.length > 0 && !this.repeat.includes(now.getDay())) {
      return false;
    }

    return true;
  }

  /**
   * Toggle active state
   */
  toggle() {
    this.active = !this.active;
    return this;
  }

  /**
   * Update alarm properties
   */
  update(options) {
    if (options.time) this.time = options.time;
    if (options.label !== undefined) this.label = options.label;
    if (options.active !== undefined) this.active = options.active;
    if (options.repeat) this.repeat = options.repeat;
    if (options.sound) this.sound = options.sound;
    if (options.snoozeDuration) this.snoozeDuration = options.snoozeDuration;
    return this;
  }

  /**
   * Serialize for storage
   */
  toJSON() {
    return {
      id: this.id,
      time: this.time,
      label: this.label,
      active: this.active,
      repeat: this.repeat,
      sound: this.sound,
      snoozeDuration: this.snoozeDuration,
      snoozeCount: this.snoozeCount,
      maxSnooze: this.maxSnooze,
      createdAt: this.createdAt,
      lastTriggered: this.lastTriggered
    };
  }

  /**
   * Create Alarm from stored data
   */
  static fromJSON(data) {
    return new Alarm(data);
  }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Alarm };
}
