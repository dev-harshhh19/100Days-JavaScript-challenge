const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");
const themeButton = document.getElementById("theme-button");
const body = document.body;

function updateclock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const second = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    hoursElement.innerHTML = String(hours).padStart(2, '0');
    minutesElement.innerHTML = String(minutes).padStart(2, '0');
    secondsElement.innerHTML = String(second).padStart(2, '0');
    ampmElement.innerHTML = ampm;

    setTimeout(updateclock, 1000);
}
updateclock();

themeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    // Toggle emoji between moon and sun
    if (body.classList.contains("dark-mode")) {
        themeButton.textContent = "🌙";
    } else {
        themeButton.textContent = "☀️";
    }
})

// Initial theme setup
body.classList.add("dark-mode");
themeButton.textContent = "🌙";    