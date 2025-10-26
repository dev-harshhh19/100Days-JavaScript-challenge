const now = new Date();
console.log(now); // Prints current Date and Time

// Specific date (year, monthIndex, day)
const birthday = new Date(2000, 1, 1);
console.log(birthday);

// Using a date string

const meeting = new Date("2025-10-25T10:30:00");
console.log(meeting);

// ------------------------------------------------------

// Date Components

const today = new Date();

console.log(`Year: ${today.getFullYear()}`); // Get the year
console.log(`month: ${today.getMonth() + 1}`); // Get the month (0-11, so add 1)
console.log(`Date: ${today.getDate()}`); // Get the day of the month
console.log(`Day: ${today.getDay()}`); // Get the day of the week
console.log(`Hour: ${today.getHours()}`); // Get the hour
console.log(`Minutes: ${today.getMinutes()}`); // Get the minutes
console.log(`Seconds: ${today.getSeconds()}`); // Get the seconds
console.log(`Milliseconds: ${today.getMilliseconds()}`); // Get the milliseconds

// --------------------------------------------------------

// Formatting Dates

const d = new Date();
const formattedDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
console.log(`Formatted Date: ${formattedDate}`); // Formatted Date: DD/MM/YYYY

// --------------------------------------------------------

// Math Object

console.log(Math.PI);
console.log(Math.floor(4.7));

// --------------------------------------------------------

// Random Number Example

const RandomNumber = Math.floor(Math.random()* 100 ) + 1;
console.log(`Random Number between 1 and 100: ${RandomNumber}`);

