/**
 * Pagination Class
 * Handles fetching and managing paginated data
 */
class Pagination {
  constructor(apiUrl, itemsPerPage = 10) {
    this.apiUrl = apiUrl;
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
    this.totalPages = 0;
    this.totalItems = 0;
    this.cache = new Map();
  }

  /**
   * Fetch a specific page of data
   */
  async fetchPage(page) {
    // Check cache first
    if (this.cache.has(page)) {
      console.log(`📦 Loading page ${page} from cache`);
      return this.cache.get(page);
    }

    try {
      console.log(`🌐 Fetching page ${page} from API...`);
      
      const response = await fetch(
        `${this.apiUrl}?_page=${page}&_limit=${this.itemsPerPage}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Get total count from headers
      const total = response.headers.get('X-Total-Count');
      if (total) {
        this.totalItems = parseInt(total);
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      }

      const data = await response.json();

      // Cache the result
      this.cache.set(page, data);

      return data;
    } catch (error) {
      console.error('❌ Error fetching page:', error);
      throw error;
    }
  }

  /**
   * Go to a specific page
   */
  async goToPage(page) {
    if (page < 1 || (this.totalPages && page > this.totalPages)) {
      console.log('⚠️ Invalid page number');
      return null;
    }

    this.currentPage = page;
    return await this.fetchPage(page);
  }

  /**
   * Go to next page
   */
  async nextPage() {
    if (this.totalPages && this.currentPage >= this.totalPages) {
      console.log('⚠️ Already on last page');
      return null;
    }

    this.currentPage++;
    return await this.fetchPage(this.currentPage);
  }

  /**
   * Go to previous page
   */
  async prevPage() {
    if (this.currentPage <= 1) {
      console.log('⚠️ Already on first page');
      return null;
    }

    this.currentPage--;
    return await this.fetchPage(this.currentPage);
  }

  /**
   * Get current pagination info
   */
  getPageInfo() {
    return {
      currentPage: this.currentPage,
      totalPages: this.totalPages,
      itemsPerPage: this.itemsPerPage,
      totalItems: this.totalItems,
      startItem: (this.currentPage - 1) * this.itemsPerPage + 1,
      endItem: Math.min(this.currentPage * this.itemsPerPage, this.totalItems)
    };
  }

  /**
   * Clear cache
   */
  clearCache() {
    this.cache.clear();
    console.log('🗑️ Cache cleared');
  }
}
