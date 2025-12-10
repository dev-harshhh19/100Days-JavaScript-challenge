const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const historyList = document.getElementById('history-list');
const toggleThemeBtn = document.getElementById('toggle-theme');

let history = JSON.parse(localStorage.getItem('calcHistory')) || [];

document.addEventListener('DOMContentLoaded', renderHistory);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.getAttribute('data-number');
        const action = button.getAttribute('data-action');

        if (number !== null) {

            display.value += number;
        } else if (action !== null) {
            if (action === 'clear') {
                display.value = '';
            } else if (action === 'equals') {
                try {
                    const result = eval(display.value);
                    const calculation = `${display.value} = ${result}`;
                    history.push(calculation);
                    localStorage.setItem('calcHistory', JSON.stringify(history));
                    display.value = result;
                    renderHistory();
                } catch (e) {
                    display.value = 'Error';
                }
            } else if (action === 'sqrt') {
                try {
                    const value = parseFloat(display.value);
                    const result = Math.sqrt(value);
                    const calculation = `√${value} = ${result}`;
                    history.push(calculation);
                    localStorage.setItem('calcHistory', JSON.stringify(history));
                    display.value = result;
                    renderHistory();
                } catch (e) {
                    display.value = 'Error';
                }
            } else if (action === 'percent') {
                try {
                    const value = parseFloat(display.value);
                    const result = value / 100;
                    const calculation = `${value}% = ${result}`;
                    history.push(calculation);
                    localStorage.setItem('calcHistory', JSON.stringify(history));
                    display.value = result;
                    renderHistory();
                } catch (e) {
                    display.value = 'Error';
                }
            } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {

                const operatorMap = {
                    'add': '+',
                    'subtract': '-',
                    'multiply': '*',
                    'divide': '/'
                };
                display.value += operatorMap[action];
            }
        }
    });
});

function renderHistory() {
    historyList.innerHTML = '';
    history.slice().reverse().forEach(entry => {
        const li = document.createElement('li');
        li.textContent = entry;
        historyList.appendChild(li);
    });
}

toggleThemeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
        toggleThemeBtn.textContent = '🌛';
    } else {
        toggleThemeBtn.textContent = '🌞';
    }
});

