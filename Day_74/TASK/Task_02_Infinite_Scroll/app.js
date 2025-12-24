/**
 * Task 2: Infinite Scroll Application
 * Demonstrates automatic content loading on scroll
 */

// Configuration
const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const ITEMS_PER_PAGE = 10;

// Initialize infinite scroll manager
const infiniteScroll = new InfiniteScroll(API_URL, ITEMS_PER_PAGE);

// DOM Elements
const postsContainer = document.getElementById('postsContainer');
const loadingElement = document.getElementById('loading');
const noMoreElement = document.getElementById('noMore');
const postsLoadedSpan = document.getElementById('postsLoaded');
const totalBatchesSpan = document.getElementById('totalBatches');
const statusSpan = document.getElementById('status');
const scrollToTopBtn = document.getElementById('scrollToTop');

/**
 * Show loading state
 */
function showLoading() {
  loadingElement.classList.add('active');
  statusSpan.textContent = 'Loading...';
  statusSpan.style.color = '#FFA500';
}

/**
 * Hide loading state
 */
function hideLoading() {
  loadingElement.classList.remove('active');
  statusSpan.textContent = infiniteScroll.hasMore ? 'Ready' : 'Complete';
  statusSpan.style.color = infiniteScroll.hasMore ? '#11998e' : '#666';
}

/**
 * Show no more content message
 */
function showNoMore() {
  noMoreElement.classList.add('active');
}

/**
 * Create a post card element
 */
function createPostCard(post) {
  const card = document.createElement('div');
  card.className = 'post-card';
  
  card.innerHTML = `
    <div class="post-header">
      <span class="post-id">Post #${post.id}</span>
      <span class="post-user">User ${post.userId}</span>
    </div>
    <h3 class="post-title">${post.title}</h3>
    <p class="post-body">${post.body}</p>
  `;
  
  return card;
}

/**
 * Append posts to the container
 */
function appendPosts(posts) {
  posts.forEach(post => {
    const card = createPostCard(post);
    postsContainer.appendChild(card);
  });
}

/**
 * Update statistics display
 */
function updateStats() {
  const state = infiniteScroll.getState();
  
  postsLoadedSpan.textContent = state.totalItems;
  totalBatchesSpan.textContent = state.currentPage;
}

/**
 * Handle scroll event and load more content
 */
async function handleScroll() {
  if (infiniteScroll.isNearBottom() && !infiniteScroll.loading && infiniteScroll.hasMore) {
    await loadMorePosts();
  }
  
  // Show/hide scroll to top button
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
}

/**
 * Load more posts
 */
async function loadMorePosts() {
  try {
    showLoading();
    
    const posts = await infiniteScroll.loadMore();
    
    if (posts && posts.length > 0) {
      appendPosts(posts);
      updateStats();
    } else {
      showNoMore();
    }
  } catch (error) {
    console.error('Error loading posts:', error);
    statusSpan.textContent = 'Error';
    statusSpan.style.color = '#FF0000';
    
    // Retry after a delay
    setTimeout(() => {
      if (infiniteScroll.hasMore) {
        statusSpan.textContent = 'Ready';
        statusSpan.style.color = '#11998e';
      }
    }, 3000);
  } finally {
    hideLoading();
  }
}

/**
 * Scroll to top of page
 */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
  // Debounced scroll handler
  const debouncedScroll = debounce(handleScroll, 100);
  window.addEventListener('scroll', debouncedScroll);
  
  // Scroll to top button
  scrollToTopBtn.addEventListener('click', scrollToTop);
}

/**
 * Initialize the application
 */
async function init() {
  console.log('🚀 Initializing Task 2: Infinite Scroll...');
  
  setupEventListeners();
  
  // Load first batch
  await loadMorePosts();
  
  console.log('✅ Application ready!');
  console.log('💡 Scroll down to load more content automatically');
}

// Start the application
init();
