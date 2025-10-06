import React from "react";

import eggsImg from "../assets/eggs.jpg";
import snacksImg from "../assets/snacks.jpg";
import qualityImg from "../assets/quality.jpg";

const deals = [
  {
    image: eggsImg,
    title: (
      <>
        Quality eggs at an <br /> affordable price
      </>
    ),
    subtitle: "Eat one every day",
  },
  {
    image: snacksImg,
    title: (
      <>
        Snacks that nourishes <br /> our mind and body
      </>
    ),
    subtitle: "Shine the morning…",
  },
  {
    image: qualityImg,
    title: (
      <>
        Unbeatable quality, <br /> unbeatable prices.
      </>
    ),
    subtitle: "Only this week. Don’t miss…",
  },
];

const WeeklyDeals = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
      {deals.map((deal, index) => (
        <div
          key={index}
          className="relative rounded-xl overflow-hidden shadow-sm"
        >
          <img
            src={deal.image}
            alt={deal.title}
            className="w-full h-56 object-cover"
          />

          <div className="absolute inset-0  p-6 flex flex-col justify-center">
            <p className="text-orange-500 font-semibold text-sm mb-2">
              Only This Week
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {deal.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{deal.subtitle}</p>
            <button className="bg-white border border-gray-300 rounded-2xl px-4 py-2 text-sm font-bold text-black hover:bg-gray-100 w-fit">
              Shop Now →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyDeals;
