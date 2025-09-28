import React from "react";
import { 
  IoGridOutline, 
  IoFishOutline, 
  IoIceCreamOutline, 
  IoBeerOutline, 
  IoHeartOutline 
} from "react-icons/io5";
import { FaAppleAlt, FaBreadSlice, FaCheese, FaSnowflake, FaCookieBite, FaShoppingBasket, FaHome, FaBaby } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";

const categories = [
  { name: "All Categories", icon: <IoGridOutline /> },
  { name: "Fruits & Vegetables", icon: <FaAppleAlt /> },
  { name: "Meats & Seafood", icon: <IoFishOutline /> },
  { name: "Breakfast & Dairy", icon: <FaCheese /> },
  { name: "Breads & Bakery", icon: <FaBreadSlice /> },
  { name: "Beverages", icon: <IoBeerOutline /> },
  { name: "Frozen Foods", icon: <FaSnowflake /> },
  { name: "Biscuits & Snacks", icon: <FaCookieBite /> },
  { name: "Grocery & Staples", icon: <FaShoppingBasket /> },
  { name: "Household Needs", icon: <FaHome /> },
  { name: "Healthcare", icon: <MdLocalHospital /> },
  { name: "Baby & Pregnancy", icon: <FaBaby /> },
];

const LeftSidebar = () => {
  return (
    <aside className="w-64 bg-white border rounded-lg shadow-sm">
      <ul className="divide-y">
        {categories.map((cat, index) => (
          <li key={index} className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50">
            <div className="flex items-center space-x-3 text-gray-700">
              <span className="text-lg">{cat.icon}</span>
              <span className="font-medium">{cat.name}</span>
            </div>
            <span className="text-gray-400">{">"}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSidebar;
