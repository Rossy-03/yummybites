import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/_worldmealshome.module.scss";
import { getAreas } from "../lib/api";
import { setAreas } from "../state/recipesSlice";
import { useEffect } from "react";
import AreaTag from "../components/shared/AreaTag";

const WorldMealsHome = () => {
  const areas = useSelector((state) => state.recipes.areas);
  const dispatch = useDispatch();

  async function loadAreas() {
    const areas = await getAreas();
    console.log(areas);
    dispatch(setAreas({ areas: areas }));
  }

  useEffect(() => {
    loadAreas();
  }, []);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.worldmeals}>
        <div className={styles.wmImageWrapper}>
          {/* <img src={`/assets/images/world-food-1.jpg`} alt="" /> */}
          {/* <img src={`/assets/images/pasta_w.jpg`} alt="" /> */}
          {/* <img
            src={`/assets/images/227ae61c13953453bd7e682db8df52af.jpg`}
            alt=""
          /> */}
          {/* <img
            src={`/assets/images/Different-Foods-From-Around-The-World-Hamburger-Waffles-Moussaka-and-Bibimbap.jpg`}
            alt=""
          /> */}
          <img
            src={`/assets/images/salad-buddha-bowl-ingredients-tomato-avocado-radish-1200x500-1-770x434.png`}
            alt=""
          />

          {/* <img
            src={`/assets/images/90faaf410e79b12a4a2652f8cde82fba.jpg`}
            alt=""
          /> */}
        </div>
        <div className={styles.wmAreasWrapper}>
          <div>
            <h3 className="styled-font">Taste the World</h3>
            <p>
              From fiestas of flavour to tropical tastes, we have compiled our
              favourite recipes from various cuisines so you can taste the world
              from the comfort of your own kitchen.
            </p>
            <div>
              {areas.map((area, i) => (
                <AreaTag area={area} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMealsHome;
