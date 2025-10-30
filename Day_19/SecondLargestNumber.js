// Second Largest Number in Array

function secondLargestNumber(arr){
    if(arr.length<2){
        return null;
    }
    let first = -Infinity;
    let second = -Infinity;
    for (let i=0; i<arr.length;i++){
        if(arr[i]>first){
            second = first;
            first = arr[i];
        } else if(arr[i]>second && arr[i]!==first){
            second = arr[i];
        }
    }
    return second;
}

readlinesync = require('readline-sync');
let size = parseInt(readlinesync.question("Enter the size of the array:"));
let arr = [];
for (let i=0; i<size; i++){
    let element = parseInt(readlinesync.question(`Enter element ${i+1}:`));
    arr.push(element);
}
let result = secondLargestNumber(arr);
if(result === null){
    console.log("Array should have at least two distinct elements.");
} else {
    console.log(`The second largest number is: ${result}`);
}