import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import PromoBanner from "../components/PromoBanner";

const HomePage = () => {
  return (
    <div className="flex">
      <LeftSidebar />
      <PromoBanner />
    </div>
  );
};

export default HomePage;
