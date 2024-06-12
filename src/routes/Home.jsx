import React from "react";
import BannerHome from "../layout/BannerHome";
import CategoriesSection from "../layout/CategoriesSection";
import WorldMealsHome from "../layout/WorldMealsHome";
import LatestRecipesHome from "../layout/LatestRecipesHome";

const Home = () => {
  return (
    <>
      <BannerHome />
      <CategoriesSection title="Popular Collections" showCategories={4} />
      <WorldMealsHome />
      <LatestRecipesHome />
    </>
  );
};

export default Home;
