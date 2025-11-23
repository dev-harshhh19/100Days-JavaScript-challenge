// parentElement
const child = document.querySelector('.child');
console.log(child.parentElement);

// children
const list = document.querySelector('.list');
console.log(list.children);

// nextElementSibling
const item = document.querySelector('.item');
console.log(item.nextElementSibling);

// previousElementSibling
const items = document.querySelectorAll('.item')[1];
console.log(items.previousElementSibling);
