// No API, Simulated Error data from local Json file or variable

async function fetchData() {
    try {
        // Simulating fetching data from a local JSON file
        const data = await new Promise((resolve, reject) => {
            const localData = { name: "Test Data", value: 42 };
            const shouldFail = Math.random() < 0.5; // 50% chance to fail
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData();