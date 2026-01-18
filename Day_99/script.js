// Day 99 Demo Script - Alarm System Integration

// Initialize components
const scheduler = new AlarmScheduler();
const storage = new AlarmStorage('day99_alarms');

// Load saved alarms
storage.syncToScheduler(scheduler);
storage.createAutoSave(scheduler);

// DOM Elements
const clockDisplay = document.getElementById('clock');
const alarmsContainer = document.getElementById('alarmsContainer');
const addAlarmBtn = document.getElementById('addAlarmBtn');
const alarmTimeInput = document.getElementById('alarmTime');
const alarmLabelInput = document.getElementById('alarmLabel');
const snoozeDurationSelect = document.getElementById('snoozeDuration');
const alertOverlay = document.getElementById('alertOverlay');
const alertTime = document.getElementById('alertTime');
const alertLabel = document.getElementById('alertLabel');
const snoozeBtn = document.getElementById('snoozeBtn');
const dismissBtn = document.getElementById('dismissBtn');
const snoozeInfo = document.getElementById('snoozeInfo');

// Update clock
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  clockDisplay.innerHTML = `${hours}:<span>${minutes}</span>:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// Render alarms list
function renderAlarms() {
  const alarms = scheduler.getAllAlarms();

  if (alarms.length === 0) {
    alarmsContainer.innerHTML = '<div class="empty-state">No alarms set</div>';
    return;
  }

  alarmsContainer.innerHTML = alarms.map(alarm => `
        <div class="alarm-item ${alarm.active ? '' : 'inactive'}" data-id="${alarm.id}">
            <div class="alarm-time">${alarm.time}</div>
            <div class="alarm-info">
                <div class="alarm-label">${alarm.label || 'Alarm'}</div>
                <div class="alarm-meta">Snooze: ${alarm.snoozeDuration} min</div>
            </div>
            <div class="alarm-toggle ${alarm.active ? 'active' : ''}" data-action="toggle"></div>
            <button class="alarm-delete" data-action="delete">✕</button>
        </div>
    `).join('');
}

// Add alarm
addAlarmBtn.onclick = () => {
  const time = alarmTimeInput.value;
  const label = alarmLabelInput.value.trim() || 'Alarm';
  const snoozeDuration = parseInt(snoozeDurationSelect.value);

  const alarm = new Alarm({
    time,
    label,
    snoozeDuration,
    active: true
  });

  scheduler.addAlarm(alarm);
  renderAlarms();

  // Reset form
  alarmLabelInput.value = '';
};

// Handle alarm item clicks
alarmsContainer.onclick = (e) => {
  const item = e.target.closest('.alarm-item');
  if (!item) return;

  const id = item.dataset.id;
  const action = e.target.dataset.action;

  if (action === 'toggle') {
    const alarm = scheduler.getAlarm(id);
    if (alarm) {
      alarm.toggle();
      renderAlarms();
      storage.syncFromScheduler(scheduler);
    }
  } else if (action === 'delete') {
    scheduler.removeAlarm(id);
    renderAlarms();
  }
};

// Alarm trigger handler
scheduler.on('trigger', ({ alarm }) => {
  alertTime.textContent = alarm.time;
  alertLabel.textContent = alarm.label;
  updateSnoozeInfo(alarm);
  alertOverlay.classList.add('active');

  // Play sound (simple beep)
  playAlarmSound();
});

// Snooze button
snoozeBtn.onclick = () => {
  if (scheduler.snooze()) {
    alertOverlay.classList.remove('active');
    stopAlarmSound();
    renderAlarms();
  }
};

// Dismiss button
dismissBtn.onclick = () => {
  if (scheduler.dismiss()) {
    alertOverlay.classList.remove('active');
    stopAlarmSound();
    renderAlarms();
  }
};

function updateSnoozeInfo(alarm) {
  if (alarm.snoozeCount > 0) {
    snoozeInfo.textContent = `Snoozed ${alarm.snoozeCount}/${alarm.maxSnooze} times`;
    if (alarm.snoozeCount >= alarm.maxSnooze) {
      snoozeBtn.disabled = true;
      snoozeBtn.textContent = 'Max snoozes reached';
    }
  } else {
    snoozeInfo.textContent = '';
    snoozeBtn.disabled = false;
    snoozeBtn.textContent = 'Snooze';
  }
}

// Simple alarm sound using Web Audio API
let audioContext;
let oscillator;

function playAlarmSound() {
  try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    gainNode.gain.value = 0.3;

    oscillator.start();

    // Beep pattern
    let isPlaying = true;
    const beepInterval = setInterval(() => {
      if (!isPlaying) {
        clearInterval(beepInterval);
        return;
      }
      gainNode.gain.value = gainNode.gain.value === 0 ? 0.3 : 0;
    }, 500);

    oscillator.beepInterval = beepInterval;
  } catch (e) {
    console.log('Audio not supported');
  }
}

function stopAlarmSound() {
  if (oscillator) {
    clearInterval(oscillator.beepInterval);
    oscillator.stop();
    oscillator = null;
  }
  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }
}

// Start scheduler and render
scheduler.start();
renderAlarms();

console.log('Alarm System initialized');
