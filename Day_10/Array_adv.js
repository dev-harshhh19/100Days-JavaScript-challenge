// map()
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map(function(num){
    return num * 2;
});
console.log(double);

//-------------------------------------

// filter()
const number = [1, 2, 3, 4, 5];
const evenNumbers = number.filter(function(num){
    return num % 2 === 0;
});
console.log(evenNumbers);

//-------------------------------------

// reduce()
const numberReduce = [1, 2, 3, 4, 5];
const sum = numberReduce.reduce(function(acc, num){
    return acc + num;
}, 0);
console.log(sum);

//-------------------------------------

// forEach()
const color = ['Pink','Purple','Violet'];
color.forEach(color => console.log(color));

//-------------------------------------

// some()
const fruits = ['Apple', 'Banana', 'Mango'];
const hasMango = fruits.some(function(fruits){
    return fruits === 'Mango';
});
console.log(hasMango);

//-------------------------------------

// every()
const games = ['Chess', 'Cricket', 'Go'];
const allHaveMoreThan3Letters = games.every(function(games){
    return games.length;
});
console.log(allHaveMoreThan3Letters);

//-------------------------------------

// find()
const locations = ['Paris', 'London', 'New York','Germany','Spain'];
const FoundLocation = locations.find(function(locations){
    return locations === 'Germany';
});
console.log(FoundLocation);

//-------------------------------------