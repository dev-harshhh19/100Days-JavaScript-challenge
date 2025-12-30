async function fetchGitHubUser(username) {
    const url = `https://api.github.com/users/${username}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('User not found');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Error fetching user data');
    }
}

async function fetchUserRepos(username) {
    const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Unable to fetch repositories');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Error fetching repositories');
    }
}

function getTopLanguages(repos) {
    const languageCount = {};
    let totalCount = 0;

    repos.forEach(repo => {
        if (repo.language) {
            languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
            totalCount++;
        }
    });

    const languagesArray = Object.entries(languageCount)
        .map(([language, count]) => ({
            name: language,
            count: count,
            percentage: ((count / totalCount) * 100).toFixed(1)
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

    return languagesArray;
}

export { fetchGitHubUser, fetchUserRepos, getTopLanguages };