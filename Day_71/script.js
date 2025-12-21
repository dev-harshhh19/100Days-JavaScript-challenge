// ========== API CONFIGURATION ==========
const QUOTE_APIS = [
    'https://api.quotable.io/random',
    'https://quotes-api-self.vercel.app/quote'
];
const JOKE_API = 'https://official-joke-api.appspot.com/random_joke';

// ========== DOM ELEMENTS ==========
// Buttons
const quoteBtn = document.getElementById('quote-btn');
const jokeBtn = document.getElementById('joke-btn');
const quoteBookmarkBtn = document.getElementById('quote-bookmark');
const jokeBookmarkBtn = document.getElementById('joke-bookmark');
const quoteShareBtn = document.getElementById('quote-share');
const jokeShareBtn = document.getElementById('joke-share');

// Content Elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const jokeSetup = document.getElementById('joke-setup');
const jokePunchline = document.getElementById('joke-punchline');

// Spinners
const quoteSpinner = document.getElementById('quote-spinner');
const jokeSpinner = document.getElementById('joke-spinner');

// History & Favorites
const quoteHistoryList = document.getElementById('quote-history-list');
const jokeHistoryList = document.getElementById('joke-history-list');
const quoteFavoritesList = document.getElementById('quote-favorites-list');
const jokeFavoritesList = document.getElementById('joke-favorites-list');
const clearQuoteHistoryBtn = document.getElementById('clear-quote-history');
const clearJokeHistoryBtn = document.getElementById('clear-joke-history');

// Modal & Toast
const shareModal = document.getElementById('share-modal');
const toast = document.getElementById('toast');

// ========== STATE MANAGEMENT ==========
let currentQuote = null;
let currentJoke = null;
let quoteHistory = JSON.parse(localStorage.getItem('quoteHistory')) || [];
let jokeHistory = JSON.parse(localStorage.getItem('jokeHistory')) || [];
let quoteFavorites = JSON.parse(localStorage.getItem('quoteFavorites')) || [];
let jokeFavorites = JSON.parse(localStorage.getItem('jokeFavorites')) || [];

// ========== UTILITY FUNCTIONS ==========
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function formatTimestamp() {
    const now = new Date();
    return now.toLocaleString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    });
}

