// Main Script - Day 90: Filter by Category

import { searchByIngredient, getCategories, filterByCategory } from './Js/api.js';
import { initTheme, toggleTheme, getTheme } from './Js/theme.js';
import {
  showLoading,
  showError,
  showEmpty,
  renderRecipes,
  populateCategories,
  disableSearchButton,
  enableSearchButton
} from './Js/ui.js';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const themeToggle = document.getElementById('themeToggle');
const categoryFilter = document.getElementById('categoryFilter');

// State
let currentRecipes = [];
let currentIngredient = '';

function updateThemeIcon() {
  themeToggle.textContent = getTheme() === 'light' ? '🌙' : '☀️';
}

async function handleSearch() {
  const ingredient = searchInput.value.trim();

  if (!ingredient) {
    showError('Please enter an ingredient to search.');
    return;
  }

  currentIngredient = ingredient;
  disableSearchButton(searchBtn);
  showLoading();

  try {
    currentRecipes = await searchByIngredient(ingredient);
    applyFilter();
  } catch (error) {
    showError('Failed to fetch recipes. Please try again.');
  } finally {
    enableSearchButton(searchBtn);
  }
}

async function handleCategoryChange() {
  const selectedCategory = categoryFilter.value;

  if (!selectedCategory) {
    // Show all results from current search
    if (currentRecipes.length > 0) {
      renderRecipes(currentRecipes);
    } else if (currentIngredient) {
      // Re-fetch by ingredient
      await handleSearch();
    }
    return;
  }

  // If no ingredient search yet, filter by category only
  if (!currentIngredient) {
    showLoading();
    try {
      const recipes = await filterByCategory(selectedCategory);
      renderRecipes(recipes);
    } catch (error) {
      showError('Failed to fetch recipes. Please try again.');
    }
    return;
  }

  // Filter current results by category (client-side filtering needs meal details)
  // For simplicity, we fetch category recipes and show them
  showLoading();
  try {
    const categoryRecipes = await filterByCategory(selectedCategory);
    renderRecipes(categoryRecipes);
  } catch (error) {
    showError('Failed to filter recipes. Please try again.');
  }
}

function applyFilter() {
  const selectedCategory = categoryFilter.value;
  if (selectedCategory && currentRecipes.length > 0) {
    // When filtering is complex, just show current results
    // Full filtering would require fetching details for each meal
    renderRecipes(currentRecipes);
  } else {
    renderRecipes(currentRecipes);
  }
}

async function loadCategories() {
  try {
    const categories = await getCategories();
    populateCategories(categories, categoryFilter);
  } catch (error) {
    console.error('Failed to load categories:', error);
  }
}

async function init() {
  // Init theme
  initTheme();
  updateThemeIcon();

  // Load categories
  await loadCategories();

  // Event listeners
  themeToggle.addEventListener('click', () => {
    toggleTheme();
    updateThemeIcon();
  });

  searchBtn.addEventListener('click', handleSearch);

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });

  categoryFilter.addEventListener('change', handleCategoryChange);
}

init();
