import React from "react";
import shopBanner from "../assets/shop-banner.jpg"; 
import TopCategories from "../components/TopCategories";
import NewProducts from "../components/NewProducts";
import NewDeals from "../components/NewDeals";

export default function Shop() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Banner Section */}
      <div className="relative w-full h-[500px] flex items-center justify-center bg-gray-100">
        {/* Background */}
        <img
          src={shopBanner}
          alt="Shop Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 flex items-center justify-between">
          {/* Left Side - Text */}
          <div className="max-w-xl text-left">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded">
              Weekend Discount
            </span>
            <h1 className="mt-4 text-4xl font-bold text-brand leading-snug">
              Get the best quality <br />
              products at the lowest <br />
              prices
            </h1>
            <p className="mt-4 text-gray-600">
              We have prepared special discounts for you on organic breakfast
              products.
            </p>

            <div className="mt-6 flex items-center space-x-6">
              <button className="bg-brand-purple hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-md">
                Shop Now
              </button>
              <span className="text-red-600 font-bold text-lg">
                $21.67{" "}
                <span className="line-through text-black ml-2">$36.98</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <TopCategories />
      <NewProducts />
      <NewDeals />
    </div>
  );
}
