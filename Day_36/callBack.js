/*
function setUsername(username){
    this.username = username;
    console.log("hii");
    
}
function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}
const user = new createUser("Harshad", "Hi@harsh.com", "harsh@password");
console.log(user);

// ----------------------------------

function fetchUserData(userId, callback){
    setTimeout(() => {
        const userData = {id: userId, name: "harshad"};
        callback(userData);
    }, 2000);
}
fetchUserData(1, function(data){
    console.log("User Data: ", data);
})
*/
// ---------------------------------

function startCar(car, carModel, callback){
    setTimeout(() => {
        const message = `The ${car} ${carModel} is starting...`
        callback(message)
    }, 1000)
}
function startingCar(car, carModel, callback){
    setTimeout(() => {
        const carStart = `The ${car} ${carModel} is started... Wroom Wroom`
        callback(carStart)
    }, 2000)
}
startCar("BMW", "M4 F82", function(message){
    console.log(message);  
    startingCar("BMW", "M4 F82", function(carStart){
        console.log(carStart);
    })
})
