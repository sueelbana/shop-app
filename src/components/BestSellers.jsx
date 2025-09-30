import React, { useState } from "react";
import { ArrowRight, Heart, Plus } from "lucide-react";

// Import images from assets
import creamImg from "../assets/cream.jpg";
import melonImg from "../assets/melon.jpg";
import banner1Img from "../assets/banner1.jpg";
import syrupImg from "../assets/syrup.jpg";
import shakeImg from "../assets/shake.jpg";
import risingImg from "../assets/rising.jpg";
import cpkImg from "../assets/cpk.jpg";
import banner2Img from "../assets/banner2.jpg";
import bagelImg from "../assets/bagel.jpg";
import baguetteImg from "../assets/baguette.jpg";

const products = [
  {
    id: 1,
    name: "Philadelphia Original Cream Cheese Spread – 12oz",
    price: 5.0,
    oldPrice: 5.98,
    discount: "8%",
    img: creamImg,
  },
  {
    id: 2,
    name: "Cantaloupe Melon Fresh Organic",
    price: 1.25,
    oldPrice: 2.88,
    discount: "13%",
    img: melonImg,
  },
  {
    id: 3,
    name: "Pearl Milling Company Original Syrup – 24 fl oz",
    price: 2.38,
    oldPrice: 3.88,
    discount: "28%",
    img: banner1Img,
  },
  {
    id: 4,
    name: "Pearl Milling Company Original Syrup – 24 fl oz",
    price: 2.38,
    oldPrice: 3.88,
    discount: "28%",
    img: syrupImg,
  },
  {
    id: 5,
    name: "Evolve Plant-Powered Protein Shake Double Chocolate – 4pk/44 fl oz",
    price: 14.89,
    oldPrice: 19.98,
    discount: "25%",
    img: shakeImg,
  },
  {
    id: 6,
    name: "Great Value Rising Crust Frozen Pizza – Supreme",
    price: 8.99,
    oldPrice: 9.98,
    discount: "10%",
    img: risingImg,
  },
  {
    id: 7,
    name: "California Pizza Kitchen Margherita, Crispy Thin Crust",
    price: 11.77,
    oldPrice: 14.77,
    discount: "20%",
    img: cpkImg,
  },
  {
    id: 8,
    name: "California Pizza Kitchen Margherita, Crispy Thin Crust",
    price: 11.77,
    oldPrice: 14.77,
    discount: "20%",
    img: banner2Img,
  },
  {
    id: 9,
    name: "Thomas’ Everything Bagels – 20oz/6ct",
    price: 2.5,
    oldPrice: 3.5,
    discount: "28%",
    img: bagelImg,
  },
  {
    id: 10,
    name: "Take and Bake Baguettes – 11oz",
    price: 1.75,
    oldPrice: 2.95,
    discount: "39%",
    img: baguetteImg,
  },
];

export default function BestSellers() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <section className="px-6 py-10 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">Best Sellers</h2>
          <p className="text-gray-500 text-sm">
            Some of the new products arriving this weeks{" "}
          </p>
        </div>

        <button className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-black hover:bg-gray-100 transition">
          View All
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition bg-white relative"
          >
            {/* Discount */}
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              -{product.discount}
            </span>

            {/* Favorite */}
            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-3 right-3"
            >
              <Heart
                className={`w-5 h-5 ${
                  favorites.includes(product.id)
                    ? "fill-red-500"
                    : "text-gray-400"
                }`}
              />
            </button>

            {/* Image */}
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-32 object-contain mb-4"
            />

            {/* Info */}
            <h3 className="text-sm font-medium text-gray-700 mb-1">
              {product.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm line-through text-gray-400">
                ${product.oldPrice.toFixed(2)}
              </span>
            </div>

            {/* Add to cart */}
              <button className="border border-gray-300 rounded-full py-1 px-3 flex items-center justify-between text-sm hover:bg-purple-700 hover:text-white transition w-full">
                <span>Add to cart</span>
                <Plus size={16} />
              </button>
          </div>
        ))}
      </div>
    </section>
  );
}
