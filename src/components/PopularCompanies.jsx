import React from "react";
import { FaStar } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import bannerImg from "../assets/banner.jpg"; // banner
import userImg from "../assets/user.jpg"; // profile image

const companies = [
  {
    name: "Machic",
    rating: 41,
    description: "Good quality product can only be found in good stores",
  },
  {
    name: "Blomwe",
    rating: 37,
    description: "All kinds of grocery products are available in our store.",
  },
  {
    name: "Bacola",
    rating: 35,
    description: "Our work can definitely support the local economy.",
  },
  {
    name: "Medibazar",
    rating: 30,
    description:
      "Save your time – save your money – shop from our grocery store.",
  },
];

const PopularCompanies = () => {
  return (
    <div className="mt-8">
      {/* Banner */}
      <div className="mb-6">
        <img
          src={bannerImg}
          alt="Top Banner"
          className="w-full rounded-lg object-cover"
        />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">Popular Companies</h2>
          <p className="text-gray-500 text-sm">
            Some of the new products arriving this weeks{" "}
          </p>
        </div>

        <button className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-black hover:bg-gray-100 transition">
          View All
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {companies.map((company, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition flex flex-col"
          >
            {/* Top: Image + Content */}
            <div className="flex items-start gap-4">
              <img
                src={userImg}
                alt={company.name}
                className="w-16 h-16 rounded object-cover"
              />

              <div className="flex flex-col">
                <h3 className="font-medium">{company.name}</h3>
                <span className="text-xs text-gray-400 mb-1">Featured</span>

                {/* Rating */}
                <div className="flex items-center">
                  <FaStar className="text-yellow-500 mr-1" />
                  <span className="font-medium">{company.rating}</span>
                </div>
              </div>
            </div>

            {/* Bottom: Description */}
            <p className="text-sm text-gray-600 mt-3">{company.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCompanies;
