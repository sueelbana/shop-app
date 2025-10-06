import React from "react";
import AccountSidebar from "../components/AccountSidebar";

export default function VendorAccount() {
  return (
    <div className="min-h-screen  py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        <AccountSidebar />

        <section className="flex-1 p-6">
          <h2 className="text-xl font-semibold mb-6">
            Update account to Vendor
          </h2>

          <form className="space-y-5 max-w-2xl">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                First Name *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Shop Name *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Shop URL *
              </label>
              <input
                type="text"
                defaultValue="shaweonec2dfgf@gmail.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Phone Number *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600"
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-900">
              <input type="checkbox" />
              <p>
                I have read and agree to the{" "}
                <a href="#" className="text-purple-600 underline">
                  Terms & Conditions
                </a>
                .
              </p>
            </div>

            <button
              type="submit"
              className="border text-black font-medium py-2 px-6 rounded-md hover:bg-purple-600 hover:text-white transition"
            >
              Become a Vendor
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
