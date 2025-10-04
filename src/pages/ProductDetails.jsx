import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import {
  FaWhatsapp,
  FaHeart,
  FaShareAlt,
  FaBalanceScale,
} from "react-icons/fa";

// Product images
import bananaMain from "../assets/bananas.jpg";
import bananaThumb1 from "../assets/bananas.jpg";
import bananaThumb2 from "../assets/banana1.jpg";
import bananaThumb3 from "../assets/banana2.jpg";

// Components
import Description from "../components/Description";
import NewCategoryProducts from "../components/NewCategoryProducts";

const BananaProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [timeLeft, setTimeLeft] = useState(3600);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, "0");
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return { h, m, s };
  };

  const { h, m, s } = formatTime(timeLeft);

  return (
    <>
      {/* Product Details */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT - Product Image + Thumbnails */}
        <div>
          <div className="p-4 flex justify-center items-center">
            <img src={bananaMain} alt="Banana" className="h-64 object-contain" />
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <img
              src={bananaThumb1}
              alt="thumb1"
              className="w-20 h-20 object-contain border rounded-md cursor-pointer hover:border-green-500"
            />
            <img
              src={bananaThumb2}
              alt="thumb2"
              className="w-20 h-20 object-contain border rounded-md cursor-pointer hover:border-green-500"
            />
            <img
              src={bananaThumb3}
              alt="thumb3"
              className="w-20 h-20 object-contain border rounded-md cursor-pointer hover:border-green-500"
            />
          </div>
        </div>

        {/* RIGHT - Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">
            Marketside Fresh Organic Bananas, Bunch
          </h1>

          <div className="flex items-center gap-2 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < 3 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">3.00</span>
            <span className="text-sm text-gray-500">| SKU: </span>
            <span className="text-sm text-black">E7F96AHQ</span>
          </div>

          <p className="text-gray-600 mb-4">
            Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
            malesuada tincidunt. Class aptent taciti sociosqu ad litora
            torquent Vivamus adipiscing nisl ut dolor dignissim semper.
          </p>

          <div className="mb-4">
            <span className="text-red-600 font-bold text-xl">$0.89</span>
            <span className="line-through text-gray-500 ml-3">$1.89</span>
          </div>

          <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 mb-4">
            <FaWhatsapp /> Order on WhatsApp
          </button>

          <div className="flex flex-col bg-orange-100 sm:flex-row items-start sm:items-center gap-2 text-sm text-gray-600 mb-4">
            <span className="font-semibold text-orange-400"> Special Offer:</span>
            <div className="flex gap-2 font-mono text-lg text-red-600 px-3 py-1 rounded-md">
              <span>{h}</span>:<span>{m}</span>:<span>{s}</span>
            </div>
            <span className="text-gray-400">
              Remains till the end of the offer.
            </span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2 text-lg"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2 text-lg"
              >
                +
              </button>
            </div>

            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
              Add to cart
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
              Buy Now
            </button>
          </div>

          <div className="space-y-2 border rounded-md text-sm text-gray-600 mb-6 divide-y divide-gray-300">
            <div className="p-2">
              <p>
                <strong>Payment:</strong> Payment upon receipt of goods, Payment
                card in the department, Google Pay, Online card, 5% discount in
                case of payment.
              </p>
            </div>

            <div className="p-2">
              <p>
                <strong>Warranty:</strong> The Consumer Protection Act does not
                provide for the return of this product of proper quality.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-gray-600 text-sm">
            <button className="flex items-center gap-2 hover:text-black">
              <FaHeart /> Add to wishlist
            </button>
            <button className="flex items-center gap-2 hover:text-black">
              <FaShareAlt /> Share this Product
            </button>
            <button className="flex items-center gap-2 hover:text-black">
              <FaBalanceScale /> Compare
            </button>
          </div>
        </div>

        {/* Tabs (Description Section) */}
        <div className="col-span-2 mt-8">
          <Description />
        </div>

        {/* ✅ Related Products Section */}
        <div className="col-span-2 mt-8">
          <NewCategoryProducts />
        </div>
      </div>
    </>
  );
};

export default BananaProductDetail;
