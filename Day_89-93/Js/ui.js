// UI Module

import { isFavorite } from './favorites.js';

export function showLoading() {
  document.getElementById('loadingState').style.display = 'block';
  document.getElementById('errorState').style.display = 'none';
  document.getElementById('emptyState').style.display = 'none';
  document.getElementById('recipesGrid').innerHTML = '';
}

export function hideLoading() {
  document.getElementById('loadingState').style.display = 'none';
}

export function showError(message) {
  hideLoading();
  document.getElementById('errorMessage').textContent = message;
  document.getElementById('errorState').style.display = 'block';
  document.getElementById('emptyState').style.display = 'none';
  document.getElementById('recipesGrid').innerHTML = '';
}

export function showEmpty() {
  hideLoading();
  document.getElementById('errorState').style.display = 'none';
  document.getElementById('emptyState').style.display = 'block';
  document.getElementById('recipesGrid').innerHTML = '';
}

export function renderRecipes(recipes) {
  hideLoading();
  document.getElementById('errorState').style.display = 'none';
  document.getElementById('emptyState').style.display = 'none';

  const grid = document.getElementById('recipesGrid');

  if (recipes.length === 0) {
    grid.innerHTML = '<div class="no-results"><p>No recipes found. Try a different search.</p></div>';
    return;
  }

  grid.innerHTML = recipes.map(recipe => {
    const isFav = isFavorite(recipe.idMeal);
    return `
        <div class="recipe-card" data-id="${recipe.idMeal}">
            <button class="btn-favorite ${isFav ? 'active' : ''}" data-id="${recipe.idMeal}" data-name="${recipe.strMeal}" data-thumb="${recipe.strMealThumb}">
                ${isFav ? '❤️' : '🤍'}
            </button>
            <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" loading="lazy">
            <div class="recipe-card-content">
                <h3>${recipe.strMeal}</h3>
            </div>
        </div>
    `;
  }).join('');
}

export function renderFavorites(favorites) {
  const grid = document.getElementById('favoritesGrid');

  if (favorites.length === 0) {
    grid.innerHTML = '<div class="favorites-empty"><p>No favorites yet. Click the heart on a recipe to save it!</p></div>';
    return;
  }

  grid.innerHTML = favorites.map(recipe => `
        <div class="recipe-card" data-id="${recipe.idMeal}">
            <button class="btn-favorite active" data-id="${recipe.idMeal}" data-name="${recipe.strMeal}" data-thumb="${recipe.strMealThumb}">❤️</button>
            <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" loading="lazy">
            <div class="recipe-card-content">
                <h3>${recipe.strMeal}</h3>
            </div>
        </div>
    `).join('');
}

export function updateFavoritesCount(count) {
  document.getElementById('favoritesCount').textContent = count;
}

export function showFavoritesSection() {
  document.getElementById('favoritesSection').style.display = 'block';
}

export function hideFavoritesSection() {
  document.getElementById('favoritesSection').style.display = 'none';
}

export function populateCategories(categories, selectElement) {
  selectElement.innerHTML = '<option value="">All Categories</option>';
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat.strCategory;
    option.textContent = cat.strCategory;
    selectElement.appendChild(option);
  });
}

export function disableSearchButton(btn) {
  btn.disabled = true;
  btn.textContent = 'Searching...';
}

export function enableSearchButton(btn) {
  btn.disabled = false;
  btn.textContent = 'Search';
}

export function showModal() {
  document.getElementById('recipeModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

export function hideModal() {
  document.getElementById('recipeModal').style.display = 'none';
  document.body.style.overflow = '';
}

export function showModalLoading() {
  document.getElementById('modalBody').innerHTML = '<div class="modal-loading"><div class="spinner"></div><p>Loading recipe...</p></div>';
}

export function renderRecipeDetail(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`.trim());
    }
  }

  document.getElementById('modalBody').innerHTML = `
        <img class="recipe-detail-img" src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <div class="recipe-detail-content">
            <h2>${meal.strMeal}</h2>
            <div class="recipe-meta">
                <span>${meal.strCategory || 'Uncategorized'}</span>
                <span>${meal.strArea || 'Unknown'}</span>
            </div>
            <h3>Ingredients</h3>
            <ul class="recipe-ingredients">
                ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
            <h3>Instructions</h3>
            <p class="recipe-instructions">${meal.strInstructions || 'No instructions available.'}</p>
        </div>
    `;
}
