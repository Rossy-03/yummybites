import Search from "../components/shared/Search";
import styles from "./styles/_bannerhome.module.scss";

const BannerHome = () => {
  return (
    <div className={styles.bannerHomeOuter}>
      <div className={styles.bannerImageWrapper}>
        {/* <img src="/assets/images/masala.jpg" alt="add" /> */}
        <img src="/assets/images/phxdomainhero1.png" alt="add" />
        {/* <img src="/assets/images/testimonial-bg.jpg" alt="" /> */}
      </div>
      <div className={styles.searchBox}>
        <h3>
          <span>GET THE</span> <span className="styled-font">best recipes</span>{" "}
          <span>RIGHT NOW</span>
        </h3>
        <Search />
      </div>
    </div>
  );
};

export default BannerHome;
