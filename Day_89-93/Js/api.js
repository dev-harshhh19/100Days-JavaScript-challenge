// API Module - TheMealDB

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export async function searchByIngredient(ingredient) {
  try {
    const response = await fetch(`${BASE_URL}/filter.php?i=${encodeURIComponent(ingredient)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export async function getCategories() {
  try {
    const response = await fetch(`${BASE_URL}/categories.php`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export async function filterByCategory(category) {
  try {
    const response = await fetch(`${BASE_URL}/filter.php?c=${encodeURIComponent(category)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export async function getMealDetails(mealId) {
  try {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${mealId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
