import { RecipeCard } from "../components/shared/RecipeCard";
import styles from "./styles/_recipessection.module.scss";

const RecipesSection = ({ title, recipes }) => {
  return (
    <div className="outer-container">
      <div className={styles.latestrecipes}>
        <h2 className="section-title">
          <span>{title}</span>
        </h2>
        <div className={styles.latestrecipesContent}>
          {recipes &&
            recipes.map((recipe, i) => (
              <RecipeCard key={i} recipe={recipe} />
              // <CategoryCard key={i} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesSection;
