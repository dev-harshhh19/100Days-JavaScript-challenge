const readlinesync = require('readline-sync');

function play() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("I've selected a random number between 1 and 100!");
    let raw = readlinesync.question("Enter your number: ");
    
    if (isNaN(raw) || raw < 1 || raw > 100) {
        console.log("Please enter a valid number between 1 and 100.");
        return play();
    }
    
    raw = parseInt(raw, 10);
    checkNumber(raw, randomNumber);
}

function checkNumber(rawValue, randomValue) {
    while (rawValue !== randomValue) {
        if (rawValue < randomValue) {
            console.log("Oh! Too close! Try a bit bigger value!");
        } else if (rawValue > randomValue) {
            console.log("Oh! Too close! Try a bit smaller value!");
        }
        rawValue = readlinesync.question("Enter your number: ");
        
        if (isNaN(rawValue) || rawValue < 1 || rawValue > 100) {
            console.log("Please enter a valid number between 1 and 100.");
            return play();
        }
        rawValue = parseInt(rawValue, 10);
    }
    console.log(`Congrats! You guessed the correct number!`);
    const playGameAgain = readlinesync.question("You want to play again? (y/n): ");
    playAgain(playGameAgain);
}

function playAgain(playGameAgain) {
    while (playGameAgain !== 'y' && playGameAgain !== 'Y' && playGameAgain !== 'n' && playGameAgain !== 'N') {
        playGameAgain = readlinesync.question("Please enter 'y' to play again or 'n' to quit: ");
    }

    if (playGameAgain === 'y' || playGameAgain === 'Y') {
        play();
    } else {
        console.log("Hope you enjoyed the game!");
    }
}

play();
