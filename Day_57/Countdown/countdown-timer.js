const minutesInput = document.getElementById("minutes-input");
const startButton = document.getElementById("start-button");
const timerDisplay = document.getElementById("timer-display");
const themeButton = document.getElementById("theme-button");
const body = document.body;

let countdownInterval;

function startCountdown(duration) {
    let timer = duration, minutes, seconds;
    countdownInterval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
        timerDisplay.textContent = `${minutes}:${seconds}`;
        
        if (--timer < 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = "Time's up!";
        }
    }, 1000);
}

startButton.addEventListener("click", () => {
    const minutes = parseInt(minutesInput.value, 10);   
    if (isNaN(minutes) || minutes < 0) {
        alert("Please enter a valid number of minutes.");
        return;
    }
    startCountdown(minutes * 60);
});

themeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        themeButton.textContent = "🌙";
    } else {
        themeButton.textContent = "☀️";
    }
});

// Initial theme setup
body.classList.add("dark-mode");
themeButton.textContent = "🌙";