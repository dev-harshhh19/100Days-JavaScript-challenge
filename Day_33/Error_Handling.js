let number1 = 10;
let number2 = 0;
try {
    let result = number1 / number2;
    if (!isFinite(result)) {
        throw new Error(`Division by zero is not allowed`);
    }
} catch (error) {
    console.log(`Error: ${error.message}`);
} finally {
    console.log(`Execution completed`);
}

// --------------------------------------------

// Custom Error Handling
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
try {
    let userInput = "";
    if (userInput === "") {
        throw new ValidationError(`user input cannot be empty`);
    }
}
catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Validation Error: ${error.message}`);
    }
    else {
        console.log(`General Error: ${error.message}`);
    }
} finally {
    console.log(`Input Validation completed`);
}

// --------------------------------------------

// Promise Error Handling
function fetchData(){
    return new Promise((resolve, reject) => {
        let success = false;
        if(success){
            resolve(`Data Fetched successfully`);
        } else {
            reject(new Error(`Failed to fetched data`));
        }
    });
}
fetchData("https://api.exaple.com/data")
    .then(data => console.log(data))
    .catch(Error => console.log(`Error: ${Error.message}`));

// --------------------------------------------------------------

// async/await with try...catch

function fetchAPI(){
    return new Promise((resolve, reject) => {
        let success = false;
        if(success){
            resolve(`API Data Fetched successfully`);
        } else {
            reject(new Error(`Failed to fetched API data`));
        }
    });
}
async function getAPIData() {
    try{
        let data = await fetchAPI();
        console.log(data);
    } catch(error) {
        console.log(`Error: ${Error.message}`);
    } finally {
        console.log(`API fetch attempt completed`)
    }
}
getAPIData();