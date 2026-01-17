/**
 * Finite State Machine (FSM)
 * Day 98.1 - Reusable state machine to manage application states
 */

class StateMachine {
  constructor(config) {
    this.states = config.states || {};
    this.currentState = config.initialState;
    this.context = config.context || {};
    this.listeners = [];

    this._validateConfig();
  }

  _validateConfig() {
    if (!this.currentState) {
      throw new Error('Initial state is required');
    }
    if (!this.states[this.currentState]) {
      throw new Error(`Initial state "${this.currentState}" not found in states`);
    }
  }

  /**
   * Get current state
   */
  getState() {
    return this.currentState;
  }

  /**
   * Get current context
   */
  getContext() {
    return { ...this.context };
  }

  /**
   * Check if a transition is valid from current state
   */
  can(event) {
    const state = this.states[this.currentState];
    return state && state.on && event in state.on;
  }

  /**
   * Transition to a new state based on event
   */
  send(event, payload = {}) {
    const state = this.states[this.currentState];

    if (!state || !state.on || !state.on[event]) {
      console.warn(`No transition for event "${event}" in state "${this.currentState}"`);
      return false;
    }

    const transition = state.on[event];
    const previousState = this.currentState;

    // Execute exit action
    if (state.onExit) {
      state.onExit(this.context, payload);
    }

    // Handle conditional transitions
    let nextState;
    if (typeof transition === 'string') {
      nextState = transition;
    } else if (typeof transition === 'object') {
      nextState = transition.target;
      if (transition.action) {
        transition.action(this.context, payload);
      }
      if (transition.guard && !transition.guard(this.context, payload)) {
        return false;
      }
    }

    // Update state
    this.currentState = nextState;
    const newState = this.states[this.currentState];

    // Execute entry action
    if (newState && newState.onEntry) {
      newState.onEntry(this.context, payload);
    }

    // Notify listeners
    this._notifyListeners({
      type: 'transition',
      event,
      from: previousState,
      to: this.currentState,
      payload
    });

    return true;
  }

  /**
   * Subscribe to state changes
   */
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  _notifyListeners(data) {
    this.listeners.forEach(listener => listener(data));
  }

  /**
   * Reset to initial state
   */
  reset(initialState) {
    this.currentState = initialState || Object.keys(this.states)[0];
    this._notifyListeners({ type: 'reset', state: this.currentState });
  }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { StateMachine };
}
