import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/_recipedetails.module.scss";
import { useLocation, useParams } from "react-router-dom";
import { getCategoryRecipes, getRecipeDetails } from "../lib/api";
import { useEffect, useState } from "react";
import { setRecipe, setRecipes } from "../state/recipesSlice";
import {
  PiCirclesFour,
  PiCirclesFourFill,
  PiClockCountdown,
  PiCookingPot,
  PiHeart,
  PiHeartFill,
} from "react-icons/pi";
import { random, shuffle } from "../lib/utils";
import { COOKING_TIME } from "../lib/constants";

const RecipeDetails = () => {
  const { pathname } = useLocation();
  const category = useSelector((state) => state.recipes.category);
  const recipe = useSelector((state) => state.recipes.recipe);
  const dispatch = useDispatch();
  const { recipeId } = useParams();
  const cookingTime = random(COOKING_TIME);
  const difficultyLevel = "Easy";
  const [isLiked, setIsLiked] = useState(false);

  async function loadRecipe() {
    const recipe = await getRecipeDetails(recipeId);
    dispatch(setRecipe({ recipe: recipe[0] }));
    console.log(recipe);
    const recipes = await getCategoryRecipes(recipe[0].strCategory);
    shuffle(recipes);
    dispatch(setRecipes({ recipes: recipes }));
  }

  useEffect(() => {
    loadRecipe();
  }, [pathname]);

  const renderIngredients = (recipe) => {
    let li = [];
    let i = 1;
    let ingrName = "strIngredient1";
    let ingrMeasure = "strMeasure1";

    while (recipe[ingrName]) {
      li.push(
        <li key={i}>
          <span className={styles.measure}>{recipe[ingrMeasure]}</span>{" "}
          <span className={styles.name}>{recipe[ingrName]}</span>
        </li>
      );
      i++;
      ingrName = `strIngredient${i}`;
      ingrMeasure = `strMeasure${i}`;
    }
    return li;
  };

  return (
    <div className="outer-container">
      <div className={styles.recipeDetails}>
        <div className={styles.imageWrp}>
          <img src={recipe.strMealThumb} alt="" />
          <div className={styles.recInfoWrp}>
            <div className={styles.recDetailsWrp}>
              <span className={styles.recTimeIcon}>
                <PiClockCountdown />
              </span>
              {cookingTime} mins
            </div>
            <div className={styles.recDetailsWrp}>
              <span className={styles.recTimeIcon}>
                <PiCookingPot />
              </span>
              {difficultyLevel}
            </div>
            {recipe.strCategory ? (
              <div
                className={`${styles.recDetailsWrp} ${styles.recCategorysWrp}`}
              >
                <span className={styles.recTimeIcon}>
                  <PiCirclesFour />
                </span>
                {recipe.strCategory}
              </div>
            ) : (
              <div
                className={`${styles.recDetailsWrp} ${styles.recCategorysWrp}`}
              >
                <span className={styles.recTimeIcon}>
                  <PiCirclesFourFill />
                </span>
                {category}
              </div>
            )}
            <div className={styles.recDetailsWrp}>
              <span className={styles.recTimeIcon}>
                <div
                  className={styles.likeWrp}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  {isLiked ? <PiHeartFill /> : <PiHeart />}
                </div>
              </span>
              Save
            </div>
          </div>
        </div>
        <div className={recipe.dataWrp}>
          <h2>{recipe.strMeal}</h2>
          <div className={styles.ingredients}>
            <ul>{renderIngredients(recipe)}</ul>
          </div>
          <div className={styles.instructions}>
            <h3>Instructions:</h3>
            <p>{recipe.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
