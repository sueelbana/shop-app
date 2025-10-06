import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // You can add authentication logic here later
    // After login success, redirect to Vendor page:
    navigate("/vendor-account");
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full">
        {/* Header with Login & Register Tabs */}
        <div className="text-center mb-8">
          <div className="flex justify-center space-x-6">
            <h1 className="text-2xl font-semibold text-gray-900 border-b-2 border-purple-600 pb-1">
              Login
            </h1>
            <Link
              to="/register"
              className="text-2xl font-semibold text-gray-400 hover:text-purple-600 transition"
            >
              Register
            </Link>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            If you have an account, sign in with your username or email address.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Username or email address *
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Password *</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-purple-600 hover:underline">
              Lost your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-brand-purple hover:bg-purple-700 text-white font-medium py-2 rounded-md"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
