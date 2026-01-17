// Day 98 Demo Script - Integrating all logic systems

// ============================================
// 98.1 Finite State Machine Demo
// ============================================

const playerMachine = new StateMachine({
  initialState: 'idle',
  context: { startTime: null, elapsed: 0 },
  states: {
    idle: {
      onEntry: (ctx) => { ctx.elapsed = 0; },
      on: {
        START: 'running'
      }
    },
    running: {
      onEntry: (ctx) => { ctx.startTime = Date.now(); },
      on: {
        PAUSE: 'paused',
        FINISH: 'finished'
      }
    },
    paused: {
      onEntry: (ctx) => {
        ctx.elapsed += Date.now() - ctx.startTime;
      },
      on: {
        RESUME: 'running',
        FINISH: 'finished'
      }
    },
    finished: {
      onEntry: (ctx) => {
        if (ctx.startTime) {
          ctx.elapsed += Date.now() - ctx.startTime;
        }
      },
      on: {
        RESET: 'idle'
      }
    }
  }
});

// FSM UI
const fsmOutput = document.getElementById('fsmOutput');
const stateDisplay = document.getElementById('currentState');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resumeBtn = document.getElementById('resumeBtn');
const finishBtn = document.getElementById('finishBtn');
const resetBtn = document.getElementById('resetBtn');

function logFSM(message) {
  fsmOutput.innerHTML += `<div class="log-entry">${message}</div>`;
  fsmOutput.scrollTop = fsmOutput.scrollHeight;
}

function updateFSMButtons() {
  const state = playerMachine.getState();
  stateDisplay.textContent = state.toUpperCase();

  startBtn.disabled = state !== 'idle';
  pauseBtn.disabled = state !== 'running';
  resumeBtn.disabled = state !== 'paused';
  finishBtn.disabled = !['running', 'paused'].includes(state);
  resetBtn.disabled = state !== 'finished';
}

playerMachine.subscribe(({ event, from, to }) => {
  logFSM(`[${new Date().toLocaleTimeString()}] ${event}: ${from} → ${to}`);
  updateFSMButtons();
});

startBtn.onclick = () => playerMachine.send('START');
pauseBtn.onclick = () => playerMachine.send('PAUSE');
resumeBtn.onclick = () => playerMachine.send('RESUME');
finishBtn.onclick = () => playerMachine.send('FINISH');
resetBtn.onclick = () => {
  playerMachine.send('RESET');
  fsmOutput.innerHTML = '';
  logFSM('State machine reset');
};

updateFSMButtons();
logFSM('State machine initialized in IDLE state');

// ============================================
// 98.2 Rule Engine Demo
// ============================================

const ruleEngine = new RuleEngine();

ruleEngine.addRules([
  {
    name: 'Under 18 Warning',
    priority: 10,
    condition: Conditions.lessThan('age', 18),
    action: () => ({ type: 'warning', message: '⚠️ User is under 18 - restricted access' })
  },
  {
    name: 'Senior Discount',
    priority: 5,
    condition: Conditions.greaterThan('age', 60),
    action: () => ({ type: 'action', message: '🎉 Senior discount applied - 20% off!' })
  },
  {
    name: 'Low Balance Alert',
    priority: 8,
    condition: Conditions.lessThan('balance', 100),
    action: (facts) => ({ type: 'warning', message: `⚠️ Low balance: $${facts.balance}. Consider adding funds.` })
  },
  {
    name: 'Premium User',
    priority: 3,
    condition: Conditions.greaterThan('balance', 1000),
    action: () => ({ type: 'action', message: '⭐ Premium user - exclusive features unlocked!' })
  },
  {
    name: 'Standard User',
    priority: 1,
    condition: Conditions.and(
      Conditions.between('age', 18, 60),
      Conditions.between('balance', 100, 1000)
    ),
    action: () => ({ type: 'action', message: '✓ Standard user - all basic features available' })
  }
]);

const ruleOutput = document.getElementById('ruleOutput');
const ageInput = document.getElementById('ageInput');
const balanceInput = document.getElementById('balanceInput');
const evaluateBtn = document.getElementById('evaluateBtn');

function logRule(result) {
  const className = result.outcome.type === 'warning' ? 'warning' : 'action';
  ruleOutput.innerHTML += `<div class="log-entry ${className}"><strong>${result.rule}:</strong> ${result.outcome.message}</div>`;
}

evaluateBtn.onclick = () => {
  ruleOutput.innerHTML = '';
  const age = parseInt(ageInput.value) || 0;
  const balance = parseInt(balanceInput.value) || 0;

  ruleEngine.setFacts({ age, balance });
  const results = ruleEngine.evaluate();

  if (results.length === 0) {
    ruleOutput.innerHTML = '<div class="log-entry">No rules matched</div>';
  } else {
    results.forEach(logRule);
  }
};

// ============================================
// 98.3 Event Queue Demo
// ============================================

const eventQueue = new EventQueue({ processDelay: 500 });

const queueOutput = document.getElementById('queueOutput');
let eventCounter = 0;

function logQueue(message, isHighPriority = false) {
  const style = isHighPriority ? 'border-color: #f59e0b;' : '';
  queueOutput.innerHTML += `<div class="log-entry" style="${style}">${message}</div>`;
  queueOutput.scrollTop = queueOutput.scrollHeight;
}

// Register handlers
eventQueue.on('task', (payload) => {
  logQueue(`✓ Processed: ${payload.name} (Priority: ${payload.priority})`, payload.priority > 5);
});

// Add middleware for logging
eventQueue.use((event) => {
  logQueue(`⏳ Processing event #${event.id.slice(-4)}: ${event.payload.name}`);
  return true;
});

document.getElementById('addLowBtn').onclick = () => {
  eventCounter++;
  const name = `Task ${eventCounter}`;
  eventQueue.enqueue('task', { name, priority: 1 }, { priority: 1 });
  logQueue(`➕ Added: ${name} (Low Priority)`);
};

document.getElementById('addHighBtn').onclick = () => {
  eventCounter++;
  const name = `Task ${eventCounter}`;
  eventQueue.enqueue('task', { name, priority: 10 }, { priority: 10 });
  logQueue(`➕ Added: ${name} (High Priority)`, true);
};

document.getElementById('pauseQueueBtn').onclick = () => {
  eventQueue.pause();
  logQueue('⏸️ Queue paused');
};

document.getElementById('resumeQueueBtn').onclick = () => {
  eventQueue.resume();
  logQueue('▶️ Queue resumed');
};

document.getElementById('clearQueueBtn').onclick = () => {
  eventQueue.clear();
  logQueue('🗑️ Queue cleared');
};

logQueue('Event queue initialized');
