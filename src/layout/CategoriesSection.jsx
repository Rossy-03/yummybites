import { useSelector, useDispatch } from "react-redux";
import { setCategories } from "../state/recipesSlice";
import styles from "./styles/_categorieshome.module.scss";
import { useEffect } from "react";
import { getCategories } from "../lib/api";
import CategoryCard from "../components/shared/CategoryCard";

const CategoriesSection = ({ title, showCategories }) => {
  const categories = useSelector((state) => state.recipes.categories);
  const dispatch = useDispatch();
  // let categoriesToShow;

  async function loadCategories() {
    const categories = await getCategories();
    console.log(categories);
    // categoriesToShow = showCategories || categories.length;
    // console.log(showCategories);
    // console.log(categoriesToShow);
    dispatch(setCategories({ categories: categories }));
  }
  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div className="outer-container">
      {/* <div className={styles.categories}>{categories}</div> */}
      <div className={styles.categories}>
        <h2 className="section-title">
          <span className={showCategories && styles.categoriesTitle}>
            {title}
          </span>
        </h2>
        <div className={styles.categoriesContent}>
          {showCategories
            ? categories
                .slice(0, showCategories)
                .map((category, i) => (
                  <CategoryCard key={i} category={category} />
                ))
            : categories.map((category, i) => (
                <CategoryCard key={i} category={category} />
              ))}
          {}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
