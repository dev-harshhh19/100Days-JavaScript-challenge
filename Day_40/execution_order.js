// Synchronous execution

console.log('Start');
console.log('Middle');
console.log('End');

// -----------------------------------------------------------
// Asynchronous execution

console.log('Start')
setTimeout(() => {
    console.log('Timeout');
},0);
console.log(`End`);

// -----------------------------------------------------------
// Microtasks vs Macrotasks
 
console.log('Start');

setTimeout(() => {
    console.log(`Macrotasks: SetTimeout()`);
}, 0);

Promise.resolve(() => console.log(`Microtask: Promise()`));
// or
Promise.reject(() => {
    console.log('Microtask: Promise()');  
});

queueMicrotask(() => {
    console.log('Microtask: queueMicrotask()');
});

console.log('End');

// -----------------------------------------------------------
// RealWorld use case:
console.log('fetch Start');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        console.log('Data fetched:', JSON.stringify(data, null, 2));
        //Update UI here
    })
    .catch(error => {
        console.log(`Error: ${error}`);
        
    })
console.log('Fetch End');

// -----------------------------------------------------------
// simple example

console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

queueMicrotask(() => console.log('4'));

console.log('5');

// -----------------------------------------------------------