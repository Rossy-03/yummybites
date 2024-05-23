import { useSelector, useDispatch } from "react-redux";
import { setCategories } from "../state/recipesSlice";
import styles from "./styles/_categorieshome.module.scss";
import { useEffect } from "react";
import { getCategories } from "../lib/api";
import CategoryCard from "../components/shared/CategoryCard";

const CategoriesHome = () => {
  const categories = useSelector((state) => state.recipes.categories);
  const dispatch = useDispatch();

  async function loadCategories() {
    const categories = await getCategories();
    console.log(categories);
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
          <span className={styles.categoriesTitle}>Popular Collections</span>
        </h2>
        <div className={styles.categoriesContent}>
          {categories.slice(0, 4).map((category, i) => (
            <CategoryCard key={i} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesHome;
