// Call Stack

function firstFunction(){
    console.log("Inside first function");
    secondFunction();
    console.log("Existing first Function");
}
function secondFunction(){
    console.log("Inside the secong function");
}

firstFunction();

//-------------------------------------

// Execution Context

function outerFuntion(){
    console.log("Inside outer function");
    function innerFunction(){
        console.log("inside inner function");
    }
}
outerFuntion();
innerFunction();