// Demo Implementation

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchStatus = document.getElementById('searchStatus');
const searchResults = document.getElementById('searchResults');
const rapidRequestBtn = document.getElementById('rapidRequestBtn');
const throttledRequestBtn = document.getElementById('throttledRequestBtn');
const resetBtn = document.getElementById('resetBtn');
const requestCount = document.getElementById('requestCount');
const rateLimitStatus = document.getElementById('rateLimitStatus');
const retryAfter = document.getElementById('retryAfter');
const rateLimitWarning = document.getElementById('rateLimitWarning');
const logContainer = document.getElementById('logContainer');

// State
let totalRequests = 0;
let isRateLimited = false;
let resetTimer = null;

// Add log entry
function addLog(message) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    const time = new Date().toLocaleTimeString();
    entry.textContent = `[${time}] ${message}`;
    logContainer.appendChild(entry);
    logContainer.scrollTop = logContainer.scrollHeight;
}

// Update UI
function updateStatus() {
    requestCount.textContent = totalRequests;
    rateLimitStatus.textContent = isRateLimited ? 'Yes' : 'No';
    rateLimitStatus.className = isRateLimited ? 'value limited' : 'value normal';
    rateLimitWarning.classList.toggle('hidden', !isRateLimited);
}

// Debounced search
function search(query) {
    if (!query.trim()) {
        searchResults.innerHTML = '<p class="placeholder">Enter search term</p>';
        return;
    }
    
    searchStatus.classList.remove('hidden');
    addLog(`Searching for: "${query}"`);

    setTimeout(() => {
        searchStatus.classList.add('hidden');
        const mockResults = [
            `Result 1: ${query} - JavaScript`,
            `Result 2: ${query} - Web Development`,
            `Result 3: ${query} - API Integration`
        ];
        
        searchResults.innerHTML = mockResults
            .map(r => `<div class="result-item">${r}</div>`)
            .join('');
        addLog(`Search results: ${mockResults.length} items`);
    }, 500);
}

const debouncedSearch = debounce(search, 500);

// Simulate API request with rate limit
async function simulateRequest(label) {
    if (isRateLimited) {
        addLog(`Request blocked: Rate limited`);
        return;
    }

    totalRequests++;
    updateStatus();
    addLog(`Request #${totalRequests}: ${label}`);

    // Simulate 429 after 5 requests
    if (totalRequests >= 5) {
        isRateLimited = true;
        updateStatus();
        retryAfter.textContent = '5 sec';
        addLog('Rate limit reached (429 Too Many Requests)');

        // Simulate reset after 5 seconds
        resetTimer = setTimeout(() => {
            isRateLimited = false;
            retryAfter.textContent = '-';
            updateStatus();
            addLog('Rate limit reset');
        }, 5000);
    }
}

// Throttled request handler
const throttledRequest = throttle(() => {
    simulateRequest('Throttled');
}, 1000);

// Event Listeners
searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});

rapidRequestBtn.addEventListener('click', () => {
    simulateRequest('Rapid');
});

throttledRequestBtn.addEventListener('click', () => {
    throttledRequest();
});

resetBtn.addEventListener('click', () => {
    totalRequests = 0;
    isRateLimited = false;
    retryAfter.textContent = '-';
    if (resetTimer) clearTimeout(resetTimer);
    updateStatus();
    logContainer.innerHTML = '<div class="log-entry">Reset complete</div>';
    addLog('Demo reset');
});

// Initial log
addLog('Rate limiting demo ready');
