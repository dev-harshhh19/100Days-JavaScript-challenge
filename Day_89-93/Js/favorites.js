// Favorites Module - localStorage persistence

const FAVORITES_KEY = 'recipeFavorites';

export function getFavorites() {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveFavorites(favorites) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function addFavorite(recipe) {
  const favorites = getFavorites();
  const exists = favorites.find(fav => fav.idMeal === recipe.idMeal);
  if (!exists) {
    favorites.push(recipe);
    saveFavorites(favorites);
  }
  return favorites;
}

export function removeFavorite(mealId) {
  let favorites = getFavorites();
  favorites = favorites.filter(fav => fav.idMeal !== mealId);
  saveFavorites(favorites);
  return favorites;
}

export function isFavorite(mealId) {
  const favorites = getFavorites();
  return favorites.some(fav => fav.idMeal === mealId);
}

export function toggleFavorite(recipe) {
  if (isFavorite(recipe.idMeal)) {
    return { favorites: removeFavorite(recipe.idMeal), added: false };
  } else {
    return { favorites: addFavorite(recipe), added: true };
  }
}
