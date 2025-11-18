// Example
let checkEven = new Promise((resolve, reject) => {
    let number = 9;
    if(number %2 === 0){
        resolve(`The ${number} is even`)
    } else {
        reject(`The ${number} is odd`)
    }
})
checkEven.then((message) => {
    console.log(`success :${message}`);
}).catch((message) => {
    console.log(`failure: ${message}`);
})
// ------------------------------------------------------

// Promise.call()
Promise.all([
    Promise.resolve("Task 1 Completed"),
    Promise.resolve("Task 2 Completed"),
    Promise.resolve("Task 3 Failed")
]).then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message)
})

// Promise.race()
Promise.race([
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1 Finished")
        }, 1000);
    }),
    new Promise((resolve) => {
        resolve("Task 2 Finished")
    },0)
]).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

// ------------------------------------------------------
// Promise.any()
Promise.any([
    Promise.reject("Task 1 Finished"),
    Promise.resolve("Task 2 Finished"),
    Promise.resolve("Task 3 Completed")
]).then((result) => console.log(result))
.catch((error) => console.log(error));

// --------------------------------------------------------------------
// Promises async & await:
//Async()
function fetchUser(id){
    return new promose(() => {
        resolve({id: id, name: "Harshad"})
    }, 1000)
}
async function logUser(UserId) {
    console.log("Fieching user...")
    let user = await fetchUser(UserId)
    console.log(`User Found: ${user.name}`);
    return UserId;
}

// ------------------------------------------------------------
// Error Handling with async/await
function carParking(slotNumber){
    if (slotNumber > 100){
        throw new Error(`Parking slot ${slotNumber} is available`)
    } else {
        return `car parked in the slot`;
    }
}
async function manageParking(slotNumber){
    try {
        let parkingStatus = new carParking(slotNumber);
        console.log(parkingStatus);
    } catch(error){
        console.log(`Error: ${error.message}`);
    } 
    
}
manageParking(59);