// Conditional Statements

// 1. If statements
let temperature = 30;
if (temperature > 25) {
    console.log("It's a hot day.");
}

//--------------------------------------------------

// 2. If-Else statements
let age = 17;
if (age < 18) {
    console.log("You are a minor.");
}else{
    console.log("You are an Adult.");
}

//--------------------------------------------------

// 3. Else If statements
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
}else if (score >= 80) {
    console.log("Grade: B");
}else{
    console.log("Grade: C");
}

//--------------------------------------------------

// 4. Nested If statements
let number = 15;
if(number > 10){
    if(number < 20){
        console.log(`The number ${number} is between 10 and 20`);
    }
    console.log(`The number ${number} is greater than 10`);
}else{
    console.log(`The number ${number} is 10 or less`);
}

// --------------------------------------------------

// 5. Ternary Operator
let num = 20;
let outPut = (num >=50) ? "Small" : "Big";
console.log(outPut);

//--------------------------------------------------

// 6. Switch Case
const day = "Monday";
switch (day){
	case "Monday":
		console.log("Start of the Week");
		break;
	case "Wednesday":
		console.log("MidWeek");
		break;
	case "Friday":
		console.log("Almost Weekend");
		break;
	default:
		console.log("Just another day");
}

//--------------------------------------------------

//Task
// Write a grading program

const marks = 75;
if (marks>90){
    console.log("Grade A");
}else if(marks>80){
    console.log("Grade B");
}else if(marks>70){
    console.log("Grade C");
}else if(marks>60){
    console.log("Grade D");
}else{
    console.log("Grade F");
}
//--------------------------------------------------