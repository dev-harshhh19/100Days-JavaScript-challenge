# Day 99: Alarm / Reminder System

A fully functional alarm system with snooze, dismiss, and localStorage persistence.

## 99.1 Alarm Core Logic
- Alarm class with time, label, active state, unique ID
- Repeat days support
- Next trigger calculation

## 99.2 Alarm Scheduler
- Accurate second-by-second time checking
- Event-based triggers
- Support for multiple alarms

## 99.3 Snooze & Dismiss
- Configurable snooze duration (1-15 min)
- Max snooze limit
- Auto-deactivate non-repeating alarms

## 99.4 localStorage Persistence
- Auto-save on changes
- Restore alarms on page reload
- Sync between storage and scheduler

## How to Run
```bash
cd Day_99
npx serve
```

## Files
```
Day_99/
├── index.html
├── script.js
└── Js/
    ├── alarm.js
    ├── scheduler.js
    └── storage.js
```

---
