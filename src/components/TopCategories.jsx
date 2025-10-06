import React from "react";

import fruitsImg from "../assets/fruits.jpg";
import babyImg from "../assets/baby.jpg";
import beveragesImg from "../assets/beverages.jpg";
import meatsImg from "../assets/meats.jpg";
import snacksImg from "../assets/snacks2.jpg";
import bakeryImg from "../assets/bakery.jpg";
import dairyImg from "../assets/dairy.jpg";
import frozenImg from "../assets/frozen.jpg";
import groceryImg from "../assets/grocery.jpg";

import bottomBanner from "../assets/banner.jpg";

export default function TopCategories() {
  const categories = [
    { name: "Fruits & Vegetables", img: fruitsImg },
    { name: "Baby & Pregnancy", img: babyImg },
    { name: "Beverages", img: beveragesImg },
    { name: "Meats & Seafood", img: meatsImg },
    { name: "Biscuits & Snacks", img: snacksImg },
    { name: "Breads & Bakery", img: bakeryImg },
    { name: "Breakfast & Dairy", img: dairyImg },
    { name: "Frozen Foods", img: frozenImg },
    { name: "Grocery & Staples", img: groceryImg },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold">Top Categories</h2>
            <p className="text-gray-500 text-sm">
              New products with updated stocks.
            </p>
          </div>
          <button className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-black hover:bg-gray-100 transition">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 text-center">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="w-24 h-24 flex items-center justify-center overflow-hidden bg-gray-50 group-hover:shadow-lg transition">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-gray-700 group-hover:text-purple-700">
                {cat.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <img
            src={bottomBanner}
            alt="Health & Safety Banner"
            className="w-full h-20 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
