// UI Module

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
    grid.innerHTML = '<div class="no-results"><p>No recipes found. Try a different ingredient.</p></div>';
    return;
  }

  grid.innerHTML = recipes.map(recipe => `
        <div class="recipe-card" data-id="${recipe.idMeal}">
            <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" loading="lazy">
            <div class="recipe-card-content">
                <h3>${recipe.strMeal}</h3>
            </div>
        </div>
    `).join('');
}

export function disableSearchButton(btn) {
  btn.disabled = true;
  btn.textContent = 'Searching...';
}

export function enableSearchButton(btn) {
  btn.disabled = false;
  btn.textContent = 'Search';
}