// ========== API FETCH FUNCTIONS ==========
async function fetchQuote() {
    try {
        quoteBtn.disabled = true;
        quoteSpinner.style.display = 'block';
        quoteText.style.display = 'none';
        quoteAuthor.style.display = 'none';

        let data = null;
        let fetchSuccess = false;

        // Try multiple APIs
        for (const api of QUOTE_APIS) {
            try {
                const response = await fetch(api);
                if (response.ok) {
                    data = await response.json();
                    fetchSuccess = true;
                    break;
                }
            } catch (err) {
                console.warn(`Failed to fetch from ${api}:`, err);
            }
        }

        // Fallback if all APIs fail
        if (!fetchSuccess) {
            const fallbackQuotes = [
                { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
                { content: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
                { content: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
                { content: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
                { content: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" }
            ];
            data = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
            showToast('⚠️ Using offline mode');
        }

        // Handle different API response formats
        const quoteContent = data.content || data.quote || data.text || 'No quote available';
        const quoteAuthorName = data.author || data.author_name || 'Unknown';

        currentQuote = {
            text: quoteContent,
            author: quoteAuthorName,
            timestamp: formatTimestamp()
        };

        quoteText.textContent = `"${quoteContent}"`;
        quoteAuthor.textContent = quoteAuthorName;

        // Add to history
        addToHistory('quote', currentQuote);
        
        showToast('✅ Quote loaded successfully!');

    } catch (error) {
        console.error('Error fetching quote:', error);
        quoteText.textContent = 'Failed to load quote. Please try again.';
        quoteAuthor.textContent = '';
        showToast('❌ Error loading quote');
    } finally {
        quoteSpinner.style.display = 'none';
        quoteText.style.display = 'block';
        quoteAuthor.style.display = 'block';
        quoteBtn.disabled = false;
    }
}

async function fetchJoke() {
    try {
        jokeBtn.disabled = true;
        jokeSpinner.style.display = 'block';
        jokeSetup.style.display = 'none';
        jokePunchline.style.display = 'none';

        const response = await fetch(JOKE_API);
        
        if (!response.ok) {
            throw new Error('Failed to fetch joke');
        }

        const data = await response.json();

        currentJoke = {
            setup: data.setup,
            punchline: data.punchline,
            timestamp: formatTimestamp()
        };

        jokeSetup.textContent = data.setup;
        
        // Delay punchline for comedic effect
        setTimeout(() => {
            jokePunchline.textContent = data.punchline;
            jokePunchline.style.display = 'block';
        }, 800);

        // Add to history
        addToHistory('joke', currentJoke);
        
        showToast('😂 Joke loaded successfully!');

    } catch (error) {
        console.error('Error fetching joke:', error);
        jokeSetup.textContent = 'Failed to load joke. Please try again.';
        jokePunchline.textContent = '';
        showToast('❌ Error loading joke');
    } finally {
        jokeSpinner.style.display = 'none';
        jokeSetup.style.display = 'block';
        jokeBtn.disabled = false;
    }
}

// ========== HISTORY MANAGEMENT ==========
function addToHistory(type, item) {
    if (type === 'quote') {
        quoteHistory.unshift(item);
        if (quoteHistory.length > 10) quoteHistory.pop();
        localStorage.setItem('quoteHistory', JSON.stringify(quoteHistory));
        renderQuoteHistory();
    } else if (type === 'joke') {
        jokeHistory.unshift(item);
        if (jokeHistory.length > 10) jokeHistory.pop();
        localStorage.setItem('jokeHistory', JSON.stringify(jokeHistory));
        renderJokeHistory();
    }
}

function renderQuoteHistory() {
    if (quoteHistory.length === 0) {
        quoteHistoryList.innerHTML = '<p class="empty-state">No quotes in history yet</p>';
        return;
    }

    quoteHistoryList.innerHTML = quoteHistory.map((item, index) => `
        <div class="history-item">
            <p>"${item.text}"</p>
            <p class="author">— ${item.author}</p>
            <p class="timestamp">${item.timestamp}</p>
        </div>
    `).join('');
}

function renderJokeHistory() {
    if (jokeHistory.length === 0) {
        jokeHistoryList.innerHTML = '<p class="empty-state">No jokes in history yet</p>';
        return;
    }

    jokeHistoryList.innerHTML = jokeHistory.map((item, index) => `
        <div class="history-item">
            <p><strong>${item.setup}</strong></p>
            <p style="color: #e74c3c; font-style: italic;">${item.punchline}</p>
            <p class="timestamp">${item.timestamp}</p>
        </div>
    `).join('');
}

// ========== FAVORITES MANAGEMENT ==========
function addToFavorites(type) {
    if (type === 'quote' && currentQuote) {
        // Check if already in favorites
        const exists = quoteFavorites.some(fav => fav.text === currentQuote.text);
        if (exists) {
            showToast('⚠️ Quote already in favorites!');
            return;
        }
        quoteFavorites.unshift(currentQuote);
        localStorage.setItem('quoteFavorites', JSON.stringify(quoteFavorites));
        renderQuoteFavorites();
        showToast('⭐ Quote added to favorites!');
    } else if (type === 'joke' && currentJoke) {
        const exists = jokeFavorites.some(fav => fav.setup === currentJoke.setup);
        if (exists) {
            showToast('⚠️ Joke already in favorites!');
            return;
        }
        jokeFavorites.unshift(currentJoke);
        localStorage.setItem('jokeFavorites', JSON.stringify(jokeFavorites));
        renderJokeFavorites();
        showToast('⭐ Joke added to favorites!');
    } else {
        showToast('⚠️ Please fetch a ' + type + ' first!');
    }
}

function removeFromFavorites(type, index) {
    if (type === 'quote') {
        quoteFavorites.splice(index, 1);
        localStorage.setItem('quoteFavorites', JSON.stringify(quoteFavorites));
        renderQuoteFavorites();
        showToast('🗑️ Quote removed from favorites');
    } else if (type === 'joke') {
        jokeFavorites.splice(index, 1);
        localStorage.setItem('jokeFavorites', JSON.stringify(jokeFavorites));
        renderJokeFavorites();
        showToast('🗑️ Joke removed from favorites');
    }
}

function renderQuoteFavorites() {
    if (quoteFavorites.length === 0) {
        quoteFavoritesList.innerHTML = '<p class="empty-state">No favorite quotes yet</p>';
        return;
    }

    quoteFavoritesList.innerHTML = quoteFavorites.map((item, index) => `
        <div class="favorite-item">
            <button class="remove-btn" onclick="removeFromFavorites('quote', ${index})">×</button>
            <p>"${item.text}"</p>
            <p class="author">— ${item.author}</p>
        </div>
    `).join('');
}

function renderJokeFavorites() {
    if (jokeFavorites.length === 0) {
        jokeFavoritesList.innerHTML = '<p class="empty-state">No favorite jokes yet</p>';
        return;
    }

    jokeFavoritesList.innerHTML = jokeFavorites.map((item, index) => `
        <div class="favorite-item">
            <button class="remove-btn" onclick="removeFromFavorites('joke', ${index})">×</button>
            <p><strong>${item.setup}</strong></p>
            <p style="color: #e74c3c; font-style: italic;">${item.punchline}</p>
        </div>
    `).join('');
}

// ========== SHARE FUNCTIONALITY ==========
let currentShareContent = '';

function openShareModal(type) {
    if (type === 'quote' && currentQuote) {
        currentShareContent = `"${currentQuote.text}" - ${currentQuote.author}`;
    } else if (type === 'joke' && currentJoke) {
        currentShareContent = `${currentJoke.setup}\n\n${currentJoke.punchline}`;
    } else {
        showToast('⚠️ Please fetch content first!');
        return;
    }
    
    shareModal.classList.add('show');
}

function shareToSocialMedia(platform) {
    const encodedContent = encodeURIComponent(currentShareContent);
    let url = '';

    switch(platform) {
        case 'twitter':
            url = `https://twitter.com/intent/tweet?text=${encodedContent}`;
            break;
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?quote=${encodedContent}`;
            break;
        case 'whatsapp':
            url = `https://wa.me/?text=${encodedContent}`;
            break;
        case 'copy':
            navigator.clipboard.writeText(currentShareContent).then(() => {
                showToast('📋 Copied to clipboard!');
                shareModal.classList.remove('show');
            });
            return;
    }

    if (url) {
        window.open(url, '_blank');
        shareModal.classList.remove('show');
    }
}

// ========== TAB FUNCTIONALITY ==========
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            const parentSection = btn.closest('.section');
            
            // Remove active from all tabs in this section
            parentSection.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            parentSection.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active to clicked tab
            btn.classList.add('active');
            parentSection.querySelector(`#${targetTab}`).classList.add('active');
        });
    });
}

