import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import PromoBanner from "../components/PromoBanner";
import FeatureHighlights from "../components/FeatureHighlights";
import WeeklyDeals from "../components/WeeklyDeals";
import NewArrivals from "../components/NewArrivals";
import FeaturedProducts from "../components/FeaturedProducts";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Top Section: Sidebar + Promo */}
      <div className="flex gap-6">
        <LeftSidebar />
        <PromoBanner />
      </div>

      {/* Bottom Section: Full width Feature Highlights */}
      <FeatureHighlights />
      <WeeklyDeals />
      <NewArrivals />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
