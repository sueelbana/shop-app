import React from "react";

const BillingDetails = () => {
  return (
    <div className="space-y-6">
      {/* Add to Cart Offer */}
      <div className="border border-red-300 bg-red-50 text-red-600 p-4 rounded-md">
        Add <strong>$29.01</strong> to cart and get free shipping!
      </div>

      {/* Billing Details Form */}
      <div className=" p-6 rounded-md">
        <h2 className="text-lg font-semibold mb-4">Billing details</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <input
            type="text"
            placeholder="First name *"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            placeholder="Last name *"
            className="border border-gray-300 p-2 rounded"
          />

          {/* Company */}
          <input
            type="text"
            placeholder="Company name (optional)"
            className="border border-gray-300 p-2 rounded md:col-span-2"
          />

          {/* Country */}
          <select
            className="border border-gray-300 p-2 rounded md:col-span-2"
            defaultValue="United States (US)"
          >
            <option>United States (US)</option>
            <option>United Kingdom (UK)</option>
            <option>Egypt</option>
            <option>France</option>
          </select>

          {/* Address */}
          <input
            type="text"
            placeholder="Street address"
            className="border border-gray-300 p-2 rounded md:col-span-2"
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            className="border border-gray-300 p-2 rounded md:col-span-2"
          />

          {/* City, State, ZIP */}
          <input
            type="text"
            placeholder="Town / City"
            className="border border-gray-300 p-2 rounded md:col-span-2"
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 p-2 rounded md:col-span-2"
          />
          <input
            type="text"
            placeholder="ZIP Code"
            className="border border-gray-300 p-2 rounded md:col-span-2"
          />

          {/* Phone and Email */}
          <input
            type="text"
            placeholder="Phone"
            className="border border-gray-300 p-2 rounded md:col-span-2"
          />
          <input
            type="email"
            placeholder="Email address"
            className="border border-gray-300 p-2 rounded md:col-span-2"
          />

          {/* Checkboxes */}
          <div className="flex items-center gap-2 md:col-span-2">
            <input type="checkbox" id="create-account" />
            <label htmlFor="create-account" className="text-sm text-gray-700">
              Create an account?
            </label>
          </div>
          <div className="flex items-center gap-2 md:col-span-2">
            <input type="checkbox" id="ship-diff" />
            <label htmlFor="ship-diff" className="text-sm text-gray-700">
              Ship to a different address?
            </label>
          </div>

          {/* Notes */}
          <textarea
            placeholder="Order notes (optional)"
            className="border border-gray-300 p-2 rounded md:col-span-2 h-24"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default BillingDetails;
