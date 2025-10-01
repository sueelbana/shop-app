import React from "react";
import { Link } from "react-router-dom";
import { 
  IoGridOutline, 
  IoFishOutline, 
  IoIceCreamOutline, 
  IoBeerOutline, 
} from "react-icons/io5";
import { FaAppleAlt, FaBreadSlice, FaCheese, FaSnowflake, FaCookieBite, FaShoppingBasket, FaHome, FaBaby } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";

const categories = [
  { name: "All Categories", icon: <IoGridOutline />, path: "/" },
  { name: "Fruits & Vegetables", icon: <FaAppleAlt />, path: "/fruits-vegetables" },
  { name: "Meats & Seafood", icon: <IoFishOutline />, path: "/meats-seafood" },
  { name: "Breakfast & Dairy", icon: <FaCheese />, path: "/breakfast-dairy" },
  { name: "Breads & Bakery", icon: <FaBreadSlice />, path: "/breads-bakery" },
  { name: "Beverages", icon: <IoBeerOutline />, path: "/beverages" },
  { name: "Frozen Foods", icon: <FaSnowflake />, path: "/frozen-foods" },
  { name: "Biscuits & Snacks", icon: <FaCookieBite />, path: "/snacks" },
  { name: "Grocery & Staples", icon: <FaShoppingBasket />, path: "/grocery" },
  { name: "Household Needs", icon: <FaHome />, path: "/household" },
  { name: "Healthcare", icon: <MdLocalHospital />, path: "/healthcare" },
  { name: "Baby & Pregnancy", icon: <FaBaby />, path: "/baby" },
];

const LeftSidebar = () => {
  return (
    <aside className="w-80 bg-white border rounded-lg shadow-sm">
      <ul className="divide-y">
        {categories.map((cat, index) => (
          <Link key={index} to={cat.path}>
            <li className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50">
              <div className="flex items-center space-x-3 text-gray-700">
                <span className="text-lg">{cat.icon}</span>
                <span className="font-medium">{cat.name}</span>
              </div>
              <span className="text-gray-400">{">"}</span>
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSidebar;
