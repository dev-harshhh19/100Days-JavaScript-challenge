// Sets()
const mySet = new Set([1, 2, 3, 4, 4, 5]);
console.log(mySet);

// ------------------------------------------------------------------
const basicSet = new Set();

// add values
basicSet.add(1);
basicSet.add(2);
basicSet.add(3);
basicSet.add(3);
console.log(basicSet);

// Check existence
console.log(basicSet.has(2));
console.log(basicSet.has(4));

// remove value
basicSet.delete(2);
console.log(basicSet);

// get size 
console.log(basicSet.size);

// clear all values
basicSet.clear();
console.log(basicSet);

// Iteration of sets
const numberSet = new Set([1 ,2 ,3 ,4, 5]);
for (const num of numberSet){
    console.log(num);
}
//or
console.log('');
numberSet.forEach(num => console.log(num));

// ------------------------------------------------------------------

// Maps()
const myMap = new Map();

myMap.set('name', 'Harshad');
myMap.set('age', 19);
myMap.set(1, 'One');

console.log(myMap);

// Basic Mathods

console.log(myMap.get('name'));
console.log(myMap.has('age'));
myMap.delete(1);
console.log(myMap);
console.log(myMap.size);
myMap.clear();
console.log(myMap);

// iteration of maps

const userMap = new Map([
    ['name', 'Harshad'],
    ['age', 19],
    ['city', 'Mumbai']
]);
for( let [key, value] of userMap){
    console.log(`key: ${key} = ${value}`);
    
}
console.log('');

// or using forEach
userMap.forEach((value, key) => console.log(`key: ${key} = ${value}`));

// ------------------------------------------------------------------

// Hasing

// const myMap = new Map(); // using the existing map;
myMap.set({id: 1}), "Object 1";
myMap.set({id: 2}), "Object 2";
console.log(myMap.has({id: 1})); 
