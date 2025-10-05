import React from "react";
import emptyCartImg from "../assets/empty1.jpg";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="w-full bg-white min-h-[80vh] flex flex-col items-center justify-center px-6 py-10">
      {/* 🧭 Breadcrumb */}
      <div className="w-full max-w-6xl text-sm text-gray-500 mb-8">
        <span>Home</span> <span className="mx-2">›</span>{" "}
        <span className="text-gray-700 font-medium">Cart</span>
      </div>

      {/* 🖼️ Empty Cart Image */}
      <img
        src={emptyCartImg}
        alt="Empty cart"
        className="w-[400px] md:w-[500px] lg:w-[600px] h-auto mb-8"
      />

      {/* 📦 Empty Message Box */}
      <div className="py-8 text-center max-w-lg w-full">
        <h2 className="text-lg border-2 border-gray-200 font-semibold text-red-500 mb-4">
          YOUR CART IS CURRENTLY EMPTY.
        </h2>
        </div>
        <div>
        <Link
          to="/shop"
          className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Return to shop
        </Link>
      </div>
    </div>
  );
}
