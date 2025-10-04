import React from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";

import product1 from "../assets/wrap.jpg";
import product2 from "../assets/peaches.jpg";
import product3 from "../assets/potatoes.jpg";
import product4 from "../assets/cauliflower.jpg";
import product5 from "../assets/brocoli.jpg";
import product6 from "../assets/eggplant.jpg";

const products = [
  {
    id: 1,
    name: "Large Garden Spinach & Herb Wrap Tortillas – 15oz, 8ct",
    price: 27.9,
    oldPrice: 32.89,
    discount: "15%",
    image: product1,
    rating: 5,
    stock: true,
  },
  {
    id: 2,
    name: "Peach – each",
    price: 0.75,
    oldPrice: 1.75,
    discount: "57%",
    image: product2,
    rating: 4,
    stock: true,
  },
  {
    id: 3,
    name: "Yellow Potatoes Whole Fresh 5lb Bag",
    price: 0.5,
    oldPrice: 1.98,
    discount: "75%",
    image: product3,
    rating: 4,
    stock: true,
  },
  {
    id: 4,
    name: "Fresh Cauliflower, Each",
    price: 12.79,
    oldPrice: 14.79,
    discount: "14%",
    image: product4,
    rating: 5,
    stock: true,
  },
  {
    id: 5,
    name: "Fresh Broccoli Crowns, Each",
    price: 11.54,
    oldPrice: 13.86,
    discount: "16%",
    image: product5,
    rating: 4,
    stock: true,
  },
  {
    id: 6,
    name: "Fresh Purple Eggplant",
    price: 2.99,
    oldPrice: 3.68,
    discount: "19%",
    image: product6,
    rating: 3,
    stock: true,
  },
];

const NewCategoryProducts = () => {
  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Related products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white border border-gray-200 rounded-md p-4 shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                {product.discount}
              </div>

              {/* Wishlist Icon */}
              <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition">
                <Heart className="w-5 h-5" />
              </button>

              {/* Product Image */}
              <div className="flex justify-center items-center mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-28 object-contain"
                />
              </div>

              {/* Product Name */}
              <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-600 font-semibold text-sm">
                  ${product.price}
                </span>
                <span className="text-gray-400 line-through text-xs">
                  ${product.oldPrice}
                </span>
              </div>

              {/* Stock + Cart */}
              <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                <ShoppingCart className="w-4 h-4" />
                <span>IN STOCK</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCategoryProducts;
