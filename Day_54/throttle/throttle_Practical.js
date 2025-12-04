const throttleButton = document.getElementById('throttle-button');
const clickCountElement = document.getElementById('click-count');

let clickCount = 0;
let lastClickTime = 0;
const throttleDelay = 2000; // 2 seconds

throttleButton.addEventListener('click', () => {
    const now = Date.now();
    if (now - lastClickTime >= throttleDelay){
        clickCount++;
        clickCountElement.textContent = clickCount;
        lastClickTime = now;
    }
});
