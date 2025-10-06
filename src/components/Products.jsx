import React from "react";
import babyFoodImg from "../assets/babyfood.jpg";
import groceryImg from "../assets/icecream.jpg";

export default function Products() {
  const banners = [
    {
      id: 1,
      title: (
        <>
          Make your grocery <br /> shopping easy with us
        </>
      ),
      subtitle: "Only this week. Don’t miss...",
      img: babyFoodImg,
    },
    {
      id: 2,
      title: (
        <>
          Get your everyday <br /> needs here with us
        </>
      ),
      subtitle: "A different kind of grocery store",
      img: groceryImg,
    },
  ];

  return (
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
          <div className="relative z-10 max-w-[70%]">
            <p className="text-black bg-orange-100 rounded-md text-xs font-semibold">
              Only This Week
            </p>
            <h3 className="text-lg font-bold whitespace-pre-line">
              {banner.title}
            </h3>
            <p className="text-sm text-gray-700">{banner.subtitle}</p>
            <button className="mt-3 text-sm font-semibold bg-white px-4 py-2 border border-gray-400 text-black rounded-full">
              Shop Now →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
