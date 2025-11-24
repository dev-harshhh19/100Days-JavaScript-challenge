let count = 0;

counter_button.addEventListener('click', () => {
    count++;
    display.textContent = `Count: ${count}`;
})