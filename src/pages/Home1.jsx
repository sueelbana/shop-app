import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import PromoBanner from "../components/PromoBanner";
import FeatureHighlights from "../components/FeatureHighlights";
import WeeklyDeals from "../components/WeeklyDeals";
import NewArrivals from "../components/NewArrivals";
import FeaturedProducts from "../components/FeaturedProducts";
import BestSellers from "../components/BestSellers";
import PopularCompanies from "../components/PopularCompanies";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <LeftSidebar />
        <PromoBanner />
      </div>

      <FeatureHighlights />
      <WeeklyDeals />
      <NewArrivals />
      <FeaturedProducts />
      <BestSellers />
      <PopularCompanies />
    </div>
  );
};

export default HomePage;
