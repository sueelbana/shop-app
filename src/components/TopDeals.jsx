import React from "react";
import { Heart, ShoppingCart, Star, ArrowRight } from "lucide-react";

import prod1 from "../assets/apple.jpg";
import prod2 from "../assets/orange.jpg";
import prod3 from "../assets/prod3.jpg";
import prod4 from "../assets/prod4.jpg";
import prod5 from "../assets/prod5.jpg";

const bestSellers = [
  {
    id: 1,
    image: prod1,
    title: "100 Percent Apple Juice – 64 fl oz Bottle",
    price: 0.5,
    oldPrice: 1.99,
    discount: "70%",
    rating: 4,
  },
  {
    id: 2,
    image: prod2,
    title: "Simply Orange Pulp Free Juice – 52 fl oz",
    price: 2.45,
    oldPrice: 3.5,
    discount: "40%",
    rating: 5,
  },
  {
    id: 3,
    image: prod3,
    title: "Vitaminwater zero sugar squeezed electrolyte water",
    price: 4.99,
    oldPrice: 6.5,
    discount: "45%",
    rating: 4,
  },
  {
    id: 4,
    image: prod4,
    title: "Absolut Grapefruit Paloma Sparkling Vodka Cocktail – 4pk, 355ml",
    description:
      "Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent Vivamus adipiscing nisl ut dolor dignissim semper.",
    price: 6.99,
    oldPrice: 9.99,
    discount: "33%",
    rating: 5,
    stock: 30,
    sold: 70,
  },
  {
    id: 5,
    image: prod5,
    title: "Real Plant-Powered Protein Shake – Double Chocolate",
    price: 14.89,
    oldPrice: 18.0,
    discount: "20%",
    rating: 4,
  },
];

// Small product card
const ProductCard = ({ product }) => {
  return (
    <div className="relative flex items-start gap-4 p-4">
      {/* Left Side - Image, Discount, Heart */}
      <div className="relative w-32 flex-shrink-0">
        {/* Discount Badge */}
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {product.discount}
        </span>

        {/* Heart Icon */}
        <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
          <Heart className="w-4 h-4" />
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="h-24 w-full object-contain mb-2"
        />
      </div>

      {/* Right Side - Info */}
      <div className="flex flex-col flex-1">
        {/* Title */}
        <h4 className="text-sm font-medium mb-1 line-clamp-2">
          {product.title}
        </h4>

        {/* Rating */}
        <div className="flex items-center mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-red-600 font-bold text-sm">
            ${product.price}
          </span>
          <span className="text-gray-400 line-through text-xs">
            ${product.oldPrice}
          </span>
        </div>

        {/* Add to Cart */}
        <button className="bg-gray-100 text-xs text-black py-1 rounded-md hover:bg-gray-200 transition flex items-center justify-center gap-1">
          <ShoppingCart className="w-3 h-3" /> Add to cart
        </button>
      </div>
    </div>
  );
};

// Big Featured card
const FeaturedCard = ({ product }) => {
  const total = product.stock + product.sold;
  const soldPercentage = Math.floor((product.sold / total) * 100);

  return (
    <div className="relative border border-red-600 rounded-lg shadow-md p-6 flex flex-col">
      {/* Discount Badge */}
      <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
        {product.discount}
      </span>

      {/* Heart Icon */}
      <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
        <Heart className="w-5 h-5" />
      </button>

      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mx-auto mb-3"
      />

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

      {/* Title */}
      <h3 className="text-lg font-bold mb-2">{product.title}</h3>

      {/* Price */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-red-600 font-bold text-xl">${product.price}</span>
        <span className="text-gray-400 line-through text-sm">
          ${product.oldPrice}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4">{product.description}</p>

      {/* Stock Progress */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div
          className="bg-red-500 h-2 rounded-full"
          style={{ width: `${soldPercentage}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-600 mb-3">
        <span className="font-semibold">{product.sold}</span> Sold /{" "}
        <span className="font-semibold">{product.stock}</span> In Stock
      </p>

      {/* Add to Cart */}
      <button className="w-full bg-green-600 text-white py-3 rounded-md flex items-center justify-center gap-2 font-medium">
        <ShoppingCart className="w-5 h-5" /> Add to cart
      </button>
    </div>
  );
};

const TopDeals = () => {
  return (
    <div className="my-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <h2 className="text-2xl font-bold">Best Sellers</h2>
          <p className="text-gray-500 text-sm">
            Don’t miss this opportunity at a special discount just for this
            week.
          </p>
        </div>

        <button className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-100 transition">
          View All
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Product Layout with Featured Middle Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {/* Left container */}
        <div className="border rounded-lg bg-transparent p-2 flex flex-col gap-4">
          {[bestSellers[0], bestSellers[1], bestSellers[2]].map(
            (product, idx) => (
              <div key={idx} className={idx !== 2 ? "border-b pb-4" : ""}>
                <ProductCard product={product} />
              </div>
            )
          )}
        </div>

        {/* Middle featured product */}
        <FeaturedCard product={bestSellers[3]} />

        {/* Right container */}
        <div className="border rounded-lg bg-transparent p-2 flex flex-col gap-4">
          {[bestSellers[4], bestSellers[2], bestSellers[0]].map(
            (product, idx) => (
              <div key={idx} className={idx !== 2 ? "border-b pb-4" : ""}>
                <ProductCard product={product} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TopDeals;
