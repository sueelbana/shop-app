import React from "react";
import { FaStar } from "react-icons/fa";
import { Heart } from "lucide-react";
import bannerImg from "../assets/featured-banner.jpg";
import juice from "../assets/apple.jpg";
import orangeJuice from "../assets/orange.jpg";
import vitamin from "../assets/prod3.jpg";
import rootBeer from "../assets/beer.jpg";

const products = [
  {
    id: 1,
    discount: "25%",
    name: "90 Percent Apple Juice – 64 fl oz Bottle",
    price: 0.5,
    oldPrice: 1.0,
    rating: 4,
    image: juice,
  },
  {
    id: 2,
    discount: "35%",
    name: "Simply Orange Pulp Free Juice – 52 fl oz",
    price: 2.45,
    oldPrice: 3.8,
    rating: 5,
    image: orangeJuice,
  },
  {
    id: 3,
    discount: "40%",
    name: "Vitaminwater zero sugar squeezed 16.9oz 6 Pack",
    price: 4.99,
    oldPrice: 8.0,
    rating: 4,
    image: vitamin,
  },
  {
    id: 4,
    discount: "15%",
    name: "A&W Caffeine-Free, Low Sodium Root Beer 2L",
    price: 9.5,
    oldPrice: 12.0,
    rating: 5,
    image: rootBeer,
  },
];

const SmartStore = () => {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold">Featured Products</h2>
          <p className="text-gray-500 text-sm">
            Do not miss the current offers till the end of month.
          </p>
        </div>
        <button className="text-sm font-medium text-gray-600 hover:text-black">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 border rounded-lg overflow-hidden divide-x">
        <div
          className="relative bg-orange-50 p-6 flex flex-col justify-between overflow-hidden"
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10">
            <p className="text-orange-500 text-xs font-semibold mb-2">
              Only This Week
            </p>
            <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3">
              A smart store for <br /> every people
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Feed your family the best.
            </p>
            <button className="bg-white text-black rounded-md px-4 py-2 text-sm font-medium">
              Shop Now →
            </button>
          </div>
        </div>

        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-white relative hover:shadow-md transition"
          >
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
              {product.discount}
            </span>

            <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
              <Heart size={18} />
            </button>

            <img
              src={product.image}
              alt={product.name}
              className="h-32 w-full object-contain mb-3"
            />
            <div className="flex justify-end mt-2">
              <button className="bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-purple-700 transition">
                +
              </button>
            </div>
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={`text-yellow-400 ${
                    i < product.rating ? "" : "opacity-30"
                  }`}
                  size={14}
                />
              ))}
            </div>

            <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
              {product.name}
            </h3>

            <div className="flex items-center gap-2">
              <span className="text-red-600 font-bold">${product.price}</span>
              <span className="text-black line-through text-sm">
                ${product.oldPrice}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartStore;
