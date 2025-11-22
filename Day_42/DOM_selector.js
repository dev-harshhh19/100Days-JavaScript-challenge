// --------------------------------------------

// Selecting by ID
const uniqueElement = document.getElementById('unique-element');
console.log('Element with ID "unique-element":', uniqueElement);

// Selecting by Class Name (HTMLCollection)
const commonClassElements = document.getElementsByClassName('common-class');
console.log('Elements with class "common-class":', commonClassElements);

// Selecting by Tag Name
const paragraphElements = document.getElementsByTagName('p');
console.log('Paragraph elements:', paragraphElements);

// Using querySelector (returns FIRST match)
const firstCommonClass = document.querySelector('.common-class');
console.log('First element with class "common-class" using querySelector:', firstCommonClass);

// Using querySelectorAll (returns NodeList)
const allSpanElements = document.querySelectorAll('span');
console.log('All span elements using querySelectorAll:', allSpanElements);

// --------------------------------------------

// Changing textContent
const textPara = document.getElementById("text-change");
textPara.textContent = "The paragraph text has now been updated using textContent.";

// Using innerHTML to insert HTML
firstCommonClass.innerHTML = "<strong>Updated using innerHTML!</strong>";


// --------------------------------------------

uniqueElement.classList.add("highlighted");  // Adding a class
uniqueElement.classList.remove("unused-class"); // Removing (if exists)
uniqueElement.classList.toggle("active-box");   // Toggle state
console.log(uniqueElement.classList);


// --------------------------------------------
// Applying styles directly
uniqueElement.style.color = "red";
uniqueElement.style.fontSize = "20px";
uniqueElement.style.backgroundColor = "black";
uniqueElement.style.padding = "10px";

// Applying styles using classList + CSS (preferred in real projects)
// You would normally define a CSS class, but here we demonstrate inline
firstCommonClass.style.border = "2px solid green";
firstCommonClass.style.marginTop = "10px";


// --------------------------------------------
/*
Note:
These methods are some of the essential building blocks of DOM manipulation in JavaScript.
Some changes will appear directly on the webpage, while others will show up in the console.

Feel free to experiment, add more elements, try different selectors, and play around with various style changes to get more comfortable with how the DOM works!
*/