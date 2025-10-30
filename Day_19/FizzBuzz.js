// FizzBuzz (Loops + Conditions
function FizzBUzz(){
    readlinesync = require('readline-sync');
    let n = parseInt(readlinesync.question("Enter a positive integer:"));
    for (let i = 1; i<=n; i++){
        if(i%3===0 && i%5===0){
            console.log(`FizzBuzz`);
        } else if(i%3===0){
            console.log(`Fizz`);
        } else if(i%5===0){
            console.log('buzz');
        } else{
            console.log(i);
        }
    }
}
FizzBUzz();