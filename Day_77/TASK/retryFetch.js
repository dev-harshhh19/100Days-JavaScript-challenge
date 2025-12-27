const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


export async function retryFetch(url, options = {}, retries = 3, delayMs = 400, onAttempt) {
    let lastError;

    for (let attempt = 1; attempt <= retries; attempt++) {
        onAttempt?.(attempt);

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            lastError = error;

            if (attempt < retries) {
                await wait(delayMs); // brief pause before the next attempt
            }
        }
    }

    throw new Error(`Failed to fetch after ${retries} attempts: ${lastError?.message || "unknown error"}`);
}