// Basic setTimeout Async bahavior

console.log(`Logging Start Time`);
function displayCurrentTime(){
    setTimeout(() => {
        const currentTime = new Date().toLocaleTimeString();
        console.log(`CurrentTime: ${currentTime}`);
    },3000);
}
displayCurrentTime();
console.log(`Logging End Time`);