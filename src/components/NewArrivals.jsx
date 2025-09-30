import React from "react";
import { ShoppingCart } from "lucide-react";

// Product images
import appleJuice from "../assets/apple.jpg";
import orangeJuice from "../assets/orange.jpg";
import pizza2 from "../assets/pizza2.jpg";
import melon from "../assets/melon.jpg";
import toiletPaper from "../assets/toilet.jpg";

// Banner images
import alpro from "../assets/alpro.jpg";
import meat from "../assets/meat.jpg";
import oatmilk from "../assets/oatmilk.jpg";

const products = [
  {
    id: 1,
    img: appleJuice,
    discount: "70%",
    title: "100 Percent Apple Juice – 64 fl oz Bottle",
    price: "$0.50",
    oldPrice: "$1.98",
  },
  {
    id: 2,
    discount: "11%",
    title: "Great Value Rising Crust Frozen Pizza, Supreme",
    price: "$8.99",
    oldPrice: "$9.98",
  },
  {
    id: 3,
    img: orangeJuice,
    discount: "61%",
    title: "Simply Orange Pulp Free Juice – 52 fl oz",
    price: "$2.45",
    oldPrice: "$6.28",
  },
  {
    id: 4,
    img: pizza2,
    discount: "21%",
    title: "California Pizza Kitchen Thin Crust Margarita",
    price: "$11.77",
    oldPrice: "$14.77",
  },
  {
    id: 5,
    img: melon,
    discount: "50%",
    title: "Cantaloupe Melon Fresh Organic Cut",
    price: "$1.25",
    oldPrice: "$2.98",
  },
  {
    id: 6,
    img: toiletPaper,
    discount: "10%",
    title: "Angel Soft Toilet Paper, 9 Mega Rolls",
    price: "$14.12",
    oldPrice: "$15.72",
  },
];

const banners = [
  {
    id: 1,
    title: "Provides you experienced quality products",
    subtitle: "Feed your family the best",
  },
  {
    id: 2,
    title: "Shopping with us for better quality and the best price",
    subtitle: "Only this week. Don’t miss...",
    img: alpro,
  },
  {
    id: 3,
    title: "Get the best quality products at the lowest prices",
    subtitle: "Different grocery store",
    img: meat,
  },
  {
    id: 4,
    title: "Where you get your all favorite brands under one roof",
    subtitle: "Only this week. Don’t miss...",
    img: oatmilk,
  },
];


export default function NewArrivals() {
  return (
    <section className="px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">New Arrivals</h2>
          <p className="text-gray-500 text-sm">
            Don’t miss this opportunity at a special discount just for this
            week.
          </p>
        </div>
        <button className="text-purple-700 font-medium hover:underline">
          View All
        </button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >
            {/* Discount Badge */}
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}
            </span>

            {/* Image */}
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-28 object-contain my-3"
            />

            {/* Title */}
            <h3 className="text-sm font-medium text-gray-700 line-clamp-2">
              {product.title}
            </h3>

            {/* Prices */}
            <div className="flex items-center space-x-2 my-2">
              <span className="text-red-600 font-bold">{product.price}</span>
              <span className="line-through text-gray-400 text-sm">
                {product.oldPrice}
              </span>
            </div>

            {/* Add to Cart */}
            <button className="w-full border border-gray-300 rounded-full py-1 flex items-center justify-center space-x-2 text-sm hover:bg-purple-700 hover:text-white transition">
              <ShoppingCart size={16} />
              <span>Add to cart</span>
            </button>
          </div>
        ))}
      </div>

      {/* Banners */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="relative rounded-lg overflow-hidden h-96 flex items-start justify-start p-6 text-black"
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
              <h3 className="text-lg font-bold">{banner.title}</h3>
              <p className="text-sm text-gray-500">{banner.subtitle}</p>
              <button className="mt-3 text-sm font-semibold bg-white bold px-4 py-2 border border-gray-400 text-black rounded-full">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
