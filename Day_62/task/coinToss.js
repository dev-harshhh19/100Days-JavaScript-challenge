const tossButton = document.getElementById('tossButton');
const resultParagraph = document.getElementById('result');
const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', () => {
    resultParagraph.textContent = '';
});

function coinToss() {
    return new Promise((resolve) => {
        const isHeads = Math.random() < 0.5;
        const outcome = isHeads ? "Heads" : "Tails";
        resolve(outcome);
    });
}

tossButton.addEventListener('click', () => {
    coinToss().then(result => {
        resultParagraph.textContent = `Result: ${result}`;
    });
});

