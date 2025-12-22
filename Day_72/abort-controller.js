// Task: Cancel previous fetch() when a new request starts

let currentController = null;

async function fetchData(url, name) {
    // Abort previous fetch if it exists
    if (currentController) {
        console.log(`Aborting: ${name}`);
        currentController.abort();
    }

    // Create new AbortController
    currentController = new AbortController();

    console.log(`Starting: ${name}`);

    try {
        const response = await fetch(url, { signal: currentController.signal });
        const data = await response.json();
        console.log(`Completed: ${name}\n`);
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log(`Aborted: ${name}\n`);
        } else {
            console.error(`Error: ${error.message}\n`);
        }
    }
}

// Function to run the demo
async function runDemo() {
    console.log('=== AbortController Demo ===\n');

    fetchData('https://jsonplaceholder.typicode.com/users/1', 'Request 1');
    await new Promise(r => setTimeout(r, 100));
    
    fetchData('https://jsonplaceholder.typicode.com/posts/1', 'Request 2');
    await new Promise(r => setTimeout(r, 100));
    
    fetchData('https://jsonplaceholder.typicode.com/comments/1', 'Request 3');
    await new Promise(r => setTimeout(r, 2000));
}

// Run the demonstration
runDemo();
