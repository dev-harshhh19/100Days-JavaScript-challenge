# Weather App

A beautiful, responsive weather application that provides real-time weather information and a 5-day forecast for any city worldwide.

## Features

✨ **Current Weather Information**
- City name and country code
- Temperature (with Celsius/Fahrenheit toggle)
- Weather condition description
- Humidity percentage
- Wind speed

🌤️ **5-Day Weather Forecast**
- Daily temperature predictions
- Weather conditions for each day
- Organized in an easy-to-read card layout

🎨 **Dynamic UI**
- Background changes based on weather conditions
- Smooth animations and transitions
- Responsive design for all devices
- Dark/Light theme toggle with glassmorphism effects
- Loading states and error handling
- Weather-specific animations

🏗️ **Modular Architecture**
- Separate CSS files for different components
- Modular JavaScript structure
- LocalStorage for user preferences
- Environment-based configuration

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modular design with animations and glassmorphism
- **JavaScript (ES6)**: Module-based architecture
- **OpenWeatherMap API**: Real-time weather data
- **LocalStorage**: Theme and preference persistence

## Setup Instructions

### 1. Get Your API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to "API keys" in your account dashboard
4. Copy your API key

### 2. Configure the Application

1. Open `js/config.js`
2. Find this line:
   ```javascript
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```
3. Replace with your actual API key:
   ```javascript
   const API_KEY = 'abc123def456ghi789'; // Your actual key
   ```

### 3. Run the Application

1. Open `index.html` in your web browser
2. The app will load with weather data
3. Search for any city to get its weather information

## Usage Guide

### Searching for Weather
1. Type a city name in the search box
2. Click the "Search" button or press Enter
3. View current weather and 5-day forecast

### Temperature Toggle
- Click "Switch to °F" to convert to Fahrenheit
- Click "Switch to °C" to convert back to Celsius

### Theme Toggle
- Click "Dark Mode" / "Light Mode" button
- Your preference is saved automatically

### Navigation
- **Home**: Main weather application
- **About**: App information and features
- **Contact**: Social media links

## Project Structure

```
WeatherApp/
├── index.html           # Home page
├── about.html           # About page
├── contact.html         # Contact page
├── styles.css           # CSS connector file
├── script.js            # JavaScript connector file
│
├── css/
│   ├── main.css         # Global styles and layout
│   ├── weather.css      # Weather display components
│   ├── forecast.css     # Forecast cards styling
│   ├── effects.css      # Animation effects
│   └── theme.css        # Dark mode styles
│
├── js/
│   ├── api.js           # OpenWeatherMap API integration
│   ├── config.js        # Configuration management
│   ├── storage.js       # LocalStorage management
│   └── effects.js       # Weather animation effects
│
└── README.md            # This file
```

## Weather Conditions & Backgrounds

The app dynamically changes background based on weather:

- **Clear/Sunny**: Solid color (#6879e3)
- **Clouds**: Gray gradient
- **Rain/Drizzle**: Blue-gray gradient
- **Snow**: White-gray gradient
- **Thunderstorm**: Dark blue gradient
- **Mist/Fog/Haze**: Gray gradient

## Responsive Design

The app is fully responsive and works on:
- Desktop computers (1920px and above)
- Laptops (1024px - 1920px)
- Tablets (768px - 1024px)
- Mobile phones (320px - 768px)

## API Integration

- **Current Weather**: Real-time weather for searched city
- **5-Day Forecast**: Hourly forecast data aggregated by day

## Error Handling

Graceful error handling for:
- Invalid city names
- Network connection issues
- API rate limiting
- Missing or invalid API keys

## License

This project is open source and available for educational purposes.

## Credits

- Weather data: [OpenWeatherMap](https://openweathermap.org/)
- Icons and design inspiration from various sources

---
