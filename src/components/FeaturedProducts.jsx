import React, { useEffect, useState } from "react";
import { ArrowRight, Heart, Plus } from "lucide-react";

// Product images
import bananas from "../assets/banana.jpg";
import lays from "../assets/lays.jpg";
import pizza from "../assets/pizza.jpg";
import beef from "../assets/beef.jpg";
import mouthwash from "../assets/mouthwash.jpg";
import chicken from "../assets/chicken.jpg";

// Banner images
import babyfood from "../assets/babyfood.jpg";
import icecream from "../assets/icecream.jpg";

const products = [
  {
    id: 1,
    img: bananas,
    discount: "56%",
    title: "Marketside Fresh Organic Bananas, Bunch",
    price: "$0.88",
    oldPrice: "$1.98",
  },
  {
    id: 2,
    img: lays,
    discount: "50%",
    title: "Lay’s Classic Potato Snack Chips, Party Size, 13 oz Bag",
    price: "$1.00",
    oldPrice: "$1.99",
  },
  {
    id: 3,
    img: pizza,
    discount: "11%",
    title: "Great Value Classic Crust Pepperoni Microwave Frozen Pizza",
    price: "$1.89",
    oldPrice: "$2.99",
  },
  {
    id: 4,
    img: beef,
    discount: "12%",
    title: "All Natural 85/15 Ground Beef – 1lb",
    price: "$7.75",
    oldPrice: "$8.75",
  },
  {
    id: 5,
    img: mouthwash,
    discount: "15%",
    title: "ACT Anticavity Fluoride Mouthwash With Zero Alcohol – 33.8 fl oz",
    price: "$2.35",
    oldPrice: "$3.43",
  },
  {
    id: 6,
    img: chicken,
    discount: "15%",
    title: "FireSmith Flame Grilled Chicken Breast – Deli Fresh Sliced",
    price: "$15.91",
    oldPrice: "$17.91",
  },
];

const banners = [
  {
    id: 1,
    title: (
      <>
        Make your grocery <br /> shopping easy with us
      </>
    ),
    subtitle: "Only this week. Don’t miss...",
    img: babyfood,
  },
  {
    id: 2,
    title: (
      <>
        Get your everyday <br /> needs here with us
      </>
    ),
    subtitle: "A different kind of grocery store",
    img: icecream,
  },
];

// Countdown Timer Component
function CountdownTimer({ initialTime }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <p className="text-xs text-gray-500 mt-1">
      ⏳ {minutes}:{seconds.toString().padStart(2, "0")} left
    </p>
  );
}

export default function FeaturedProducts() {
  return (
    <section className="px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">Featured Products</h2>
          <p className="text-gray-500 text-sm">
            Do not miss the current offers until the end of March.
          </p>
        </div>

        <button className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-black hover:bg-gray-100 transition">
          View All
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 hover:shadow-md transition flex items-start space-x-4 min-h-[220px]"
          >
            {/* Image + Discount */}
            <div className="relative w-40 h-40 flex-shrink-0">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-contain"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                {product.discount}
              </span>
              {/* Timer below image */}
              <CountdownTimer initialTime={300} /> {/* 5 min timer */}
            </div>

            {/* Heart Icon */}
            <div className="flex items-start pl-2">
              <Heart
                size={18}
                className="text-gray-400 hover:text-red-500 cursor-pointer transition"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-1">
              <h3 className="text-sm font-medium text-gray-700 line-clamp-2">
                {product.title}
              </h3>

              <div className="flex items-center space-x-2 my-2">
                <span className="text-red-600 font-bold">{product.price}</span>
                <span className="line-through text-gray-400 text-sm">
                  {product.oldPrice}
                </span>
              </div>

              <button className="border border-gray-300 rounded-full py-1 px-3 flex items-center justify-between text-sm hover:bg-purple-700 hover:text-white transition w-full">
                <span>Add to cart</span>
                <Plus size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Banners */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="relative rounded-lg overflow-hidden h-56 flex items-start justify-start p-6 text-black"
            style={{
              backgroundImage: `url(${banner.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Content */}
            <div className="relative z-10 max-w-[70%]">
              <p className="text-orange-400 text-xs font-semibold">
                Only This Week
              </p>
              <h3 className="text-lg font-bold whitespace-pre-line">
                {banner.title}
              </h3>
              <p className="text-sm text-gray-700">{banner.subtitle}</p>
              <button className="mt-3 text-sm font-semibold bg-white px-4 py-2 border border-gray-400 text-black rounded-full">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
