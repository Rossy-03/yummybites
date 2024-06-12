import colors from "../sass/variables/_colors.module.scss";
import styles from "./styles/_nav.module.scss";
import Logo from "../components/shared/Logo";
import SocialLinks from "../components/shared/SocialLinks";
import MainNav from "./MainNav";

const Nav = () => {
  // console.log(colors.primary);

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
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Nav;
