import React from "react";

const PromoBanner = () => {
  return (
    <div className="flex w-full bg-white rounded-lg shadow-md overflow-hidden">
      {/* Left Text Box */}
      <div className="w-1/2 border border-blue-400 p-6 flex flex-col justify-between">
        <div>
          <p className="text-green-600 text-sm font-semibold mb-2">
            Weekend Discount
          </p>
          <h2 className="text-2xl font-bold text-purple-900 leading-snug mb-3">
            Get the best quality <br /> products at the lowest prices
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            We have prepared special discounts for you on grocery products.
            Don’t miss these opportunities…
          </p>
        </div>

        {/* CTA Button + Price */}
        <div className="flex items-center space-x-4">
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800">
            Shop Now
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-red-600 text-xl font-bold">$27.99</span>
            <span className="text-gray-400 line-through">$56.67</span>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          Don’t miss this limited time offer
        </p>
      </div>

      {/* Right Image */}
      <div className="w-1/2">
        <img
          src="/images/products-banner.png"
          alt="Promo"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default PromoBanner;
