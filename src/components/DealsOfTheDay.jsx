import React from "react";
import { FaStar } from "react-icons/fa";
import { Heart } from "lucide-react";
import juice from "../assets/apple.jpg";
import beef from "../assets/beef2.jpg";
import pizza from "../assets/BigPizza.jpg";

const leftProducts = [
  {
    id: 1,
    discount: "25%",
    name: "100 Percent Apple Juice – 64 fl oz Bottle",
    price: 0.5,
    oldPrice: 1.0,
    image: juice,
    tag: "Organic",
    rating: 4,
  },
  {
    id: 2,
    discount: "14%",
    name: "USDA Choice Angus Beef T-Bone Steak – 0.70-1.50 lbs",
    price: 12.88,
    oldPrice: 14.88,
    image: beef,
    tag: "Cool Sale",
    rating: 4,
  },
];

const featuredProduct = {
  id: 3,
  discount: "10%",
  name: "Great Value Rising Crust Frozen Pizza, Supreme",
  price: 8.99,
  oldPrice: 9.99,
  rating: 4,
  reviews: 32,
  stock: 18,
  description:
    "Venenatis ultricies dictum sed dignissim semper. Nulla nunc tristique risus class aptent taciti sociosqu ad litora torquent himenaeos dis parturient.",
  image: pizza,
  tag: "Cool Sale",
  totalStock: 50, 
};

const DealsOfTheDay = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          Deals Of The Day{" "}
          <span className="text-gray-500 font-normal text-sm">
            The freshest greengrocer products are waiting for you{" "}
          </span>
        </h2>
        <button className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-100 transition">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 border rounded-md bg-white divide-y">
          {leftProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center p-4 relative hover:shadow-sm transition"
            >
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                {product.discount}
              </span>

              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-contain mr-4 flex-shrink-0"
              />

              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                  {product.name}
                </h3>
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

                <div className="flex items-center gap-2 text-sm mb-1">
                  <span className="text-red-600 font-bold">
                    ${product.price}
                  </span>
                  <span className="text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                </div>

                <button className="text-xs bg-white border border-purple-500 text-purple-500 rounded-lg px-2 py-1 hover:bg-gray-200">
                  Add to cart +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-2 border border-red-500 rounded-lg p-6 bg-white relative hover:shadow-md transition">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
            {featuredProduct.discount}
          </span>

          <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
            <Heart size={18} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src={featuredProduct.image}
              alt={featuredProduct.name}
              className="h-56 w-full object-contain"
            />

            <div>
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`text-yellow-400 ${
                      i < featuredProduct.rating ? "" : "opacity-30"
                    }`}
                    size={14}
                  />
                ))}
                <span className="ml-2 text-gray-500 text-sm">
                  ({featuredProduct.reviews})
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {featuredProduct.name}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-red-600 font-bold text-xl">
                  ${featuredProduct.price}
                </span>
                <span className="text-gray-400 line-through">
                  ${featuredProduct.oldPrice}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {featuredProduct.description}
              </p>

              <p className="text-sm text-gray-500 mb-1">
                This product is about to run out
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Available only:{" "}
                <span className="font-semibold">{featuredProduct.stock}</span>
              </p>

              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{
                    width: `${
                      ((featuredProduct.totalStock - featuredProduct.stock) /
                        featuredProduct.totalStock) *
                      100
                    }%`,
                  }}
                ></div>
              </div>

              <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default DealsOfTheDay;
