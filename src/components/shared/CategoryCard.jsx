import { Link } from "react-router-dom";
import style from "./styles/_categorycard.module.scss";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/categories/${category.strCategory}`}>
      <div className={style.categoryWrp}>
        <div className={style.imageWrp}>
          <img
            src={`/assets/images/categories/${category.strCategory}.jpg`}
            alt=""
          />
        </div>
        <div className={style.titleWrp}>
          <p>{category.strCategory}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
