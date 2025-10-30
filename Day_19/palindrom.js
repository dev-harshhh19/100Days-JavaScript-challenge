// 1. Palindrome Checker
function isPalindrome(str){
    readlinesync = require('readline-sync');
    let Inputstring = readlinesync.question("Enter a string to check palindrome or not: ");
    let ReveredString = Inputstring.split('').reverse().join('');
    if(Inputstring === ReveredString){
        console.log(`The ${Inputstring} is a palindrome`);
    } else {
        console.log(`The "${Inputstring}" is not a palindrome`);
    }
}
isPalindrome();

