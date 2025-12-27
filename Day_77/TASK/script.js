import { retryFetch } from './retryFetch.js';

const urlInput = document.getElementById('url');
const attempts = document.getElementById('attempts');
const result = document.getElementById('result');
const fetchBtn = document.getElementById('fetchBtn');
const failBtn = document.getElementById('failBtn');

const setBusy = (state) => {
    fetchBtn.disabled = state;
    failBtn.disabled = state;
};

const runFetch = async (targetUrl) => {
    attempts.textContent = '';
    result.textContent = 'Fetching…';
    setBusy(true);

    try {
        const data = await retryFetch(targetUrl, {}, 3, 500, (n) => {
            attempts.textContent += `Attempt ${n}\n`;
        });

        attempts.textContent += 'Success!\n';
        result.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        attempts.textContent += 'All attempts failed.\n';
        result.textContent = error.message;
    } finally {
        setBusy(false);
    }
};

fetchBtn.addEventListener('click', () => {
    runFetch(urlInput.value.trim());
});

failBtn.addEventListener('click', () => {
    const failingUrl = 'https://httpstat.us/503';
    urlInput.value = failingUrl;
    runFetch(failingUrl);
});