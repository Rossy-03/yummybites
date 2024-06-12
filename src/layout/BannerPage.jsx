import styles from "./styles/_bannerpage.module.scss";

const BannerPage = () => {
  return (
    <div className={styles.bannerPageOuter}>
      <div className={styles.bannerImageWrapper}>
        {/* <img
          src="/assets/images/banner/be09a66ed1c19e51b21c7adfb837f94c2dd317b8.jpg"
          alt="add"
        /> */}
        {/* <img src="/assets/images/masala.jpg" alt="add" /> */}
        {/* <img src="/assets/images/phxdomainhero1.png" alt="add" /> */}
        {/* <img src="/assets/images/testimonial-bg.jpg" alt="" /> */}
        <img src="/assets/images/banner/template-1.jpg" alt="" />
        {/* <img
          src="/assets/images/banner/banner-refl.jpg"
          alt=""
          style={{ marginBottom: "1rem" }}
        />
        <img
          src="/assets/images/banner/5zS8XZHkJbWCKU9UgYGEf8FoMqY7dv6MI8iMbnmy.png"
          alt=""
          style={{ marginBottom: "12rem" }}
        />
        <img
          src="/assets/images/banner/5zS8XZHkJbWCKU9UgYGEf8FoMqY7dv6MI8iMbnmy.png"
          alt=""
          style={{ marginBottom: "5rem" }}
        /> */}
      </div>
    </div>
  );
};

export default BannerPage;
