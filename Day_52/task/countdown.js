// Elements
const countdownElement = document.getElementById('countdown');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const startButton = document.getElementById('startButton');

// Set your target date here (updated to future date)
const targetDate = new Date('2025-12-02T23:59:59').getTime();

let interval = null;

function updateCountdown() {
    const now = Date.now();
    const distance = targetDate - now;

    if (distance <= 0) {
        // Countdown finished
        clearInterval(interval);
        interval = null;
        startButton.disabled = false;
        countdownElement.innerHTML = 'Countdown Finished!';
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
}

startButton.addEventListener('click', () => {
    if (interval) return; // prevent multiple intervals

    // If target date already passed, show message and don't start
    if (Date.now() >= targetDate) {
        countdownElement.innerHTML = 'Target date has already passed.';
        return;
    }

    updateCountdown();
    interval = setInterval(updateCountdown, 1000);
    startButton.disabled = true;
});


if (Date.now() < targetDate) {
    const initNow = Date.now();
    const initDistance = targetDate - initNow;
    const initDays = Math.floor(initDistance / (1000 * 60 * 60 * 24));
    const initHours = Math.floor((initDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const initMinutes = Math.floor((initDistance % (1000 * 60 * 60)) / (1000 * 60));
    const initSeconds = Math.floor((initDistance % (1000 * 60)) / 1000);
    daysEl.textContent = String(initDays).padStart(2, '0');
    hoursEl.textContent = String(initHours).padStart(2, '0');
    minutesEl.textContent = String(initMinutes).padStart(2, '0');
    secondsEl.textContent = String(initSeconds).padStart(2, '0');
} else {
    countdownElement.innerHTML = 'Target date has already passed.';
}