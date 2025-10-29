console.log(this);

// Inside an Object Method
const user = {
    name: 'Harshad',
    greet(){
        console.log(this.name);
    }
};
user.greet();

// In Regular Function
function show(){
    console.log(this);
}
show();

// In Arrow Function
const obj = {
    name: 'Harshad',
    arrowFunction:() => {
        console.log(this.name);
    }
}

// using call(), apply(), and bind()
function greeting(){
    console.log(`Hi, ${this.name}`);
}

const person = { name: 'Harshad'};

greeting.call(person);
greeting.apply(person);

const boundGreeting = greeting.bind(person);
boundGreeting();

// In Event Handlers
document.getElementById('myBtn').addEventListener('click',function(){
    console.log(this);
});