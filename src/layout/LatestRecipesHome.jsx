import { useSelector, useDispatch } from "react-redux";
import { setRecipes } from "../state/recipesSlice";
import { getLatestRecipes } from "../lib/api";
import { useEffect } from "react";

import styles from "./styles/_latestrecipeshome.module.scss";
import { RecipeCard } from "../components/shared/RecipeCard";
import { shuffle } from "../lib/utils";

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
    <div className="outer-container">
      <div className={styles.latestrecipes}>
        <h2 className="section-title">
          <span>Latest Recipes</span>
        </h2>
        <div className={styles.latestrecipesContent}>
          {recipes.slice(0, 8).map((recipe, i) => (
            <RecipeCard key={i} recipe={recipe} />
            // <CategoryCard key={i} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestRecipesHome;
