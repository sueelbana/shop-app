import React from "react";
import juiceImg from "../assets/apple.jpg";
import pizzaImg from "../assets/rising.jpg";
import risingPizzaImg from "../assets/orange.jpg";
import melonImg from "../assets/pizza2.jpg";
import orangeJuiceImg from "../assets/melon.jpg";
import paperTowelImg from "../assets/toilet.jpg";
import { ArrowRight, Heart, Plus, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "100 Percent Apple Juice – 64 fl oz Bottle",
    price: 0.58,
    oldPrice: 0.82,
    discount: "-30%",
    img: juiceImg,
    organic: true,
    rating: 5,
    description:
      "Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.",
    stock: 23,
  },
  {
    id: 2,
    name: "Great Value Rising Crust Pizza",
    price: 8.89,
    oldPrice: 9.65,
    discount: "-8%",
    img: pizzaImg,
    description:
      "Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.",
  },
  {
    id: 3,
    name: "California Pizza Kitchen Crispy Thin Crust",
    price: 11.77,
    oldPrice: 12.77,
    discount: "-9%",
    img: risingPizzaImg,
  },
  {
    id: 4,
    name: "Cantaloupe Melon Fresh Organic 1 pc",
    price: 1.25,
    oldPrice: 2.99,
    discount: "-58%",
    img: melonImg,
    rating: 4,
    description:
      "Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.",
    stock: 19,
  },
  {
    id: 5,
    name: "Simply Orange Pulp Free Juice – 59 fl oz",
    price: 2.45,
    oldPrice: 2.95,
    discount: "-16%",
    img: orangeJuiceImg,
    organic: true,
  },
  {
    id: 6,
    name: "Angel Soft Toilet Paper, 9 Mega Rolls",
    price: 11.12,
    oldPrice: 12.52,
    discount: "-11%",
    img: paperTowelImg,
  },
];

const ProductCard = ({ product, className = "" }) => (
  <div className={`p-4 relative ${className}`}>
    {/* Heart */}
    <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition">
      <Heart size={18} />
    </button>

    {/* Discount */}
    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
      {product.discount}
    </span>

    {/* Image */}
    <div className="flex items-center justify-center h-32 mb-2">
      <img
        src={product.img}
        alt={product.name}
        className="max-h-full object-contain"
      />
    </div>

    {/* Organic Badge */}
    {product.organic && (
      <div className="mb-2">
        <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
          Organic
        </span>
      </div>
    )}

    {/* Rating Stars */}
    {product.rating && (
      <div className="flex items-center gap-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < product.rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>
    )}

    {/* Name */}
    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-[40px]">
      {product.name}
    </h3>

    {/* Description */}
    {product.description && (
      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
        {product.description}
      </p>
    )}

    {/* Price */}
    <div className="mt-2 flex items-center space-x-2">
      <span className="text-red-600 font-bold">${product.price}</span>
      <span className="text-gray-400 text-sm line-through">
        ${product.oldPrice}
      </span>
    </div>

    {/* Add to Cart */}
    <button className="mt-4 w-full border border-gray-300 rounded-full py-1.5 px-3 flex items-center justify-center gap-2 text-sm hover:bg-purple-600 hover:text-white transition">
      <span>Add to cart</span>
      <Plus size={16} />
    </button>

    {/* Stock Indicator (below cart) */}
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
          <span className="font-bold text-black">{product.stock}</span>
        </p>
      </div>
    )}
  </div>
);

const EditorsPick = () => {
  return (
    <div className="px-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold text-black">Editor’s Pick</h2>
          <p className="text-gray-500 text-sm">
            New products with updated stocks.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-black border hover:bg-gray-100 transition">
          View All
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* White container with borders */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 divide-x">
          {/* Column 1: Apple */}
          <div>
            <ProductCard product={products[0]} />
          </div>

          {/* Column 2: Pizza → Orange */}
          <div>
            <ProductCard product={products[1]} className="border-b" />
            <ProductCard product={products[2]} />
          </div>

          {/* Column 3: Melon */}
          <div>
            <ProductCard product={products[3]} />
          </div>

          {/* Column 4: Simply Orange → Toilet */}
          <div>
            <ProductCard product={products[4]} className="border-b" />
            <ProductCard product={products[5]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
