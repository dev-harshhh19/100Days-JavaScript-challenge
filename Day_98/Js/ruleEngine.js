/**
 * Rule-Based Decision Engine
 * Day 98.2 - Logic evaluator that processes rules and returns outcomes
 */

class RuleEngine {
  constructor() {
    this.rules = [];
    this.facts = {};
  }

  /**
   * Add a rule to the engine
   * @param {Object} rule - { name, condition, action, priority }
   */
  addRule(rule) {
    if (!rule.name || !rule.condition || !rule.action) {
      throw new Error('Rule must have name, condition, and action');
    }

    this.rules.push({
      name: rule.name,
      condition: rule.condition,
      action: rule.action,
      priority: rule.priority || 0,
      enabled: rule.enabled !== false
    });

    // Sort by priority (higher first)
    this.rules.sort((a, b) => b.priority - a.priority);

    return this;
  }

  /**
   * Add multiple rules at once
   */
  addRules(rules) {
    rules.forEach(rule => this.addRule(rule));
    return this;
  }

  /**
   * Set facts (data to evaluate against rules)
   */
  setFacts(facts) {
    this.facts = { ...this.facts, ...facts };
    return this;
  }

  /**
   * Clear all facts
   */
  clearFacts() {
    this.facts = {};
    return this;
  }

  /**
   * Evaluate all rules against current facts
   * @param {Object} options - { stopOnFirst: boolean }
   * @returns {Array} - Array of results from matched rules
   */
  evaluate(options = {}) {
    const results = [];
    const { stopOnFirst = false } = options;

    for (const rule of this.rules) {
      if (!rule.enabled) continue;

      try {
        const matches = rule.condition(this.facts);

        if (matches) {
          const result = {
            rule: rule.name,
            outcome: rule.action(this.facts),
            facts: { ...this.facts }
          };
          results.push(result);

          if (stopOnFirst) break;
        }
      } catch (error) {
        console.error(`Error evaluating rule "${rule.name}":`, error);
      }
    }

    return results;
  }

  /**
   * Evaluate and return first matching result
   */
  evaluateFirst() {
    const results = this.evaluate({ stopOnFirst: true });
    return results[0] || null;
  }

  /**
   * Enable/disable a rule by name
   */
  toggleRule(name, enabled) {
    const rule = this.rules.find(r => r.name === name);
    if (rule) {
      rule.enabled = enabled;
    }
    return this;
  }

  /**
   * Remove a rule by name
   */
  removeRule(name) {
    this.rules = this.rules.filter(r => r.name !== name);
    return this;
  }

  /**
   * Get all rule names
   */
  getRuleNames() {
    return this.rules.map(r => r.name);
  }
}

// Utility: Create common condition helpers
const Conditions = {
  greaterThan: (field, value) => (facts) => facts[field] > value,
  lessThan: (field, value) => (facts) => facts[field] < value,
  equals: (field, value) => (facts) => facts[field] === value,
  between: (field, min, max) => (facts) => facts[field] >= min && facts[field] <= max,
  contains: (field, value) => (facts) => facts[field]?.includes(value),
  and: (...conditions) => (facts) => conditions.every(c => c(facts)),
  or: (...conditions) => (facts) => conditions.some(c => c(facts)),
  not: (condition) => (facts) => !condition(facts)
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RuleEngine, Conditions };
}
