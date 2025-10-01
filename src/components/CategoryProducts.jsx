import React from "react";

import banner1 from "../assets/ban1.jpg"; 
import banner2 from "../assets/ban2.jpg";
import product1 from "../assets/rising.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import bottomBanner from "../assets/banner.jpg";
import { ArrowRight, Heart, Star, ShoppingCart } from "lucide-react"; // ✅ added icons

const products = [
  {
    id: 1,
    image: product1,
    title: "Great Value Rising Crust Frozen Pizza, Supreme",
    price: 8.99,
    oldPrice: 9.89,
    discount: "11%",
    stock: true,
    rating: 4,
  },
  {
    id: 2,
    image: product2,
    title: "Simple Kitchen FD Sliced Strawberries – 1.08lb",
    price: 21.9,
    oldPrice: 24.9,
    discount: "13%",
    stock: true,
    rating: 5,
  },
  {
    id: 3,
    image: product3,
    title: "Red Baron Frozen Hand Tossed Ultimate Pepperoni Pizza",
    price: 14.99,
    oldPrice: 19.99,
    discount: "25%",
    stock: true,
    rating: 3,
  },
  {
    id: 4,
    image: product4,
    title: "Oscar Mayer Ham & Swiss Melt Scrambler – 3oz",
    price: 11.9,
    oldPrice: 12.89,
    discount: "10%",
    stock: true,
    rating: 4,
  },
  {
    id: 5,
    image: product5,
    title: "Large Garden Spinach & Herb Wrap Tortillas – 15oz, 8ct",
    price: 27.9,
    oldPrice: 32.89,
    discount: "14%",
    stock: true,
    rating: 5,
  },
];

const CategoryProducts = () => {
  return (
    <div className="my-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold text-black">
            Category Products
          </h2>
          <p className="text-gray-500 text-sm">
            Do not miss the current offers until the end of March.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-black border hover:bg-gray-100 transition">
          View All
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Top Promo Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
        {/* Banner 1 */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-8 max-w-[320px]">
            <p className="text-black bg-orange-100 rounded-md text-sm font-semibold px-3 py-1 mb-2">
              Only This Week
            </p>
            <h3 className="text-3xl font-bold text-black mb-3 leading-snug">
              Make your grocery shopping easy with us
            </h3>
            <p className="text-gray-600 text-sm mb-4">Feed your family the best</p>
            <button className="bg-white px-5 py-2 rounded-2xl text-base font-semibold w-fit shadow-md hover:bg-gray-100">
              Shop Now →
            </button>
          </div>
        </div>
        {/* Banner 2 */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-8 max-w-[320px]">
            <p className="text-black bg-orange-100 rounded-md text-sm font-semibold px-3 py-1 mb-2">
              Only This Week
            </p>
            <h3 className="text-3xl font-bold text-black mb-3 leading-snug">
              Get your everyday needs here with us
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              A different kind of grocery store
            </p>
            <button className="bg-white px-5 py-2 rounded-2xl text-base font-semibold w-fit shadow-md hover:bg-gray-100">
              Shop Now →
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y">
          {products.map((product) => (
            <div key={product.id} className="p-4 relative">
              {/* Discount Badge */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                {product.discount}
              </span>

              {/* Heart Icon */}
              <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition">
                <Heart className="w-5 h-5" />
              </button>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 object-contain mb-4"
              />

              {/* Title */}
              <h4 className="text-sm font-semibold mb-1 line-clamp-2">
                {product.title}
              </h4>

              {/* Rating */}
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`w-4 h-4 ${
                      index < product.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Price */}
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-red-600 font-bold">${product.price}</span>
                <span className="text-gray-400 line-through text-sm">
                  ${product.oldPrice}
                </span>
              </div>

              {/* Stock with Cart Icon */}
              <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                <ShoppingCart className="w-4 h-4" />
                <span>IN STOCK</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="mt-10 relative rounded-lg overflow-hidden">
        <img
          src={bottomBanner}
          alt="Bottom Banner"
          className="w-full h-20 object-cover"
        />
      </div>
    </div>
  );
};

export default CategoryProducts;
