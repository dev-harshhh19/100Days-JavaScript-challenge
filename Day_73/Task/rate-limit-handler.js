// Rate Limit Handler - Detect and handle 429 Too Many Requests

class RateLimitHandler {
    constructor() {
        this.requestCount = 0;
        this.resetTime = null;
        this.isLimited = false;
        this.callbackOnLimit = null;
    }

    // Check if rate limit is exceeded
    isRateLimited() {
        if (this.resetTime && Date.now() < this.resetTime) {
            return true;
        }
        this.resetTime = null;
        this.isLimited = false;
        return false;
    }

    // Handle 429 response
    handleRateLimitResponse(headers) {
        const remaining = parseInt(headers.get('X-RateLimit-Remaining') || '0');
        const resetTime = parseInt(headers.get('X-RateLimit-Reset') || '0');

        if (remaining === 0) {
            this.isLimited = true;
            this.resetTime = resetTime * 1000;
            const waitTime = Math.ceil((this.resetTime - Date.now()) / 1000);
            
            if (this.callbackOnLimit) {
                this.callbackOnLimit(waitTime);
            }
            return true;
        }
        return false;
    }

    // Execute fetch with rate limit handling
    async fetchWithRateLimit(url, options = {}) {
        if (this.isRateLimited()) {
            const waitTime = Math.ceil((this.resetTime - Date.now()) / 1000);
            throw new Error(`Rate limit exceeded. Retry after ${waitTime} seconds`);
        }

        try {
            const response = await fetch(url, options);

            // Check for 429 status
            if (response.status === 429) {
                this.handleRateLimitResponse(response.headers);
                throw new Error('Rate limit exceeded');
            }

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            this.requestCount++;
            return response;
        } catch (error) {
            throw error;
        }
    }

    // Set callback for rate limit events
    onRateLimitReached(callback) {
        this.callbackOnLimit = callback;
    }

    // Reset handler
    reset() {
        this.requestCount = 0;
        this.resetTime = null;
        this.isLimited = false;
    }

    // Get status
    getStatus() {
        return {
            count: this.requestCount,
            isLimited: this.isRateLimited(),
            resetTime: this.resetTime
        };
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RateLimitHandler;
}
