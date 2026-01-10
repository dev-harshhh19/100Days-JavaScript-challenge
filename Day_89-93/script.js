// Main Script - Recipe Finder with Modal

import { searchByIngredient, getCategories, filterByCategory, getMealDetails } from './Js/api.js';
import { initTheme, toggleTheme, getTheme } from './Js/theme.js';
import { getFavorites, toggleFavorite } from './Js/favorites.js';
import {
  showLoading,
  showError,
  showEmpty,
  renderRecipes,
  renderFavorites,
  updateFavoritesCount,
  showFavoritesSection,
  hideFavoritesSection,
  populateCategories,
  disableSearchButton,
  enableSearchButton,
  showModal,
  hideModal,
  showModalLoading,
  renderRecipeDetail
} from './Js/ui.js';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const themeToggle = document.getElementById('themeToggle');
const categoryFilter = document.getElementById('categoryFilter');
const showFavoritesBtn = document.getElementById('showFavoritesBtn');
const closeFavoritesBtn = document.getElementById('closeFavoritesBtn');
const recipesGrid = document.getElementById('recipesGrid');
const favoritesGrid = document.getElementById('favoritesGrid');
const recipeModal = document.getElementById('recipeModal');
const closeModalBtn = document.getElementById('closeModalBtn');

// State
let currentRecipes = [];
let currentIngredient = '';

function updateThemeIcon() {
  themeToggle.textContent = getTheme() === 'light' ? '🌙' : '☀️';
}

function refreshFavoritesUI() {
  const favorites = getFavorites();
  updateFavoritesCount(favorites.length);
  renderFavorites(favorites);
}

function handleFavoriteClick(e) {
  const btn = e.target.closest('.btn-favorite');
  if (!btn) return;
  e.stopPropagation();

  const recipe = {
    idMeal: btn.dataset.id,
    strMeal: btn.dataset.name,
    strMealThumb: btn.dataset.thumb
  };

  const { added } = toggleFavorite(recipe);
  btn.classList.toggle('active', added);
  btn.textContent = added ? '❤️' : '🤍';
  refreshFavoritesUI();
}

async function handleRecipeClick(e) {
  const card = e.target.closest('.recipe-card');
  if (!card) return;
  if (e.target.closest('.btn-favorite')) return; // Ignore favorite button clicks

  const mealId = card.dataset.id;
  showModal();
  showModalLoading();

  try {
    const meal = await getMealDetails(mealId);
    if (meal) {
      renderRecipeDetail(meal);
    } else {
      document.getElementById('modalBody').innerHTML = '<div class="modal-loading"><p>Recipe not found.</p></div>';
    }
  } catch (error) {
    document.getElementById('modalBody').innerHTML = '<div class="modal-loading"><p>Failed to load recipe.</p></div>';
  }
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
  hideFavoritesSection();

  try {
    currentRecipes = await searchByIngredient(ingredient);
    renderRecipes(currentRecipes);
  } catch (error) {
    showError('Failed to fetch recipes. Please try again.');
  } finally {
    enableSearchButton(searchBtn);
  }
}

async function handleCategoryChange() {
  const selectedCategory = categoryFilter.value;
  hideFavoritesSection();

  if (!selectedCategory) {
    if (currentRecipes.length > 0) {
      renderRecipes(currentRecipes);
    } else if (currentIngredient) {
      await handleSearch();
    }
    return;
  }

  showLoading();
  try {
    const categoryRecipes = await filterByCategory(selectedCategory);
    renderRecipes(categoryRecipes);
  } catch (error) {
    showError('Failed to filter recipes. Please try again.');
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
  initTheme();
  updateThemeIcon();
  await loadCategories();
  refreshFavoritesUI();

  // Theme toggle
  themeToggle.addEventListener('click', () => {
    toggleTheme();
    updateThemeIcon();
  });

  // Search
  searchBtn.addEventListener('click', handleSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
  });

  // Category filter
  categoryFilter.addEventListener('change', handleCategoryChange);

  // Favorites
  showFavoritesBtn.addEventListener('click', () => {
    refreshFavoritesUI();
    showFavoritesSection();
  });
  closeFavoritesBtn.addEventListener('click', hideFavoritesSection);

  // Recipe card clicks (event delegation)
  recipesGrid.addEventListener('click', handleFavoriteClick);
  recipesGrid.addEventListener('click', handleRecipeClick);
  favoritesGrid.addEventListener('click', handleFavoriteClick);
  favoritesGrid.addEventListener('click', handleRecipeClick);

  // Modal close
  closeModalBtn.addEventListener('click', hideModal);
  recipeModal.addEventListener('click', (e) => {
    if (e.target === recipeModal) hideModal();
  });
}

init();
