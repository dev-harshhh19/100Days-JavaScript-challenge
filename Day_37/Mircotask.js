// Microtask vs Callback Queue
console.log(`Start`);
setTimeout(() => {
    console.log(`SetTimeout callback executed`);
}, 0)
Promise.resolve(`Promise resolved`).then((data) => {
    console.log(data);
});
console.log(`End`);
