const form = document.getElementById('signUpForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const errorMessage = document.getElementById('Error');
const usernameErrorEl = document.getElementById('usernameError');
const emailErrorEl = document.getElementById('emailError');
const passwordErrorEl = document.getElementById('passwordError');
const confirmErrorEl = document.getElementById('confirmError');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    let errors = [];

    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!usernameRegex.test(username)){
        errors.push("Username must be 3-15 characters and contain only letters, numbers, and underscores.");
    }

    if(!emailRegex.test(email)){
        errors.push("Please enter a valid email address.");
    }

    if(!passwordRegex.test(password)){
        errors.push("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
    } else if(password !== confirmPassword){
        errors.push("Passwords do not match.");
    }

    if(errors.length > 0){
        errorMessage.textContent = errors.join(" ");
        errorMessage.style.color = "red";
    } else {
        errorMessage.textContent = "Sign Up Successful!";
        errorMessage.style.color = "green";
        form.reset();
    }
});

const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        toggleThemeBtn.textContent = '🌙';
    } else {
        toggleThemeBtn.textContent = '☀️';
    }
});

