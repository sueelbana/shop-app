import React from "react";

export default function FilterSidebar() {
  return (
    <aside className="w-72 bg-white p-4 ">
      <div className="mb-6 border-b pb-6">
        <h3 className="text-lg font-semibold mb-3">Widget price filter</h3>
        <div className="flex items-center space-x-2 mb-2">
          <input
            type="number"
            placeholder="0"
            className="w-20 p-2 border rounded-md text-sm"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="30"
            className="w-20 p-2 border rounded-md text-sm"
          />
        </div>

        <input
          type="range"
          min="0"
          max="30"
          defaultValue="30"
          className="w-full accent-black"
        />

        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-900">Price: $0 — $30</span>
          <button className="px-3 py-1 bg-gray-200 rounded text-sm font-medium hover:bg-gray-300">
            Filter
          </button>
        </div>
      </div>

      <div className="mb-6 border-b pb-6">
        <h3 className="text-lg font-semibold mb-3">Product Categories</h3>
        <ul className="space-y-2 text-sm">
          {[
            "Fruits & Vegetables",
            "Baby & Pregnancy",
            "Beverages",
            "Meats & Seafood",
            "Biscuits & Snacks",
            "Breads & Bakery",
            "Breakfast & Dairy",
            "Frozen Foods",
            "Grocery & Staples",
            "Healthcare",
            "Household Needs",
          ].map((category, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 rounded"
                  defaultChecked={category === "Fruits & Vegetables"}
                />
                <span>{category}</span>
              </div>
              <span className="text-gray-500 font-bold">+</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 border-b pb-6">
        <h3 className="text-lg font-semibold mb-3">Filter by Color</h3>
        <label className="flex items-center text-sm">
          <span className="w-5 h-5 bg-green-500 rounded-full mr-2"></span>
          Green <span className="ml-1 text-gray-400">(1)</span>
        </label>
      </div>

      <div className="mb-6 border-b pb-6">
        <h3 className="text-lg font-semibold mb-3">Filter by Brands</h3>
        <label className="flex items-center text-sm">
          <input type="checkbox" className="mr-2" />
          Fresh <span className="ml-1 text-gray-400">(1)</span>
        </label>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Product Status</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            In Stock
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            On Sale
          </label>
        </div>
      </div>
    </aside>
  );
}
