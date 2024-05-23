import style from "./styles/_categorycard.module.scss";

const CategoryCard = ({ category }) => {
  return (
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
  );
};

export default CategoryCard;
