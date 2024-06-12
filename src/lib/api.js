import { API_KEYS } from "./apiKeys";
import { MEALS_FIRST_LETTER } from "./constants";
import { random } from "./utils";

export async function getCategories() {
  try {
    const response = await fetch(API_KEYS.ALL_CATEGORIES_URL);
    const data = await response.json();

    // console.log(data);
    return data.meals;
  } catch (error) {
    console.log(error);
  }
}

export async function getAreas() {
  try {
    const response = await fetch(API_KEYS.ALL_AREAS_URL);
    const data = await response.json();

    // console.log(data);
    return data.meals;
  } catch (error) {
    console.log(error);
  }
}

export async function getLatestRecipes() {
  try {
    const response = await fetch(
      API_KEYS.LATEST_RECIPES_URL + random(MEALS_FIRST_LETTER)
    );
    const data = await response.json();

    // console.log(data);
    return data.meals;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategoryRecipes(categoryName) {
  try {
    const response = await fetch(API_KEYS.CATEGORY_RECIPES + categoryName);
    const data = await response.json();

    return data.meals;
  } catch (error) {
    console.log(error);
  }
}

export async function getRecipeDetails(recipeId) {
  try {
    const response = await fetch(API_KEYS.RECIPE_DETAILS + recipeId);
    const data = await response.json();

    return data.meals;
  } catch (error) {
    console.log(error);
  }
}
