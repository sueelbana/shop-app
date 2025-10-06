import React from "react";
import { useNavigate } from "react-router-dom";
import notFoundImg from "../assets/404.jpg";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 px-6">
      <div className="flex flex-col items-center">
        <img
          src={notFoundImg}
          alt="404 Illustration"
          className="w-80 md:w-[500px] mb-6"
        />

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mt-6">
          Page not found
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mt-2 text-center max-w-md">
          The page you want to go to is not currently available
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="bg-brand-purple hover:bg-purple-700 text-white px-6 py-2 rounded-md font-medium transition"
          >
            Home Page
          </button>
          <button
            onClick={() => navigate(-1)}
            className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-2 rounded-md font-medium text-gray-800 dark:text-gray-300 transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
