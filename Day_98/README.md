# Day 98: JavaScript Logic Systems

Three reusable logic modules for building complex applications.

## 98.1 Finite State Machine
Manage application states with transitions, guards, and actions.

**Features:**
- State transitions with events
- Entry/exit actions
- Guard conditions
- Subscriber pattern

## 98.2 Rule-Based Decision Engine
Evaluate rules and return outcomes based on facts.

**Features:**
- Priority-based rule ordering
- Condition helpers (greaterThan, lessThan, and, or, not)
- Enable/disable rules dynamically

## 98.3 Event Queue System
Ordered async event processing with middleware.

**Features:**
- Priority queue
- Middleware support
- Pause/resume
- Event history

## How to Run
```bash
cd Day_98
npx serve
```

## Files
```
Day_98/
├── index.html
├── script.js
└── Js/
    ├── stateMachine.js
    ├── ruleEngine.js
    └── eventQueue.js
```

---
