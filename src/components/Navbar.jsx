import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, User, Search, MapPin } from "lucide-react";
import { IoChevronDownSharp } from "react-icons/io5";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-brand-purple text-white text-sm flex justify-center px-6 py-2">
        <div className="flex space-x-24 text-center">
          <span>
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order
            in.
          </span>
          <span>
            Until the end of the sale: <span className="font-bold">47</span>{" "}
            days <span className="font-bold">06</span> hours{" "}
            <span className="font-bold">55</span> minutes{" "}
            <span className="font-bold">51</span> sec
          </span>
        </div>
      </div>

      {/* Secondary Info Bar (below.JPG design) */}
      <div className="w-full border-b border-gray-200 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          {/* Left Links */}
          <div className="flex items-center space-x-6 text-gray-600">
            <a href="#" className="hover:text-brand-purple">
              About Us
            </a>
            <a href="#" className="hover:text-brand-purple">
              My Account
            </a>
            <a href="#" className="hover:text-brand-purple">
              Wishlist
            </a>

            {/* Divider + Delivery Text */}
            <span className="pl-6 ml-6 border-l border-gray-300 text-gray-500">
              We deliver to you every day from{" "}
              <span className="text-orange-500 font-semibold">
                7:00 to 23:00
              </span>
            </span>
          </div>

          {/* Right Options */}
          <div className="flex items-center space-x-6 text-gray-600">
            {/* Language Dropdown */}
            <div className="flex items-center space-x-1 cursor-pointer hover:text-brand-purple">
              <span>English</span>
              <span>▾</span>
            </div>
            {/* Currency Dropdown */}
            <div className="flex items-center space-x-1 cursor-pointer hover:text-brand-purple">
              <span>USD</span>
              <span>▾</span>
            </div>
            {/* Order Tracking */}
            <a href="#" className="hover:text-brand-purple">
              Order Tracking
            </a>
          </div>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="ShopStore logo" className="h-18 w-48" />
        </div>

        {/* Deliver To */}
        <div className="flex items-center space-x-2 text-gray-700">
          <MapPin size={20} className="text-brand-purple" />
          <span>
            Deliver to <span className="font-semibold">all</span>
          </span>
        </div>

        {/* Search */}
        <div className="flex w-1/2 border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search for products, categories or brands..."
            className="flex-grow px-4 py-2 outline-none"
          />
          <button className="bg-purple-700 px-4 flex items-center justify-center">
            <Search className="text-white" size={20} />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-gray-600">
          <Link
            to="/login"
            className="flex items-center space-x-1 hover:text-purple-700"
          >
            <User size={20} />
            <span>Sign in</span>
          </Link>

          <Link to="/wishlist" className="relative hover:text-purple-700">
            <Heart size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </Link>
          <Link to="/cart" className="relative hover:text-purple-700">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom Nav Links */}
      <nav className="px-6 py-3 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left Links */}
          <ul className="flex space-x-8 text-gray-700 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center space-x-1 hover:text-purple-700"
              >
                <span>Home</span>
                <IoChevronDownSharp className="text-xs" />
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="flex items-center space-x-1 hover:text-purple-700"
              >
                <span>Shop</span>
                <IoChevronDownSharp className="text-xs" />
              </Link>
            </li>
            <li>
              <Link
                to="/fruits"
                className="flex items-center space-x-1 hover:text-purple-700"
              >
                <span>Fruits & Vegetables</span>
              </Link>
            </li>
            <li>
              <Link
                to="/beverages"
                className="flex items-center space-x-1 hover:text-purple-700"
              >
                <span>Beverages</span>
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="flex items-center space-x-1 hover:text-purple-700"
              >
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center space-x-1 hover:text-purple-700"
              >
                <span>Contact</span>
              </Link>
            </li>
          </ul>

          {/* Right Links */}
          <ul className="flex space-x-8 text-gray-700 font-medium">
            <li>
              <Link
                to="/trending"
                className="flex items-center space-x-1 hover:text-purple-700"
              >
                <span>Trending Products</span>
                <IoChevronDownSharp className="text-xs" />
              </Link>
            </li>
            <li>
              <Link to="/sale" className="flex items-center space-x-2">
                <span className="text-gray-700">Almost Finished</span>
                <span className="bg-red-600 text-white px-2 py-0.5 rounded text-sm font-semibold">
                  SALE
                </span>
                <IoChevronDownSharp className="text-xs text-red-600" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