// ========== EVENT LISTENERS ==========
quoteBtn.addEventListener('click', fetchQuote);
jokeBtn.addEventListener('click', fetchJoke);
quoteBookmarkBtn.addEventListener('click', () => addToFavorites('quote'));
jokeBookmarkBtn.addEventListener('click', () => addToFavorites('joke'));
quoteShareBtn.addEventListener('click', () => openShareModal('quote'));
jokeShareBtn.addEventListener('click', () => openShareModal('joke'));

clearQuoteHistoryBtn.addEventListener('click', () => {
    quoteHistory = [];
    localStorage.setItem('quoteHistory', JSON.stringify(quoteHistory));
    renderQuoteHistory();
    showToast('🗑️ Quote history cleared');
});

clearJokeHistoryBtn.addEventListener('click', () => {
    jokeHistory = [];
    localStorage.setItem('jokeHistory', JSON.stringify(jokeHistory));
    renderJokeHistory();
    showToast('🗑️ Joke history cleared');
});

// Share modal event listeners
document.querySelector('.close').addEventListener('click', () => {
    shareModal.classList.remove('show');
});

shareModal.addEventListener('click', (e) => {
    if (e.target === shareModal) {
        shareModal.classList.remove('show');
    }
});

document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const platform = btn.getAttribute('data-platform');
        shareToSocialMedia(platform);
    });
});

// ========== INITIALIZATION ==========
window.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Random Quote & Joke Generator loaded!');
    
    // Setup tabs
    setupTabs();
    
    // Render initial history and favorites
    renderQuoteHistory();
    renderJokeHistory();
    renderQuoteFavorites();
    renderJokeFavorites();
    
    // Test API connection
    fetch(QUOTE_APIS[0])
        .then(res => {
            if (res.ok) {
                console.log('✅ Quote API is working');
            } else {
                console.warn('⚠️ Quote API returned status:', res.status);
            }
        })
        .catch(err => console.error('❌ Quote API error:', err));
    
    console.log('📊 Loaded from storage:');
    console.log(`  - ${quoteHistory.length} quotes in history`);
    console.log(`  - ${jokeHistory.length} jokes in history`);
    console.log(`  - ${quoteFavorites.length} favorite quotes`);
    console.log(`  - ${jokeFavorites.length} favorite jokes`);
});
