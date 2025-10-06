import React from "react";
import promoImage from "../assets/promo-banner.jpg";

const PromoBanner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={promoImage}
        alt="Promo"
        className="h-100 w-[100%] object-cover mx-auto"
      />

      <div className="absolute top-8 left-0 right-0 p-6 flex flex-col justify-between text-white">
        <div>
          <p className="text-green-700 text-sm font-semibold mb-2">
            Weekend Discount
          </p>
          <h2 className="text-4xl text-brand font-bold leading-snug mb-3">
            Get the best quality <br /> products at the lowest <br />
            prices
          </h2>
          <p className="text-black text-xl mb-4">
            We have prepared special discounts for you on grocery <br />
            products. Don’t miss these opportunities…
          </p>
        </div>

        <div className="mt-6">
          <div className="flex items-center space-x-4">
            <button className="bg-brand-purple text-white px-4 py-2 rounded-md hover:bg-purple-800">
              Shop Now
            </button>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="text-red-600 text-xl font-bold">$27.99</span>
                <span className="text-black line-through">$56.67</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Don’t miss this limited time offer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-3 bg-white rounded-full px-4 py-2">
          <span className="w-3 h-3 bg-purple-700 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
