class StorageManager {
    constructor() {
        this.prefix = 'weather_app_';
    }

    setTheme(theme) {
        localStorage.setItem(this.prefix + 'theme', theme);
    }

    getTheme() {
        return localStorage.getItem(this.prefix + 'theme');
    }

    setLastCity(city) {
        localStorage.setItem(this.prefix + 'lastCity', city);
    }

    getLastCity() {
        return localStorage.getItem(this.prefix + 'lastCity');
    }

    setTemperatureUnit(unit) {
        localStorage.setItem(this.prefix + 'tempUnit', unit);
    }

    getTemperatureUnit() {
        return localStorage.getItem(this.prefix + 'tempUnit') || 'celsius';
    }

    addRecentSearch(city) {
        let searches = this.getRecentSearches();
        searches = searches.filter(item => item.toLowerCase() !== city.toLowerCase());
        searches.unshift(city);
        searches = searches.slice(0, 5);
        localStorage.setItem(this.prefix + 'recentSearches', JSON.stringify(searches));
    }

    getRecentSearches() {
        const searches = localStorage.getItem(this.prefix + 'recentSearches');
        return searches ? JSON.parse(searches) : [];
    }

    clearRecentSearches() {
        localStorage.removeItem(this.prefix + 'recentSearches');
    }

    setContactMessage(message) {
        const messages = this.getContactMessages();
        messages.push({
            ...message,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem(this.prefix + 'contactMessages', JSON.stringify(messages));
    }

    getContactMessages() {
        const messages = localStorage.getItem(this.prefix + 'contactMessages');
        return messages ? JSON.parse(messages) : [];
    }
}

export default new StorageManager();
