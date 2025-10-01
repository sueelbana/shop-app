import React from "react";
import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

import banner1 from "../assets/juice.jpg";
import banner2 from "../assets/popcorn.jpg";
import banner3 from "../assets/peach.jpg";

import prod1 from "../assets/apple.jpg";
import prod2 from "../assets/orange.jpg";
import prod3 from "../assets/prod3.jpg";
import prod4 from "../assets/prod4.jpg";
import prod5 from "../assets/prod5.jpg";
import prod6 from "../assets/prod4.jpg";
import prod7 from "../assets/prod3.jpg";


const bestSellers = [
  {
    id: 1,
    image: prod1,
    title: "100 Percent Apple Juice – 64 fl oz Bottle",
    price: 0.5,
    oldPrice: 1.99,
    discount: "70%",
    rating: 4,
    featured: false,
  },
  {
    id: 2,
    image: prod2,
    title: "Simply Orange Pulp Free Juice – 52 fl oz",
    price: 2.45,
    oldPrice: 3.5,
    discount: "40%",
    rating: 5,
    featured: false,
  },
  {
    id: 3,
    image: prod3,
    title: "Vitaminwater zero sugar squeezed electrolyte water",
    price: 4.99,
    oldPrice: 6.5,
    discount: "45%",
    rating: 4,
    featured: false,
  },
  {
    id: 4,
    image: prod4,
    title: "Absolut Grapefruit Paloma Sparkling Vodka Cocktail – 4pk, 355ml",
    price: 6.99,
    oldPrice: 9.99,
    discount: "33%",
    rating: 5,
    featured: true, // this one is big
    description:
      "Vodka grapefruit Paloma with a twist of sparkling refreshment. Natural flavors and premium vodka make it your perfect go-to drink.",
  },
  {
    id: 5,
    image: prod5,
    title: "Real Plant-Powered Protein Shake – Double Chocolate",
    price: 14.89,
    oldPrice: 18.0,
    discount: "20%",
    rating: 4,
    featured: false,
  },
];

const bottomBanners = [
  {
    id: 1,
    image: banner1,
    title: "We provide you the best quality products",
  },
  {
    id: 2,
    image: banner2,
    title: "We make your grocery shopping more exciting",
  },
  {
    id: 3,
    image: banner3,
    title: "The one supermarket that saves your money",
  },
];

const TopDeals = () => {
  return (
    <div className="my-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-black">
          BEST SELLERS
        </h2>
        <button className="text-sm text-gray-600 hover:underline">
          View All →
        </button>
      </div>

      {/* Subtitle */}
      <p className="text-gray-400 text-sm mb-6">
        Don’t miss this opportunity at a special discount just for this week.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {bestSellers.map((product) =>
          product.featured ? (
            // Featured Big Card
            <div
              key={product.id}
              className="col-span-2 row-span-2 border-2 border-red-400 rounded-xl p-6 relative bg-white"
            >
              {/* Discount Badge */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                {product.discount}
              </span>

              {/* Heart */}
              <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                <Heart className="w-5 h-5" />
              </button>

              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
              />

              {/* Title */}
              <h4 className="text-sm font-semibold mb-1 line-clamp-2">
                {product.title}
              </h4>

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
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-red-600 font-bold">
                  ${product.price}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  ${product.oldPrice}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm mb-4">
                {product.description}
              </p>

              {/* Add to Cart */}
              <button className="w-full bg-green-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-green-600 transition">
                <ShoppingCart className="w-4 h-4" /> Add to cart
              </button>
            </div>
          ) : (
            // Small Normal Card
            <div
              key={product.id}
              className="border rounded-xl p-4 relative bg-white"
            >
              {/* Discount Badge */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                {product.discount}
              </span>

              {/* Heart */}
              <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                <Heart className="w-5 h-5" />
              </button>

              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-28 object-contain mb-3"
              />

              {/* Title */}
              <h4 className="text-xs font-semibold mb-1 line-clamp-2">
                {product.title}
              </h4>

              {/* Price */}
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-red-600 font-bold text-sm">
                  ${product.price}
                </span>
                <span className="text-gray-400 line-through text-xs">
                  ${product.oldPrice}
                </span>
              </div>

              {/* Add to Cart */}
              <button className="w-full bg-gray-100 text-sm text-black py-1 rounded-md hover:bg-gray-200 transition">
                Add to cart
              </button>
            </div>
          )
        )}
      </div>

      {/* Bottom Promo Banners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {bottomBanners.map((banner) => (
          <div
            key={banner.id}
            className="relative rounded-lg overflow-hidden bg-white shadow-md"
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-32 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <h3 className="text-white text-sm font-semibold text-center px-2">
                {banner.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
