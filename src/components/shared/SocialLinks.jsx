import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import SocialIconsBox from "./SocialIconsBox";
import styles from "./styles/_sociallinks.module.scss";

const SocialLinks = ({ color, bgColor }) => {
  return (
    <div className={styles.socialLinksBox}>
      <SocialIconsBox color={color} bgColor={bgColor}>
        <FaFacebookF />
      </SocialIconsBox>
      <SocialIconsBox color={color} bgColor={bgColor}>
        <FaInstagram />
      </SocialIconsBox>
      <SocialIconsBox color={color} bgColor={bgColor}>
        <FaTwitter />
      </SocialIconsBox>
      <SocialIconsBox color={color} bgColor={bgColor}>
        <FaPinterestP />
      </SocialIconsBox>
    </div>
  );
};

export default SocialLinks;
