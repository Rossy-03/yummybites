import { useSelector, useDispatch } from "react-redux";
import { setRecipes } from "../state/recipesSlice";
import { getLatestRecipes } from "../lib/api";
import { useEffect } from "react";

// import styles from "./styles/_latestrecipeshome.module.scss";
import { shuffle } from "../lib/utils";
import RecipesSection from "./RecipesSection";

const LatestRecipesHome = () => {
  const recipes = useSelector((state) => state.recipes.recipes);
  const dispatch = useDispatch();

  async function loadLatestRecipes() {
    const recipes = await getLatestRecipes();
    console.log(recipes);
    shuffle(recipes);
    dispatch(setRecipes({ recipes: recipes }));
  }

  useEffect(() => {
    loadLatestRecipes();
  }, []);

  return (
    <RecipesSection title={"Latest Recipes"} recipes={recipes.slice(0, 8)} />
  );
};

export default LatestRecipesHome;
