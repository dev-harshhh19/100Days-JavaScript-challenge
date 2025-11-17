// Event Loop Phases (Node.js Timers, I/O, Check)
import { readFile } from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

console.log(`Start`);
setTimeout(() => {
    console.log(`Timer phase Executed`);
},0);

setImmediate(() => {
    console.log(`Check phase Executed`);
});

readFile(__filename, () => {
    console.log(`File read callback (I/O phase)`);

    setTimeout(() => {
        console.log(`SetTimeout inside I/O callback`);
    },0);

    setImmediate(() => {
        console.log(`setImmediate inside I/O callback`);
    });
});

process.nextTick(() => {
    console.log(`Process.nextTick (Microtask phase)`);
});

Promise.resolve().then(() => {
    console.log(`Promise.resolve (Microtask phase)`);
});
console.log(`End`);