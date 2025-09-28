import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import PromoBanner from "../components/PromoBanner";

const HomePage = () => {
  return (
    <div className="flex gap-6">
      <LeftSidebar />
      <PromoBanner />
    </div>
  );
};

export default HomePage;
