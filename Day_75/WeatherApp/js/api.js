import CONFIG from './config.js';

async function fetchWeather(city) {
    try {
        const currentUrl = `${CONFIG.baseUrl}/weather?q=${city}&appid=${CONFIG.apiKey}&units=metric`;
        const forecastUrl = `${CONFIG.baseUrl}/forecast?q=${city}&appid=${CONFIG.apiKey}&units=metric`;

        const [currentRes, forecastRes] = await Promise.all([
            fetch(currentUrl),
            fetch(forecastUrl)
        ]);

        if (!currentRes.ok) {
            throw new Error('City not found');
        }

        const currentData = await currentRes.json();
        const forecastData = await forecastRes.json();

        return {
            current: currentData,
            forecast: forecastData
        };
    } catch (error) {
        throw error;
    }
}

export { fetchWeather, CONFIG };
