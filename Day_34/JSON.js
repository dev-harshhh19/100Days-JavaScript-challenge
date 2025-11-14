const user = {
    name: "Harshad",
    age: 19,
    isStudent: true
};
const jsonString = JSON.stringify(user);
console.log(jsonString);

const User = JSON.parse(jsonString);
console.log(User);

//JSON String To Object `JSON.parse()`
console.log(`Name: ${User.name}`);
console.log(`Age: ${User.age}`);
console.log(`Is Student: ${User.isStudent}`);

