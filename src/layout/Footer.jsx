import Logo from "../components/shared/Logo";
import styles from "./styles/_footer.module.scss";
import colors from "../sass/variables/_colors.module.scss";
import SocialLinks from "../components/shared/SocialLinks";

const Footer = () => {
  return (
    <div className={styles.footerOuter}>
      <div className={styles.footer}>
        <div className={styles.logoWrp}>
          <Logo color={colors.textInvert} />
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
        <SocialLinks color={colors.primary} bgColor={colors.secondary} />
        <div className={styles.copyRight}>
          <p>©YammyBites's Recipes 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
