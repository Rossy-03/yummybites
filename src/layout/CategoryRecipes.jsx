import { useDispatch, useSelector } from "react-redux";
import { getCategoryRecipes } from "../lib/api";
import { useParams } from "react-router-dom";
import { setCategory, setRecipes } from "../state/recipesSlice";
import { useEffect } from "react";
import RecipesSection from "./RecipesSection";

const CategoryRecipes = () => {
  const recipes = useSelector((state) => state.recipes.recipes);
  const dispatch = useDispatch();
  const { category } = useParams();

  async function loadCategoryRecipes() {
    const recipes = await getCategoryRecipes(category);
    dispatch(setRecipes({ recipes: recipes }));
    dispatch(setCategory({ category: category }));
  }
  useEffect(() => {
    loadCategoryRecipes();
  }, []);
  return <RecipesSection title={`Collection: ${category}`} recipes={recipes} />;
};

export default CategoryRecipes;
