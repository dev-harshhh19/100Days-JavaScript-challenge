# Countdown Timer

A functional countdown timer that allows users to set a duration in minutes and counts down to zero, with an integrated dark/light theme toggle.

## Features

- **Customizable Duration**: Enter any number of minutes to start the countdown
- **Real-time Display**: Shows remaining time in MM:SS format
- **Start Button**: Begins the countdown with input validation
- **Completion Alert**: Displays "Time's up!" when the countdown reaches zero
- **Dark/Light Theme Toggle**: Switch between light and dark modes seamlessly
- **Emoji Theme Button**: Moon emoji (🌙) for dark mode, Sun emoji (☀️) for light mode
- **Input Validation**: Ensures users enter valid positive numbers
- **Responsive Design**: Centered layout that works on all screen sizes

## Files

- `countdown-timer.html` - HTML structure for the timer
- `countdown-timer.css` - Styling with dark/light theme support using CSS variables
- `countdown-timer.js` - JavaScript logic for countdown functionality and theme toggling

## How It Works

1. User enters the number of minutes in the input field
2. Click the "Start" button to begin the countdown
3. The timer displays the remaining time in MM:SS format
4. The countdown decreases by one second every 1000 milliseconds
5. When the timer reaches zero, it displays "Time's up!"
6. Click the circular theme button in the top-right to toggle between light and dark modes

## Input Validation

- Only accepts positive numbers
- Rejects NaN or negative values
- Shows an alert if invalid input is provided

## Usage

Simply open `countdown-timer.html` in your browser. Enter the desired number of minutes and click "Start" to begin the countdown. Use the theme button to switch between light and dark modes.

## Technologies Used

- HTML5
- CSS3 (with CSS variables for theming)
- Vanilla JavaScript (with `setInterval` for timing)
