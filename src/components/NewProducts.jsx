import React from "react";
import appleJuiceImg from "../assets/apple.jpg";
import pizzaImg from "../assets/rising.jpg";
import orangeJuiceImg from "../assets/orange.jpg";
import cpkPizzaImg from "../assets/cpk.jpg";
import melonImg from "../assets/melon.jpg";
import toiletPaperImg from "../assets/toilet.jpg";

export default function NewProducts() {
  const products = [
    {
      id: 1,
      name: "100 Percent Apple Juice - 64 fl oz Bottle",
      img: appleJuiceImg,
      discount: 75,
      price: 0.5,
      oldPrice: 1.98,
      stock: 23,
    },
    {
      id: 2,
      name: "Great Value Rising Crust Frozen Pizza, Supreme",
      img: pizzaImg,
      discount: 11,
      price: 8.99,
      oldPrice: 9.98,
      stock: 18,
    },
    {
      id: 3,
      name: "Simply Orange Pulp Free Juice – 52 fl oz",
      img: orangeJuiceImg,
      discount: 41,
      price: 2.45,
      oldPrice: 4.13,
      stock: 27,
    },
    {
      id: 4,
      name: "California Pizza Kitchen Margherita, Crispy Thin Crust",
      img: cpkPizzaImg,
      discount: 21,
      price: 11.77,
      oldPrice: 14.77,
      stock: 19,
    },
    {
      id: 5,
      name: "Cantaloupe Melon Fresh Organic Cut",
      img: melonImg,
      discount: 54,
      price: 1.25,
      oldPrice: 2.88,
      stock: 16,
    },
    {
      id: 6,
      name: "Angel Soft Toilet Paper, 9 Mega Rolls",
      img: toiletPaperImg,
      discount: 18,
      price: 14.12,
      oldPrice: 17.12,
      stock: 32,
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            NEW PRODUCTS{" "}
            <span className="text-gray-500 font-normal text-sm">
              Some of the new products arriving this weeks{" "}
            </span>
          </h2>
          <button className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-100 transition">
            View All →
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative border rounded-lg p-4 bg-white hover:shadow-lg transition flex flex-col"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-32 mx-auto object-contain"
                />
                {/* Discount Badge */}
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -{product.discount}%
                </div>
                {/* Add Button (below image, right side) */}
                <div className="flex justify-end mt-2">
                  <button className="bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-purple-700 transition">
                    +
                  </button>
                </div>
              </div>

              {/* Product Name */}
              <h3 className="mt-3 text-sm font-medium line-clamp-2">
                {product.name}
              </h3>

              {/* Labels */}
              {product.label && (
                <span
                  className={`mt-2 inline-block text-xs font-semibold px-2 py-1 rounded ${
                    product.label === "Organic"
                      ? "bg-green-100 text-green-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {product.label}
                </span>
              )}

              {/* Price Section */}
              <div className="mt-3">
                <span className="text-red-600 font-bold text-lg">
                  ${product.price}
                </span>
                <span className="text-gray-400 line-through ml-2 text-sm">
                  ${product.oldPrice}
                </span>
              </div>

              {/* Stock Indicator */}
              {product.stock && (
                <div className="mt-3">
                  <p className="text-xs text-gray-500 mb-1">
                    This product is about to run out
                  </p>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 to-red-500"
                      style={{ width: `${Math.min(product.stock, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs mt-1">
                    available only:{" "}
                    <span className="font-bold text-black">
                      {product.stock}
                    </span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
