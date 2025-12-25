/* Main JavaScript Connector File - Root Level */
/* Imports and initializes all modular JS files from js/ folder */

import { fetchWeather } from './js/api.js';
import CONFIG from './js/config.js';
import storage from './js/storage.js';
import effects from './js/effects.js';

// DOM Elements
const elements = {
    cityInput: document.getElementById('city-input'),
    searchButton: document.getElementById('search-button'),
    weatherDetails: document.getElementById('weather-details'),
    cityName: document.getElementById('city-name'),
    temperature: document.getElementById('temperature'),
    weatherCondition: document.getElementById('weather-condition'),
    humidity: document.getElementById('humidity'),
    windSpeed: document.getElementById('wind-speed'),
    forecastContainer: document.getElementById('forecast-container'),
    toggleButton: document.getElementById('toggle-celsius-fahrenheit'),
    themeToggleButton: document.getElementById('toggle-theme'),
    errorMessage: document.getElementById('error-message'),
    background: document.getElementById('background')
};

let appState = {
    currentTemp: 0,
    forecastTemps: [],
    isCelsius: true,
    currentCondition: ''
};

function init() {
    loadPreferences();
    const lastCity = storage.getLastCity() || CONFIG.defaultCity;
    loadWeather(lastCity);
    setupEventListeners();
    fadeInContent();
    updateNavLinks();
}

function updateNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add('active');
        }
    });
}

function setupEventListeners() {
    elements.searchButton.addEventListener('click', search);
    elements.cityInput.addEventListener('keypress', handleKeyPress);
    elements.cityInput.addEventListener('focus', showSuggestions);
    elements.cityInput.addEventListener('input', showSuggestions);
    elements.toggleButton.addEventListener('click', toggleTemp);
    elements.themeToggleButton.addEventListener('click', toggleTheme);
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            hideSuggestions();
        }
    });
}

function handleKeyPress(e) {
    if (e.key === 'Enter') search();
}

function search() {
    const city = elements.cityInput.value.trim();
    if (city) {
        loadWeather(city);
        storage.addRecentSearch(city);
    }
}

async function loadWeather(city) {
    try {
        showLoading();
        const data = await fetchWeather(city);
        
        displayWeather(data.current);
        displayForecast(data.forecast);
        appState.currentCondition = data.current.weather[0].main.toLowerCase();
        
        updateBackground(appState.currentCondition);
        effects.renderEffects(appState.currentCondition);
        
        storage.setLastCity(city);
        hideError();
    } catch (error) {
        showError(error.message);
    }
}

function displayWeather(data) {
    appState.currentTemp = data.main.temp;
    
    elements.cityName.textContent = `${data.name}, ${data.sys.country}`;
    elements.temperature.textContent = `${Math.round(appState.currentTemp)}${appState.isCelsius ? '°C' : '°F'}`;
    elements.weatherCondition.textContent = data.weather[0].description;
    elements.humidity.textContent = 'Humidity: ' + data.main.humidity + '%';
    elements.windSpeed.textContent = 'Wind: ' + data.wind.speed + ' m/s';
    
    elements.weatherDetails.style.display = 'block';
}

function displayForecast(data) {
    elements.forecastContainer.innerHTML = '';
    appState.forecastTemps = [];

    const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00'));

    dailyData.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        const temp = item.main.temp;
        const condition = item.weather[0].description;

        appState.forecastTemps.push(temp);

        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <div class="forecast-day">${day}</div>
            <div class="forecast-temp">${Math.round(temp)}${appState.isCelsius ? '°C' : '°F'}</div>
            <div class="forecast-condition">${condition}</div>
        `;
        elements.forecastContainer.appendChild(card);
    });
}

function toggleTemp() {
    appState.isCelsius = !appState.isCelsius;
    storage.setTemperatureUnit(appState.isCelsius ? 'celsius' : 'fahrenheit');

    if (appState.isCelsius) {
        elements.temperature.textContent = Math.round(appState.currentTemp) + '°C';
        elements.toggleButton.textContent = 'Switch to °F';
        updateForecastTemps('celsius');
    } else {
        const tempF = (appState.currentTemp * 9/5) + 32;
        elements.temperature.textContent = Math.round(tempF) + '°F';
        elements.toggleButton.textContent = 'Switch to °C';
        updateForecastTemps('fahrenheit');
    }
}

function updateForecastTemps(unit) {
    const cards = document.querySelectorAll('.forecast-temp');
    cards.forEach((card, index) => {
        if (unit === 'fahrenheit') {
            const tempF = (appState.forecastTemps[index] * 9/5) + 32;
            card.textContent = Math.round(tempF) + '°F';
        } else {
            card.textContent = Math.round(appState.forecastTemps[index]) + '°C';
        }
    });
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    storage.setTheme(isDark ? 'dark' : 'light');
    updateThemeButton();
}

function updateThemeButton() {
    if (elements.themeToggleButton) {
        const isDark = document.body.classList.contains('dark-theme');
        elements.themeToggleButton.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    }
}

function updateBackground(condition) {
    const gradients = {
        'clear': '#6879e3',
        'clouds': 'linear-gradient(135deg, #757f9a 0%, #d7dde8 100%)',
        'rain': 'linear-gradient(135deg, #4b79a1 0%, #283e51 100%)',
        'drizzle': 'linear-gradient(135deg, #4b79a1 0%, #283e51 100%)',
        'snow': 'linear-gradient(135deg, #e6dada 0%, #274046 100%)',
        'thunderstorm': 'linear-gradient(135deg, #373b44 0%, #4286f4 100%)',
        'mist': 'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)',
        'fog': 'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)',
        'haze': 'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)'
    };

    elements.background.style.background = gradients[condition] || gradients['clear'];
}

function loadPreferences() {
    const theme = storage.getTheme();
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    updateThemeButton();

    const tempUnit = storage.getTemperatureUnit();
    if (tempUnit === 'fahrenheit') {
        appState.isCelsius = false;
        elements.toggleButton.textContent = 'Switch to °C';
    }
}

function showSuggestions() {
    const inputValue = elements.cityInput.value.trim().toLowerCase();
    const searches = storage.getRecentSearches();
    
    let suggestions = [];
    
    // Filter recent searches by input
    if (inputValue) {
        suggestions = searches.filter(city => 
            city.toLowerCase().includes(inputValue)
        );
    } else {
        suggestions = searches;
    }
    
    if (suggestions.length === 0) {
        hideSuggestions();
        return;
    }

    const existing = document.querySelector('.search-suggestions');
    if (existing) existing.remove();

    const container = document.createElement('div');
    container.className = 'search-suggestions';

    suggestions.forEach(city => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.textContent = city;
        item.addEventListener('click', () => {
            elements.cityInput.value = city;
            loadWeather(city);
            hideSuggestions();
        });
        container.appendChild(item);
    });

    elements.cityInput.parentElement.appendChild(container);
}

function hideSuggestions() {
    const existing = document.querySelector('.search-suggestions');
    if (existing) existing.remove();
}

function showLoading() {
    elements.temperature.innerHTML = '<div class="loading"></div>';
    elements.weatherCondition.textContent = 'Loading...';
}

function showError(message) {
    elements.errorMessage.textContent = message || 'City not found, please try again!';
    elements.errorMessage.style.display = 'block';
    setTimeout(() => {
        elements.errorMessage.style.display = 'none';
    }, 3000);
}

function hideError() {
    elements.errorMessage.style.display = 'none';
}

function fadeInContent() {
    setTimeout(() => {
        document.querySelector('.weather-info').classList.add('fade-in');
    }, 100);
}

document.addEventListener('DOMContentLoaded', init);
