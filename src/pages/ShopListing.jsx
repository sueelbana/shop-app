import React from "react";
import { Star } from "lucide-react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import FilterSidebar from "../components/FilterSidebar";
import Banner from "../components/Banner";

import potatoesImg from "../assets/potatoes.jpg";
import orangeImg from "../assets/oranges.jpg";
import strawberryImg from "../assets/strawberries.jpg";
import canImg from "../assets/can.jpg";
import peachesImg from "../assets/peaches.jpg";
import bananasImg from "../assets/bananas.jpg";
import wrapImg from "../assets/wrap.jpg";
import halloweenImg from "../assets/halloween.jpg";
import eggplnatImg from "../assets/eggplant.jpg";
import pomegranetImg from "../assets/pomegranet.jpg";
import lemonImg from "../assets/lemon.jpg";
import cauliflowerImg from "../assets/cauliflower.jpg";
import brocoliImg from "../assets/brocoli.jpg";
import berryImg from "../assets/berry.jpg";
import shakeImg from "../assets/shake2.jpg";
import greenappleImg from "../assets/greenapple.jpg";

export default function ShopListing() {
  const products = [
    {
      id: 1,
      name: "Yellow Peaches Whole Fresh",
      price: 0.5,
      oldPrice: 1.98,
      img: potatoesImg,
      discount: 75,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Large Bagged Oranges",
      price: 0.89,
      oldPrice: 1.98,
      img: orangeImg,
      discount: 50,
      rating: 4.5,
    },
    {
      id: 3,
      name: "Strawberries - 1lb",
      price: 1.5,
      oldPrice: 2.15,
      img: strawberryImg,
      discount: 30,
      rating: 4.5,
    },
    {
      id: 4,
      name: "Simple Kitchen FD Sliced Strawberries – 1.08lb",
      price: 1.5,
      oldPrice: 2.15,
      img: canImg,
      discount: 30,
      rating: 4.5,
    },
    {
      id: 5,
      name: "Peach – each",
      price: 1.5,
      oldPrice: 2.15,
      img: peachesImg,
      discount: 30,
      rating: 4.5,
    },
    {
      id: 6,
      name: "Marketside Fresh Organic Bananas, Bunch",
      price: 1.5,
      oldPrice: 2.15,
      img: bananasImg,
      discount: 30,
      rating: 4.5,
    },
    {
      id: 7,
      name: "Large Garden Spinach & Herb Wrap Tortillas –…",
      price: 1.5,
      oldPrice: 2.15,
      img: wrapImg,
      discount: 30,
      rating: 4.5,
    },
    {
      id: 8,
      name: "Halloween Harvest Caramel Apple Soft Caramels –…",
      price: 1.5,
      oldPrice: 2.15,
      img: halloweenImg,
      discount: 30,
      rating: 4.5,
    },
    {
      id: 9,
      name: "Fresh Purple Eggplant",
      price: 1.5,
      oldPrice: 2.15,
      img: eggplnatImg,
      discount: 30,
      rating: 4.5,
    },
    {
      id: 10,
      name: "Fresh Pomegranate, Each",
      price: 1.5,
      oldPrice: 2.15,
      img: pomegranetImg,
      discount: 30,
      rating: 4.5,
    },
    {
      id: 11,
      name: "Fresh Lemon, Each",
      price: 1.5,
      oldPrice: 2.15,
      img: lemonImg,
      discount: 30,
      rating: 4.5,
    },
    {
      id: 12,
      name: "Fresh Cauliflower, Each",
      price: 1.5,
      oldPrice: 2.15,
      img: cauliflowerImg,
      discount: 30,
      rating: 4.5,
    },
    {
      id: 13,
      name: "Fresh Broccoli Crowns, Each",
      price: 1.5,
      oldPrice: 2.15,
      img: brocoliImg,
      discount: 30,
      rating: 4.5,
    },
    {
      id: 14,
      name: "Blackberries – 6oz",
      price: 1.5,
      oldPrice: 2.15,
      img: berryImg,
      discount: 30,
      rating: 4.5,
    },
    {
      id: 15,
      name: "30g Protein Shake – Salted Caramel – 11 fl oz-4pk",
      price: 1.5,
      oldPrice: 2.15,
      img: shakeImg,
      discount: 30,
      rating: 4.5,
    },
    {
      id: 16,
      name: "Fresh Granny Smith Apple, Each",
      price: 1.5,
      oldPrice: 2.15,
      img: greenappleImg,
      discount: 30,
      rating: 4.5,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Sidebar */}
      <aside className="md:col-span-1">
        <FilterSidebar />
      </aside>

      {/* Main Content */}
      <main className="md:col-span-3 space-y-6">
        {/* ✅ Banner Above Products */}
        <Banner />

        {/* ✅ Product container */}
        <div className="border rounded-md grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {products.map((p) => (
            <Link
              to={`/product/${p.id}`}
              key={p.id}
              className="relative p-4 flex flex-col items-start border-b border-r last:border-r-0 hover:shadow-md transition"
            >
              {/* 🏷️ Discount Badge */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                -{p.discount}%
              </span>

              {/* 🖼️ Product Image */}
              <img
                src={p.img}
                alt={p.name}
                className="h-24 w-24 object-contain mb-2 mx-auto"
              />

              {/* 📦 Product Name */}
              <h4 className="text-sm font-medium text-left w-full">{p.name}</h4>

              {/* ⭐ Rating Stars */}
              <div className="flex items-center gap-0.5 mt-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.floor(p.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              {/* 💲 Price */}
              <div className="mt-1 w-full text-left">
                <span className="text-red-600 font-bold">${p.price}</span>
                <span className="line-through text-black ml-2 text-sm">
                  ${p.oldPrice}
                </span>
              </div>

              {/* 🛒 Cart Icon + In Stock */}
              <div className="mt-2 flex items-center gap-2">
                <div className="bg-green-600 p-2 rounded-md flex items-center justify-center">
                  <FaShoppingCart className="text-white text-sm" />
                </div>
                <span className="text-green-700 font-medium text-sm">
                  In Stock
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
