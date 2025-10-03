import React from "react";
import userIcon from "../assets/user.jpg";
import offerBanner from "../assets/eggbanner.jpg";
import appleJuiceImg from "../assets/apple.jpg";
import melonImg from "../assets/melon.jpg";
import eggsImg from "../assets/product2.jpg";
import cheeseImg from "../assets/cream.jpg";
import silkImg from "../assets/bagel.jpg";

export default function New() {
  const products = [
    {
      id: 1,
      name: "100 Percent Apple Juice - 64 fl oz Bottle",
      img: appleJuiceImg,
      discount: 75,
      price: 0.5,
      oldPrice: 1.98,
      stock: "IN STOCK",
      label: "Organic",
    },
    {
      id: 2,
      name: "Cantaloupe Melon Fresh Organic Cut",
      img: melonImg,
      discount: 58,
      price: 1.25,
      oldPrice: 2.88,
      stock: "IN STOCK",
      label: "Organic",
    },
    {
      id: 3,
      name: "Vital Farms Pasture-Raised Grade A Large Eggs – 12ct",
      img: eggsImg,
      discount: 21,
      price: 3.99,
      oldPrice: 4.99,
      stock: "IN STOCK",
    },
    {
      id: 4,
      name: "Tillamook Medium Cheddar Cheese Loaf – 32oz",
      img: cheeseImg,
      discount: 13,
      price: 6.99,
      oldPrice: 7.99,
      stock: "IN STOCK",
    },
    {
      id: 5,
      name: "Silk Dairy Free, Gluten Free, Vanilla Almond Milk, 64 fl oz",
      img: silkImg,
      discount: 18,
      price: 4.6,
      oldPrice: 5.6,
      stock: "IN STOCK",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            New Arrivals{" "}
            <span className="text-gray-500 font-normal text-sm">
              Do not miss the current offers until the end of month.
            </span>
          </h2>
          <button className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-100 transition">
            View All →
          </button>
        </div>

        {/* Unified Container */}
        <div className="grid grid-cols-1 md:grid-cols-6 border rounded-lg overflow-hidden">
          {/* Left Side User Card */}
          <div className="col-span-2 p-4 border-r">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <img
                  src={userIcon}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">Machic</h3>
                <p className="text-yellow-500 text-sm">★★★★☆ 41</p>
              </div>
            </div>

            {/* Border above paragraph */}
            <p className="text-sm text-gray-600 mb-3 border-t pt-3">
              Good quality product can only be found in good stores
            </p>

            {/* Offer Image */}
            <div className="mt-2">
              <img
                src={offerBanner}
                alt="Special Offer"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Right Side Products */}
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-l border-t">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative flex flex-col p-4 border-r border-b"
              >
                {/* Discount Badge */}
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -{product.discount}%
                </div>

                {/* Product Image */}
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-36 object-contain mb-2"
                />

                {/* Label + Add Button */}
                <div className="flex items-center justify-between mb-2">
                  {product.label && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-green-100 text-green-600">
                      {product.label}
                    </span>
                  )}
                  <button className="bg-purple-600 text-white w-6 h-6 flex items-center justify-center rounded-full hover:bg-purple-700 transition text-sm">
                    +
                  </button>
                </div>

                {/* Name */}
                <h3 className="text-xs font-medium line-clamp-2 mb-1">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center mb-1">
                  <span className="text-red-600 font-bold text-sm">
                    ${product.price}
                  </span>
                  <span className="text-black line-through ml-1 text-xs">
                    ${product.oldPrice}
                  </span>
                </div>

                {/* Stock */}
                <p className="text-[10px] font-medium text-green-600">
                  {product.stock}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
