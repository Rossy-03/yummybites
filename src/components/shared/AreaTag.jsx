import style from "./styles/_areatag.module.scss";

const AreaTag = ({ area }) => {
  return (
    <a href={`/areas/${area.strArea}`} className={style.areaTag}>
      <span>{area.strArea}</span>
    </a>
  );
};

export default AreaTag;
