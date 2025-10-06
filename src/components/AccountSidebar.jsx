import React from "react";
import { FaUser, FaExchangeAlt } from "react-icons/fa";

export default function AccountSidebar() {
  return (
    <aside className="w-full md:w-1/4 p-6">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
          <FaUser className="text-gray-600 text-2xl" />
        </div>
        <div className="text-left">
          <p className="text-gray-500 text-sm">Welcome back,</p>
          <p className="font-semibold text-black">name@gmail.com</p>
        </div>
      </div>

      <div className="border border-gray-200 rounded-md">
        <ul className="divide-y divide-gray-200 text-sm text-black text-left">
          <li className="py-2 px-4 hover:text-purple-600 cursor-pointer">Dashboard</li>
          <li className="py-2 px-4 hover:text-purple-600 cursor-pointer">Orders</li>
          <li className="py-2 px-4 hover:text-purple-600 cursor-pointer">Downloads</li>
          <li className="py-2 px-4 hover:text-purple-600 cursor-pointer">Addresses</li>
          <li className="py-2 px-4 hover:text-purple-600 cursor-pointer">Account details</li>
          <li className="py-2 px-4 hover:text-purple-600 cursor-pointer">Wishlist</li>
          <li className="py-2 px-4 hover:text-purple-600 cursor-pointer flex items-center gap-2">
            <FaExchangeAlt className="text-gray-500" /> Compare
          </li>
          <li className="py-2 px-4 text-black cursor-pointer">Log out</li>
        </ul>
      </div>
    </aside>
  );
}
