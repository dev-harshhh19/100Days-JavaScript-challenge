const user = { name: "Harshad", age: 19};
localStorage.setItem('user', JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser);
// --------------------------------

const color = ['red', 'green', 'blue'];
localStorage.setItem('color',JSON.stringify(color));

const storedColor = JSON.parse(localStorage.getItem('color'));
console.log(storedColor);
// --------------------------------

