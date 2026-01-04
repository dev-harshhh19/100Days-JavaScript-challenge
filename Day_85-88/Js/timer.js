// Timer Module

let timerId = null;
let timeLeft = 30;
let onTimeUp = null;
let onTick = null;

const INITIAL_TIME = 30;

export function startTimer(tickCallback, timeUpCallback) {
  stopTimer();
  timeLeft = INITIAL_TIME;
  onTick = tickCallback;
  onTimeUp = timeUpCallback;

  if (onTick) onTick(timeLeft);

  timerId = setInterval(() => {
    timeLeft--;
    if (onTick) onTick(timeLeft);

    if (timeLeft <= 0) {
      stopTimer();
      if (onTimeUp) onTimeUp();
    }
  }, 1000);
}

export function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

export function getTimeLeft() {
  return timeLeft;
}

export function resetTimer() {
  stopTimer();
  timeLeft = INITIAL_TIME;
}
