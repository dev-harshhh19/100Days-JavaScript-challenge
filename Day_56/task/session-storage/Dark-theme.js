const toggleButton = document.getElementById('toggle-theme');
const message = document.getElementById('message');

// Function to apply the theme based on session storage
function applyTheme() {
    const theme = sessionStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        message.textContent = "Dark Mode is Enabled (Session Storage)";
    } else {
        document.body.classList.remove('dark-mode');
        message.textContent = "Light Mode is Enabled (Session Storage)";
    }
}

// Event listener for the toggle button
toggleButton.addEventListener('click', () => {
    const currentTheme = sessionStorage.getItem('theme');
    if (currentTheme === 'dark') {
        sessionStorage.setItem('theme', 'light');
    } else {
        sessionStorage.setItem('theme', 'dark');
    }
    applyTheme();
});

// Apply the theme on initial load
applyTheme();

