import style from "./styles/_logo.module.scss";

const Logo = ({ color }) => {
  const logoColorStyle = { color: color };
  return (
    <div className="logowrapper">
      {/* <p className={styles.logo}>
          <span>Yummy</span>Bites
        </p> */}
      <p className={style.logo2}>
        <span className={style.logoFont} style={logoColorStyle}>
          Yummy
        </span>
        <span className={style.styledFont}>Bites</span>
      </p>
    </div>
  );
};

export default Logo;
