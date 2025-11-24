const counterButton = document.getElementById('counterButton');
const clickCountSpan = document.getElementById('clickCount');
const inputCount = document.getElementById('inputCount');

let count = 0;

counterButton.addEventListener('click', () => {
    count++;
    clickCountSpan.textContent = count;
});

inputCount.addEventListener('input', () => {

    const newCount = parseInt(inputCount.value);
    if (!isNaN(newCount)) {
        count = newCount;
        clickCountSpan.textContent = count;
    }
});

inputCount.addEventListener('change', () => {
    console.log('Input field changed!');
});
