import React from "react";
import BannerPage from "../layout/BannerPage";
import { Outlet } from "react-router-dom";

const InnerPage = () => {
  return (
    <>
      <BannerPage />
      <Outlet />
    </>
  );
};

export default InnerPage;
