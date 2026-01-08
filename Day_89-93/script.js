// Main Script - Day 89: Search by Ingredient

import { searchByIngredient } from './Js/api.js';
import { initTheme, toggleTheme, getTheme } from './Js/theme.js';
import {
  showLoading,
  showError,
  showEmpty,
  renderRecipes,
  disableSearchButton,
  enableSearchButton
} from './Js/ui.js';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const themeToggle = document.getElementById('themeToggle');

function updateThemeIcon() {
  themeToggle.textContent = getTheme() === 'light' ? '🌙' : '☀️';
}

async function handleSearch() {
  const ingredient = searchInput.value.trim();

  if (!ingredient) {
    showError('Please enter an ingredient to search.');
    return;
  }

  disableSearchButton(searchBtn);
  showLoading();

  try {
    const recipes = await searchByIngredient(ingredient);
    renderRecipes(recipes);
  } catch (error) {
    showError('Failed to fetch recipes. Please try again.');
  } finally {
    enableSearchButton(searchBtn);
  }
}

function init() {
  // Init theme
  initTheme();
  updateThemeIcon();

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
}

init();
