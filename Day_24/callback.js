function greetuser(name, callback){
    console.log(`Hello, ${name}!`);
}
console.log(`Start`);
setTimeout(() => greetuser(`harshad`), 1000);
console.log(`End`);

// --------------------------------------------------------------

function fetchData(callback){
    setTimeout(() => {
        const data = {name: "Harshad", age: 25, city: "Mumbai"};
        callback(data);
    }, 1000);
}
fetchData(function(data){
    console.log(`Data received: ${JSON.stringify(data)}`);
    // console.log(`name ${data.name}`);
})

// --------------------------------------------------------------

// callback hell 
function step1(callback){
    setTimeout(() => {
        console.log(`Step 1 Completed`);
        callback();
    }, 1500);
}
function step2(callback){
    setTimeout(() => {
        console.log(`Step 2 Completed`);
        callback();
    }, 2000);
}
function step3(callback){
    setTimeout(() => {
        console.log(`Step 3 Completed`);
        callback();
    }, 2500);
}
step1(() =>{
    step2(() => {
        step3(() => {
            console.log(`All Steps Completed`);
        });
    });
});

// --------------------------------------------------------------

// Promises

function step1(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log(`Step1 Completed! (Promise)`);
            resolve();
        },1000);
    });
}
function step2(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log(`Step2 Completed! (Promise)`);
            resolve();
        },2000);
    });
}
function step3(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log(`Step3 Completed! (Promise)`);
            resolve();
        },3000);
    });
}
step1()
    .then(() => step2())
    .then(() => step3())
    .then(() => {
        console.log(`All Steps Completed`);
    });
    
// --------------------------------------------------------------

// Task
function fileDownload(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log(`File processed`);
            resolve();
        }, 3000);
    });
}

fileDownload()
    .then(() =>{
        console.log(`File downloaded successfully`);
    })
    .catch(() =>{
        console.log(`File download failed`);
    });

// -------------------------------------------------------------------