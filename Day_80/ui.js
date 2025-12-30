function displayUserInfo(user, languages = [], repos = []) {
    const resultsDiv = document.getElementById('results');
    
    const languagesHTML = languages.length > 0 ? `
        <div class="languages-section">
            <h4>Top Languages</h4>
            <ul class="languages-list">
                ${languages.map(lang => `
                    <li class="language-item">
                        <div>
                            <span class="language-name">${lang.name}</span>
                            <span class="language-percentage">${lang.percentage}%</span>
                        </div>
                        <div class="language-bar">
                            <div class="language-bar-fill" style="width: ${lang.percentage}%"></div>
                        </div>
                    </li>
                `).join('')}
            </ul>
        </div>
    ` : '';
    
    const reposHTML = repos.length > 0 ? `
        <div class="repos-section">
            <h4>Recent Repositories</h4>
            <ul class="repos-list">
                ${repos.map(repo => `
                    <li class="repo-item">
                        <a href="${repo.html_url}" target="_blank" class="repo-link">
                            <strong>${repo.name}</strong>
                        </a>
                        <p class="repo-description">${repo.description || 'No description available'}</p>
                        <div class="repo-meta">
                            ${repo.language ? `<span class="repo-language">${repo.language}</span>` : ''}
                            <span class="repo-stars">★ ${repo.stargazers_count}</span>
                            <span class="repo-forks">⑂ ${repo.forks_count}</span>
                        </div>
                    </li>
                `).join('')}
            </ul>
        </div>
    ` : '';
    
    resultsDiv.innerHTML = `
        <div class="user-card">
            <img src="${user.avatar_url}" alt="${user.login}'s avatar" class="avatar">
            <h3>${user.name || user.login}</h3>
            <p class="user-bio">${user.bio || 'No bio available'}</p>
            <ul class="user-stats">
                <li><strong>${user.followers}</strong> Followers</li>
                <li><strong>${user.following}</strong> Following</li>
                <li><strong>${user.public_repos}</strong> Repos</li>
            </ul>
            ${languagesHTML}
            ${reposHTML}
            <a href="${user.html_url}" target="_blank" class="profile-link">View Profile on GitHub</a>
        </div>
    `;
}

function displayError(massage) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p class="error">${massage}</p>`;
}

export { displayUserInfo, displayError };