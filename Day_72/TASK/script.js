// AbortController Demo - Cancel Previous Fetch Requests

let currentController = null;
let currentRequestType = 'None';
let requestStartTime = 0;

// DOM Elements
const fetchUserBtn = document.getElementById('fetchUserBtn');
const fetchPostsBtn = document.getElementById('fetchPostsBtn');
const fetchCommentsBtn = document.getElementById('fetchCommentsBtn');
const cancelBtn = document.getElementById('cancelBtn');
const statusValue = document.getElementById('statusValue');
const requestType = document.getElementById('requestType');
const requestTime = document.getElementById('requestTime');
const loadingIndicator = document.getElementById('loadingIndicator');
const responseContent = document.getElementById('responseContent');
const logContent = document.getElementById('logContent');

// API URLs
const APIS = {
    user: 'https://jsonplaceholder.typicode.com/users/1',
    posts: 'https://jsonplaceholder.typicode.com/posts?_limit=5',
    comments: 'https://jsonplaceholder.typicode.com/comments?_limit=5'
};

// Add log entry
function addLog(message, type = 'info') {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry ${type}`;
    logEntry.textContent = `[${timestamp}] ${message}`;
    logContent.appendChild(logEntry);
    logContent.scrollTop = logContent.scrollHeight;
}

// Update status UI
function updateStatus(status, type = 'None', time = '0ms') {
    statusValue.textContent = status;
    statusValue.className = `value ${status.toLowerCase()}`;
    requestType.textContent = type;
    requestTime.textContent = time;
}

// Show/Hide loading indicator
function setLoading(isLoading) {
    if (isLoading) {
        loadingIndicator.classList.remove('hidden');
    } else {
        loadingIndicator.classList.add('hidden');
    }
}

// Display response data
function displayResponse(data, type) {
    let html = '';
    
    if (type === 'User') {
        html = `<div class="json-display">
            <strong>Name:</strong> ${data.name}<br>
            <strong>Email:</strong> ${data.email}<br>
            <strong>Phone:</strong> ${data.phone}<br>
            <strong>Company:</strong> ${data.company.name}
        </div>`;
    } else if (type === 'Posts') {
        html = '<div class="json-display">';
        data.forEach((post, i) => {
            html += `<strong>Post ${i + 1}:</strong> ${post.title}<br>`;
        });
        html += '</div>';
    } else if (type === 'Comments') {
        html = '<div class="json-display">';
        data.forEach((comment, i) => {
            html += `<strong>Comment ${i + 1}:</strong> ${comment.name.substring(0, 40)}...<br>`;
        });
        html += '</div>';
    }
    
    responseContent.innerHTML = html;
}

// Main fetch function with AbortController
async function fetchDataWithAbort(url, type) {
    // Abort previous request if it exists
    if (currentController) {
        currentController.abort();
        addLog(`Aborted previous request: ${currentRequestType}`, 'aborted');
    }

    // Create new AbortController
    currentController = new AbortController();
    currentRequestType = type;
    requestStartTime = Date.now();

    // Update UI
    updateStatus('Loading', type, '0ms');
    setLoading(true);
    addLog(`Starting fetch: ${type}`, 'loading');

    try {
        const response = await fetch(url, { 
            signal: currentController.signal 
        });
        
        const data = await response.json();
        const elapsed = Date.now() - requestStartTime;

        // Update UI with success
        updateStatus('Success', type, `${elapsed}ms`);
        setLoading(false);
        displayResponse(data, type);
        addLog(`Completed: ${type} (${elapsed}ms)`, 'success');

    } catch (error) {
        const elapsed = Date.now() - requestStartTime;

        if (error.name === 'AbortError') {
            // Request was aborted
            updateStatus('Aborted', currentRequestType, `${elapsed}ms`);
            setLoading(false);
            responseContent.innerHTML = '<p class="placeholder">Request cancelled</p>';
            addLog(`Request aborted: ${type}`, 'aborted');
        } else {
            // Other errors
            updateStatus('Error', currentRequestType, `${elapsed}ms`);
            setLoading(false);
            responseContent.innerHTML = `<p class="placeholder" style="color: var(--danger)">Error: ${error.message}</p>`;
            addLog(`Error: ${error.message}`, 'error');
        }
    }
}

// Manual cancel function
function cancelRequest() {
    if (currentController) {
        currentController.abort();
        const elapsed = Date.now() - requestStartTime;
        updateStatus('Aborted', currentRequestType, `${elapsed}ms`);
        setLoading(false);
        responseContent.innerHTML = '<p class="placeholder">Request cancelled by user</p>';
        addLog(`Manually cancelled: ${currentRequestType}`, 'aborted');
        currentController = null;
    } else {
        addLog('No active request to cancel', 'info');
    }
}

// Event Listeners
fetchUserBtn.addEventListener('click', () => {
    fetchDataWithAbort(APIS.user, 'User');
});

fetchPostsBtn.addEventListener('click', () => {
    fetchDataWithAbort(APIS.posts, 'Posts');
});

fetchCommentsBtn.addEventListener('click', () => {
    fetchDataWithAbort(APIS.comments, 'Comments');
});

cancelBtn.addEventListener('click', cancelRequest);

// Initial log
addLog('AbortController demo ready', 'info');
