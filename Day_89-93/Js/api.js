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

export async function searchByName(query) {
  try {
    const response = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`);
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

export async function getRandomMeals() {
  try {
    // Get multiple random meals
    const promises = Array(8).fill().map(() =>
      fetch(`${BASE_URL}/random.php`).then(r => r.json())
    );
    const results = await Promise.all(promises);
    return results.map(r => r.meals?.[0]).filter(Boolean);
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
