import colors from "../sass/variables/_colors.module.scss";
import styles from "./styles/_nav.module.scss";
import Logo from "../components/shared/Logo";
import SocialLinks from "../components/shared/SocialLinks";

const Nav = () => {
  console.log(colors.primary);

  return (
    <div className="outer-container">
      <div className={styles.navbar}>
        <Logo />
        <div className={styles.socialLinksWrp}>
          <SocialLinks color={colors.textInvert} bgColor={colors.primary} />
        </div>
      </div>
      <div className={styles.mainNavOuter}>
        <div className={styles.mainNavBox}>
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
