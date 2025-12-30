import { fetchGitHubUser, fetchUserRepos, getTopLanguages } from './github-api.js';
import { displayUserInfo, displayError } from './ui.js';

document.getElementById('search-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('search-input').value.trim();
    
    if (username) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '<p class="loading">Loading user data...</p>';
        
        try {
            const userData = await fetchGitHubUser(username);
            const repos = await fetchUserRepos(username);
            const topLanguages = getTopLanguages(repos);
            displayUserInfo(userData, topLanguages, repos);
        } catch (error) {
            displayError(error.message);
        }
    }
});
