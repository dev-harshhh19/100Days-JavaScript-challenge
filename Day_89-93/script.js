import { searchByName, getRandomMeals, getMealDetails } from './Js/api.js';
import { initTheme, toggleTheme, getTheme } from './Js/theme.js';
import { getFavorites, toggleFavorite, isFavorite } from './Js/favorites.js';
import {
  showLoading,
  showError,
  showEmpty,
  renderRecipes,
  renderFavorites,
  updateFavoritesCount,
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
const searchTab = document.getElementById('searchTab');
const favoritesTab = document.getElementById('favoritesTab');
const searchContent = document.getElementById('searchContent');
const favoritesContent = document.getElementById('favoritesContent');
const recipesGrid = document.getElementById('recipesGrid');
const favoritesGrid = document.getElementById('favoritesGrid');
const favoritesEmpty = document.getElementById('favoritesEmpty');
const recipeModal = document.getElementById('recipeModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const browseRandomBtn = document.getElementById('browseRandomBtn');

// State
let currentTab = 'search';

function updateThemeIcon() {
  themeToggle.textContent = getTheme() === 'light' ? '🌙' : '☀️';
}

function switchTab(tab) {
  currentTab = tab;

  searchTab.classList.toggle('active', tab === 'search');
  favoritesTab.classList.toggle('active', tab === 'favorites');
  searchContent.classList.toggle('active', tab === 'search');
  favoritesContent.classList.toggle('active', tab === 'favorites');

  if (tab === 'favorites') {
    refreshFavoritesUI();
  }
}

function refreshFavoritesUI() {
  const favorites = getFavorites();
  updateFavoritesCount(favorites.length);

  if (favorites.length === 0) {
    favoritesGrid.innerHTML = '';
    favoritesEmpty.style.display = 'block';
  } else {
    favoritesEmpty.style.display = 'none';
    renderFavorites(favorites);
  }
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
  updateFavoritesCount(getFavorites().length);

  if (currentTab === 'favorites') {
    refreshFavoritesUI();
  }
}

async function handleRecipeClick(e) {
  const card = e.target.closest('.recipe-card');
  if (!card) return;
  if (e.target.closest('.btn-favorite')) return;

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
  const query = searchInput.value.trim();

  if (!query) {
    await loadRandomRecipes();
    return;
  }

  disableSearchButton(searchBtn);
  showLoading();

  try {
    const recipes = await searchByName(query);
    if (recipes.length === 0) {
      showError('No recipes found. Try a different search.');
    } else {
      renderRecipes(recipes);
    }
  } catch (error) {
    showError('Failed to fetch recipes. Please try again.');
  } finally {
    enableSearchButton(searchBtn);
  }
}

async function loadRandomRecipes() {
  disableSearchButton(searchBtn);
  showLoading();

  try {
    const recipes = await getRandomMeals();
    renderRecipes(recipes);
  } catch (error) {
    showError('Failed to fetch recipes. Please try again.');
  } finally {
    enableSearchButton(searchBtn);
  }
}

async function init() {
  initTheme();
  updateThemeIcon();
  refreshFavoritesUI();

  themeToggle.addEventListener('click', () => {
    toggleTheme();
    updateThemeIcon();
  });

  searchTab.addEventListener('click', () => switchTab('search'));
  favoritesTab.addEventListener('click', () => switchTab('favorites'));

  searchBtn.addEventListener('click', handleSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
  });

  browseRandomBtn.addEventListener('click', loadRandomRecipes);

  recipesGrid.addEventListener('click', handleFavoriteClick);
  recipesGrid.addEventListener('click', handleRecipeClick);
  favoritesGrid.addEventListener('click', handleFavoriteClick);
  favoritesGrid.addEventListener('click', handleRecipeClick);

  closeModalBtn.addEventListener('click', hideModal);
  recipeModal.addEventListener('click', (e) => {
    if (e.target === recipeModal) hideModal();
  });
}

init();
