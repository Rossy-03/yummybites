import { useState } from "react";
import { COOKING_TIME } from "../../lib/constants";
import { random } from "../../lib/utils";
import style from "./styles/_recipecard.module.scss";
// import { PiClockCountdownLight } from "react-icons/pi";
import { PiClockCountdownFill } from "react-icons/pi";
// import { PiCookingPotLight } from "react-icons/pi";
import { PiCookingPotFill } from "react-icons/pi";
// import { PiCirclesFourLight } from "react-icons/pi";
import { PiCirclesFourFill } from "react-icons/pi";
import { PiHeartBold } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const RecipeCard = ({ recipe }) => {
  const [isLiked, setIsLiked] = useState(false);
  const cookingTime = random(COOKING_TIME);
  const difficultyLevel = "Easy";
  const category = useSelector((state) => state.recipes.category);

  // return <div>{recipe.strMeal}</div>;
  return (
    <div className={style.recipeWrp}>
      <Link to={`/recipes/${recipe.idMeal}`}>
        <div className={style.likeWrp} onClick={() => setIsLiked(!isLiked)}>
          {isLiked ? <PiHeartFill /> : <PiHeartBold />}
        </div>
        <div className={style.recipeImgOuterWrp}>
          <div className={style.recipeImgWrp}>
            <img src={recipe.strMealThumb} alt="" />
          </div>
          <div className={style.overlayWrp}>
            <p>
              <FiSearch />
            </p>
          </div>
        </div>
      </Link>
      <div className={style.recInfoWrp}>
        <div className={style.recDetailsWrp}>
          <span className={style.recTimeIcon}>
            {/* <PiClockCountdownLight /> */}
            <PiClockCountdownFill />
          </span>
          {cookingTime} mins
        </div>
        <div className={style.recDetailsWrp}>
          <span className={style.recTimeIcon}>
            {/* <PiCookingPotLight /> */}
            <PiCookingPotFill />
          </span>
          {difficultyLevel}
        </div>
        {recipe.strCategory ? (
          <div className={`${style.recDetailsWrp} ${style.recCategorysWrp}`}>
            <span className={style.recTimeIcon}>
              {/* <PiCirclesFourLight /> */}
              <PiCirclesFourFill />
            </span>
            {recipe.strCategory}
          </div>
        ) : (
          <div className={`${style.recDetailsWrp} ${style.recCategorysWrp}`}>
            <span className={style.recTimeIcon}>
              {/* <PiCirclesFourLight /> */}
              <PiCirclesFourFill />
            </span>
            {category}
          </div>
        )}
      </div>
      <div className={style.recTitleWrp}>
        <h3>{recipe.strMeal}</h3>
      </div>
    </div>
  );
};
