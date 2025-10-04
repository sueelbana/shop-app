import React from "react";
import groceryImage from "../assets/grocery2.JPG";

export default function Banner() {
  return (
    <div
      className="w-full h-72 md:h-96 rounded-lg shadow-md bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${groceryImage})` }}
    >
      {/* Overlay (optional, to make text more readable) */}
      <div className="w-full h-full rounded-lg flex items-center">
        <div className="p-8 md:p-12 max-w-xl text-black">
          <p className="text-sm text-orange-400 font-semibold mb-2">
            Only This Week
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Grocery store with different treasures
          </h2>
          <p className="mb-6">
            We have prepared special discounts for you on grocery products.
          </p>
          <button className="px-5 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
            Shop Now →
          </button>
        </div>
      </div>
    </div>
  );
}
