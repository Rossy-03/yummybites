import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: ["Beef"],
  category: "Beef",
  areas: [],
  recipes: [],
  recipe: {},
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload.categories;
    },
    setAreas: (state, action) => {
      state.areas = action.payload.areas;
    },
    setRecipes: (state, action) => {
      state.recipes = action.payload.recipes;
    },
    setRecipe: (state, action) => {
      state.recipe = action.payload.recipe;
    },
    setCategory: (state, action) => {
      state.category = action.payload.category;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategories, setAreas, setRecipes, setCategory, setRecipe } =
  recipesSlice.actions;

export default recipesSlice.reducer;
