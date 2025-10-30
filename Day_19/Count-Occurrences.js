// 2. Count Occurrences

function countOccurrences(){
    readlinesynsc = require('readline-sync');
    let InputArray = readlinesynsc.question("Enter elements of array separated by commas: ").split(',');
    let elementToCount = readlinesynsc.question("Enter the element to count its occurrences: ");
    let count = 0;
    for ( let i = 0; i< InputArray.length; i++ ){
        if( InputArray[i]===elementToCount){
            count++;
        }
    }
    console.log(`The element "${elementToCount}" occurs ${count} times.`);
}

countOccurrences();