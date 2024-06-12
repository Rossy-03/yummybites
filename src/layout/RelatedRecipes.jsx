import { useSelector } from "react-redux";
import RecipesSection from "./RecipesSection";

const RelatedRecipes = () => {
  const recipes = useSelector((state) => state.recipes.recipes);

  return (
    <RecipesSection
      title={"Related Recipes"}
      recipes={recipes && recipes.slice(0, 4)}
    />
  );
};

export default RelatedRecipes;
