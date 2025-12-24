/**
 * Task 1: Basic Pagination Application
 * Demonstrates paginated data fetching with navigation controls
 */

// Configuration
const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const ITEMS_PER_PAGE = 10;

// Initialize pagination manager
const pagination = new Pagination(API_URL, ITEMS_PER_PAGE);

// DOM Elements
const postsContainer = document.getElementById('postsContainer');
const loadingElement = document.getElementById('loading');
const currentPageSpan = document.getElementById('currentPage');
const totalPagesSpan = document.getElementById('totalPages');
const totalPostsSpan = document.getElementById('totalPosts');
const pageNumbersContainer = document.getElementById('pageNumbers');

// Control Buttons
const firstBtn = document.getElementById('firstBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const lastBtn = document.getElementById('lastBtn');

/**
 * Show loading state
 */
function showLoading() {
  loadingElement.classList.add('active');
  postsContainer.style.display = 'none';
}

/**
 * Hide loading state
 */
function hideLoading() {
  loadingElement.classList.remove('active');
  postsContainer.style.display = 'grid';
}

/**
 * Create a post card element
 */
function createPostCard(post) {
  const card = document.createElement('div');
  card.className = 'post-card';
  
  card.innerHTML = `
    <span class="post-id">Post #${post.id}</span>
    <h3 class="post-title">${post.title}</h3>
    <p class="post-body">${post.body}</p>
  `;
  
  return card;
}

/**
 * Render posts to the UI
 */
function renderPosts(posts) {
  postsContainer.innerHTML = '';
  
  posts.forEach(post => {
    const card = createPostCard(post);
    postsContainer.appendChild(card);
  });
  
  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Update statistics display
 */
function updateStats() {
  const info = pagination.getPageInfo();
  
  currentPageSpan.textContent = info.currentPage;
  totalPagesSpan.textContent = info.totalPages;
  totalPostsSpan.textContent = info.totalItems;
}

/**
 * Update pagination controls state
 */
function updateControls() {
  const info = pagination.getPageInfo();
  
  // Update button states
  firstBtn.disabled = info.currentPage === 1;
  prevBtn.disabled = info.currentPage === 1;
  nextBtn.disabled = info.currentPage >= info.totalPages;
  lastBtn.disabled = info.currentPage >= info.totalPages;
  
  // Update page numbers
  renderPageNumbers();
}

/**
 * Render page number buttons
 */
function renderPageNumbers() {
  pageNumbersContainer.innerHTML = '';
  
  const info = pagination.getPageInfo();
  const currentPage = info.currentPage;
  const totalPages = info.totalPages;
  
  // Calculate range of page numbers to show
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);
  
  // Adjust if near boundaries
  if (currentPage <= 3) {
    endPage = Math.min(5, totalPages);
  }
  if (currentPage >= totalPages - 2) {
    startPage = Math.max(1, totalPages - 4);
  }
  
  // Add page number buttons
  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.className = 'btn page-btn';
    pageBtn.textContent = i;
    
    if (i === currentPage) {
      pageBtn.classList.add('active');
    }
    
    pageBtn.addEventListener('click', () => loadPage(i));
    pageNumbersContainer.appendChild(pageBtn);
  }
}

/**
 * Load and display a specific page
 */
async function loadPage(page) {
  try {
    showLoading();
    
    const posts = await pagination.goToPage(page);
    
    if (posts && posts.length > 0) {
      renderPosts(posts);
      updateStats();
      updateControls();
    }
  } catch (error) {
    console.error('Error loading page:', error);
    alert('Failed to load posts. Please try again.');
  } finally {
    hideLoading();
  }
}

/**
 * Navigate to first page
 */
async function goToFirst() {
  await loadPage(1);
}

/**
 * Navigate to previous page
 */
async function goToPrev() {
  if (pagination.currentPage > 1) {
    await loadPage(pagination.currentPage - 1);
  }
}

/**
 * Navigate to next page
 */
async function goToNext() {
  if (pagination.currentPage < pagination.totalPages) {
    await loadPage(pagination.currentPage + 1);
  }
}

/**
 * Navigate to last page
 */
async function goToLast() {
  await loadPage(pagination.totalPages);
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
  // Button clicks
  firstBtn.addEventListener('click', goToFirst);
  prevBtn.addEventListener('click', goToPrev);
  nextBtn.addEventListener('click', goToNext);
  lastBtn.addEventListener('click', goToLast);
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    switch(e.key) {
      case 'ArrowLeft':
        if (!prevBtn.disabled) goToPrev();
        break;
      case 'ArrowRight':
        if (!nextBtn.disabled) goToNext();
        break;
      case 'Home':
        if (!firstBtn.disabled) goToFirst();
        break;
      case 'End':
        if (!lastBtn.disabled) goToLast();
        break;
    }
  });
}

/**
 * Initialize the application
 */
async function init() {
  console.log('🚀 Initializing Task 1: Basic Pagination...');
  
  setupEventListeners();
  
  // Load first page
  await loadPage(1);
  
  console.log('✅ Application ready!');
  console.log('💡 Use arrow keys (← →) to navigate pages');
}

// Start the application
init();
