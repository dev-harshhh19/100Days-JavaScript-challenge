/**
 * InfiniteScroll Class
 * Handles automatic loading of content on scroll
 */
class InfiniteScroll {
  constructor(apiUrl, itemsPerPage = 10) {
    this.apiUrl = apiUrl;
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 0;
    this.loading = false;
    this.hasMore = true;
    this.allData = [];
    this.scrollThreshold = 200; // pixels from bottom to trigger load
  }

  /**
   * Load more data (next batch)
   */
  async loadMore() {
    if (this.loading || !this.hasMore) {
      return null;
    }

    this.loading = true;
    this.currentPage++;

    try {
      console.log(`📜 Loading batch ${this.currentPage}...`);

      const response = await fetch(
        `${this.apiUrl}?_page=${this.currentPage}&_limit=${this.itemsPerPage}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.length === 0) {
        this.hasMore = false;
        console.log('✅ No more data to load');
        return null;
      }

      this.allData.push(...data);
      console.log(`✅ Loaded ${data.length} items (Total: ${this.allData.length})`);

      return data;
    } catch (error) {
      console.error('❌ Error loading more data:', error);
      throw error;
    } finally {
      this.loading = false;
    }
  }

  /**
   * Check if user is near bottom of page
   */
  isNearBottom() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const distanceToBottom = scrollHeight - (scrollTop + clientHeight);
    return distanceToBottom < this.scrollThreshold;
  }

  /**
   * Reset to initial state
   */
  reset() {
    this.currentPage = 0;
    this.loading = false;
    this.hasMore = true;
    this.allData = [];
    console.log('🔄 Infinite scroll reset');
  }

  /**
   * Get all loaded data
   */
  getAllData() {
    return this.allData;
  }

  /**
   * Get current state
   */
  getState() {
    return {
      currentPage: this.currentPage,
      loading: this.loading,
      hasMore: this.hasMore,
      totalItems: this.allData.length
    };
  }
}

/**
 * Debounce utility function
 */
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}
