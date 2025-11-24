// click

button.addEventListener('click', function () {
    alert('Button clicked!');
})

// input
inputField.addEventListener('input', function () {
    alert(`Input changed to: ${inputField.value}`);  
})

// chnage
changeInputField.addEventListener('change', function() {
    alert('Input field changed!');
})

// submit

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
})
