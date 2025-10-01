import React from "react";
import heroProduct from "../assets/hero-product.jpg";
import fruitsImg from "../assets/fruits.jpg";
import babyImg from "../assets/baby.jpg";
import beveragesImg from "../assets/beverages.jpg";
import meatsImg from "../assets/meats.jpg";
import snacksImg from "../assets/snacks2.jpg";
import bakeryImg from "../assets/bakery.jpg";
import dairyImg from "../assets/dairy.jpg";
import frozenImg from "../assets/frozen.jpg";
import groceryImg from "../assets/grocery.jpg";

import EditorsPick from "../components/EditorsPick";
import CategoryProducts from "../components/CategoryProducts";
import TopDeals from "../components/TopDeals";

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

const FruitsAndVegetables = () => {
  return (
    <section>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-light bg-center w-full"
        style={{ backgroundImage: `url(${heroProduct})` }}
      >
        {/* Optional overlay to improve text readability */}
        {/* <div className="absolute inset-0 bg-black/30"></div> */}

        <div className="relative w-full max-w-[1400px] mx-auto px-10 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-10 text-white">
          {/* Left Text */}
          <div>
            <span className="text-green-700 font-semibold">
              Weekend Discount
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl text-brand font-bold leading-snug">
              Shopping with us for <br />
              better quality and the <br /> best price
            </h1>
            <p className="mt-4 text-black text-lg">
              We have prepared special discounts for you on grocery products.{" "}
              <br />
              Don’t miss these opportunities.
            </p>

            <div className="mt-6 flex items-center space-x-4">
              <a
                href="#"
                className="px-8 py-4 bg-brand-purple text-white rounded-md shadow hover:bg-purple-800 transition text-sm"
              >
                Shop Now
              </a>
              <p className="text-xl font-bold text-red-600">
                $21.67 <span className="line-through text-black">$28.67</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="bg-white py-12">
        <div className="w-full max-w-[1400px] mx-auto px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 text-center">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer group"
              >
                <div className="w-28 h-28 rounded-full flex items-center justify-center overflow-hidden bg-gray-50 group-hover:shadow-md transition">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-black group-hover:text-purple-700">
                  {cat.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Editor's Pick Section */}

      <EditorsPick />
      <CategoryProducts />
      <TopDeals />
    </section>
  );
};

export default FruitsAndVegetables;
