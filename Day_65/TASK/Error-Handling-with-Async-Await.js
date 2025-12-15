async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data fetched successfully:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData();

/*************************************************************/ 
