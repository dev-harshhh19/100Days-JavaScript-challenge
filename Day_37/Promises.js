// Promises (microtask) priority
console.log(`Start`);
function fetchAPIFromServer(){
    console.log(`Start fetching API...`);
    setTimeout(() => {
        console.log(`API Fetched from server`);
    }, 2000);
}
fetchAPIFromServer();
console.log(`End`);