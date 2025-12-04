const searchInput = document.getElementById('search-input');
const resultsDiv = document.getElementById('results');

function performSearch(query) {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Result for ${query} `)
        }, 1000);
    });
}

function Debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}

const debouncedSearch = Debounce(function (event) {
    (async () => {
        const query = event.target.value;
        if (query.trim() === '') {
            resultsDiv.innerHTML = '';
            return;
        }
        const results = await performSearch(query);
        resultsDiv.innerHTML = results;
    })();
}, 500);

searchInput.addEventListener('input', debouncedSearch);
