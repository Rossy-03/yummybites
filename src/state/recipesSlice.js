import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: ["Beef"],
  areas: [],
  recipes: [],
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
  },
});

// Action creators are generated for each case reducer function
export const { setCategories, setAreas, setRecipes } = recipesSlice.actions;

export default recipesSlice.reducer;
