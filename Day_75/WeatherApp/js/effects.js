class WeatherEffects {
    constructor() {
        this.container = null;
    }

    createContainer() {
        const container = document.createElement('div');
        container.className = 'weather-effects';
        return container;
    }

    removeEffects() {
        const existing = document.querySelector('.weather-effects');
        if (existing) existing.remove();
    }

    renderEffects(condition) {
        this.removeEffects();
        this.container = this.createContainer();

        switch (condition) {
            case 'rain':
            case 'drizzle':
                this.createRain();
                break;
            case 'snow':
                this.createSnow();
                break;
            case 'thunderstorm':
                this.createThunder();
                this.createRain();
                break;
            case 'clear':
                this.createSun();
                break;
            case 'clouds':
                this.createClouds();
                break;
        }

        document.querySelector('.weather-app').appendChild(this.container);
    }

    createRain() {
        for (let i = 0; i < 100; i++) {
            const drop = document.createElement('div');
            drop.className = 'rain-drop';
            drop.style.left = Math.random() * 100 + '%';
            drop.style.animationDelay = Math.random() * 2 + 's';
            drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
            this.container.appendChild(drop);
        }
    }

    createSnow() {
        for (let i = 0; i < 50; i++) {
            const flake = document.createElement('div');
            flake.className = 'snow-flake';
            flake.textContent = '*';
            flake.style.left = Math.random() * 100 + '%';
            flake.style.animationDelay = Math.random() * 3 + 's';
            flake.style.animationDuration = (Math.random() * 3 + 2) + 's';
            this.container.appendChild(flake);
        }
    }

    createThunder() {
        const thunder = document.createElement('div');
        thunder.className = 'thunder-effect';
        this.container.appendChild(thunder);

        const flash = () => {
            if (Math.random() > 0.7) {
                thunder.style.opacity = '0.8';
                setTimeout(() => {
                    thunder.style.opacity = '0';
                }, 100);
            }
        };

        setInterval(flash, 3000);
    }

    createSun() {
        const sun = document.createElement('div');
        sun.className = 'sun-effect';
        this.container.appendChild(sun);
    }

    createClouds() {
        for (let i = 0; i < 5; i++) {
            const cloud = document.createElement('div');
            cloud.className = 'cloud-effect';
            cloud.style.top = (Math.random() * 30 + 10) + '%';
            cloud.style.animationDelay = (i * 2) + 's';
            cloud.style.animationDuration = (Math.random() * 20 + 30) + 's';
            this.container.appendChild(cloud);
        }
    }
}

export default new WeatherEffects();
