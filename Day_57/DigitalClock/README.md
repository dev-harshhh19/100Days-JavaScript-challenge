# Digital Clock

A real-time digital clock that displays the current time in 12-hour format with AM/PM indicator, featuring a sleek dark/light theme toggle.

## Features

- **Real-time Clock Display**: Shows hours, minutes, and seconds that update every second
- **12-Hour Format**: Displays time in 12-hour format with AM/PM indicator
- **Dark/Light Theme Toggle**: Switch between dark mode (green text on black) and light mode
- **Smooth Transitions**: CSS transitions for a polished theme switching experience
- **Emoji Theme Button**: Moon emoji (🌙) for dark mode, Sun emoji (☀️) for light mode
- **Responsive Design**: Centered layout that works on all screen sizes

## Files

- `DigitalClock.html` - HTML structure for the clock
- `DigitalClock.css` - Styling with dark/light theme support
- `DigitalClock.js` - JavaScript logic for time display and theme toggling

## How It Works

1. The clock retrieves the current time using JavaScript's `Date` object
2. Hours are converted to 12-hour format and padded with leading zeros
3. The time updates every 1000 milliseconds (1 second)
4. Click the circular theme button in the top-right to toggle between dark and light modes
5. The theme toggle automatically updates the button emoji

## Usage

Simply open `DigitalClock.html` in your browser to see the clock in action. Click the theme button to toggle between light and dark modes.

## Technologies Used

- HTML5
- CSS3 (with CSS variables for theming)
- Vanilla JavaScript
