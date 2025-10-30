// Character Frequency Counter
function characterFrequency(str) {
    const frequency = {};
    
    for (let char of str) {
        if (char !== ' ') {
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }
    
    return frequency;
}


readlinesync = require('readline-sync');
let inputString = readlinesync.question("Enter a string: ");
let result = characterFrequency(inputString);
console.log("Character Frequency:", result);