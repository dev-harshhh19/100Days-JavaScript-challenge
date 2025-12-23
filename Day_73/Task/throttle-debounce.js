// Throttle: Execute function at most once per delay milliseconds
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            return func.apply(this, args);
        }
    };
}

// Debounce: Execute function after delay milliseconds of inactivity
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { throttle, debounce };
}
