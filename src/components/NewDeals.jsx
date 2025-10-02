import React from "react";
import banner1 from "../assets/strawberry.jpg"; 
import banner2 from "../assets/orange2.jpg";
import banner3 from "../assets/toast.jpg"; 

const weeklyDeals = [
  {
    id: 1,
    label: "Only This Week",
    title: (
      <>
        We provide you the <br /> best quality products
      </>
    ),
    subtitle: "A family place for grocery",
    image: banner1,
  },
  {
    id: 2,
    label: "Only This Week",
    title: (
      <>
        We make your grocery <br /> shopping more exciting
      </>
    ),
    subtitle: "Since this morning...",
    image: banner2,
  },
  {
    id: 3,
    label: "Only This Week",
    title: (
      <>
        The one supermarket <br /> that saves your money
      </>
    ),
    subtitle: "Breakfast made better",
    image: banner3,
  },
];

const NewDeals = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
      {weeklyDeals.map((deal) => (
        <div
          key={deal.id}
          className="relative rounded-xl overflow-hidden shadow hover:shadow-md transition h-56 flex items-center"
          style={{
            backgroundImage: `url(${deal.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Text Content */}
          <div className="relative z-10 text-left px-6">
            <p className="text-orange-400 text-xs font-semibold mb-2">
              {deal.label}
            </p>
            <h3 className="text-lg font-bold text-black leading-snug mb-1">
              {deal.title}
            </h3>
            <p className="text-gray-500 text-sm mb-3">{deal.subtitle}</p>
            <button className="bg-white border border-gray-300 rounded-xl px-4 py-2 text-sm font-medium hover:bg-gray-100">
              Shop Now →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewDeals;
