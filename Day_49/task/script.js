const form = document.getElementById('signupForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    if (username === "") {
        usernameError.textContent = "Username is required";
        isValid = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    if (isValid) {
        console.log("Form submitted successfully!");
        alert("Account created!");
       
        form.reset();
    }
});
