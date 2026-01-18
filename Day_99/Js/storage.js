/**
 * Alarm Storage
 * Day 99.4 - Save, restore, and synchronize alarms across page reloads
 */

class AlarmStorage {
  constructor(storageKey = 'alarms_data') {
    this.storageKey = storageKey;
  }

  /**
   * Save alarms to localStorage
   */
  save(alarms) {
    try {
      const data = alarms.map(alarm => alarm.toJSON());
      localStorage.setItem(this.storageKey, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Failed to save alarms:', error);
      return false;
    }
  }

  /**
   * Load alarms from localStorage
   */
  load() {
    try {
      const data = localStorage.getItem(this.storageKey);
      if (!data) return [];

      const parsed = JSON.parse(data);
      return parsed.map(item => Alarm.fromJSON(item));
    } catch (error) {
      console.error('Failed to load alarms:', error);
      return [];
    }
  }

  /**
   * Clear all stored alarms
   */
  clear() {
    localStorage.removeItem(this.storageKey);
    return this;
  }

  /**
   * Sync scheduler with storage
   */
  syncToScheduler(scheduler) {
    const alarms = this.load();
    alarms.forEach(alarm => scheduler.addAlarm(alarm));
    return alarms;
  }

  /**
   * Sync storage with scheduler
   */
  syncFromScheduler(scheduler) {
    return this.save(scheduler.getAllAlarms());
  }

  /**
   * Create auto-save handler
   */
  createAutoSave(scheduler) {
    scheduler.on('update', () => {
      this.syncFromScheduler(scheduler);
    });
    return this;
  }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AlarmStorage };
}
