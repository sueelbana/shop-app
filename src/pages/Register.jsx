import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-16 px-4">
      <div className="max-w-md w-full">
        {/* Header with Login & Register Tabs */}
        <div className="text-center mb-8">
          <div className="flex justify-center space-x-6">
            <Link
              to="/login"
              className="text-2xl font-semibold text-gray-400 hover:text-purple-600 transition"
            >
              Login
            </Link>
            <h1 className="text-2xl font-semibold text-gray-900 border-b-2 border-purple-600 pb-1">
              Register
            </h1>
          </div>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            There are many advantages to creating an account: the payment
            process is faster, shipment tracking is possible, and much more.
          </p>
        </div>

        {/* Registration Form */}
        <form className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Username *
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Email address *
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Password *
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600"
              required
            />
          </div>

          {/* Customer/Vendor Radio Buttons */}
          <div className="flex items-center space-x-6 text-sm text-gray-700 mt-3">
            <label className="flex items-center space-x-2">
              <input type="radio" name="role" defaultChecked />
              <span>I am a customer</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="role" />
              <span>I am a vendor</span>
            </label>
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-gray-500 mt-3 leading-relaxed">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <Link to="/privacy" className="text-purple-600 hover:underline">
              privacy policy
            </Link>
            .
          </p>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-brand-purple text-white font-medium py-2 rounded-md mt-4"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
