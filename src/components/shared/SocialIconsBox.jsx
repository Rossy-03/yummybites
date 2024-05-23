import { IconContext } from "react-icons";
import styles from "./styles/_socialiconsbox.module.scss";

const SocialIconsBox = ({ color, bgColor, children }) => {
  const iconBg = { backgroundColor: bgColor };
  return (
    <div className={styles.socialLink} style={iconBg}>
      <IconContext.Provider
        value={{ color: color, className: "global-class-name" }}
      >
        {children}
      </IconContext.Provider>
    </div>
  );
};

export default SocialIconsBox;
