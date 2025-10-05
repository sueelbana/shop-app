import React, { useState } from "react";
import blogImage1 from "../assets/blog.jpg";
import blogImage2 from "../assets/b2.jpg";
import blogImage3 from "../assets/b3.jpg";
import BlogPostList from "../components/BlogPostList";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // Example: change based on your posts

  const posts = [
    {
      id: 1,
      image: blogImage1,
      title: "How grocers are approaching delivery as the market evolves",
      description:
        "Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba, och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon sper",
    },
    {
      id: 2,
      image: blogImage2,
      title: "The Friday Checkout: Food insecurity keeps retailers off balance",
      description:
        "Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba, och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon sper",
    },
    {
      id: 3,
      image: blogImage3,
      title:
        "Consumers want grocers to use AI to help them save money — Dunnhumby",
      description:
        "Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba, och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon sper",
    },
  ];

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8">
        {/* Main Blog Content */}
        <div className="w-full md:w-2/3 space-y-10">
          {posts.map((post) => (
            <div key={post.id} className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 object-cover rounded-md"
              />

              <h1 className="text-2xl font-bold text-gray-900 mt-4">
                {post.title}
              </h1>

              {/* Publication Info */}
              <p className="text-sm text-gray-500 mt-2">
                November 3, 2023 - Klbtheme, store, themeforest
              </p>

              <p className="text-gray-700 mt-4">
                {post.description}
              </p>

              <button className="mt-5 px-5 py-2 bg-brand-purple text-white rounded-md hover:bg-purple-700 transition">
                Read More
              </button>
            </div>
          ))}

          {/* Pagination Section */}
          <div className="flex justify-center items-center gap-2 mt-10">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-3 py-1 text-gray-600 hover:text-purple-600 transition"
            >
              &lt;
            </button>

            {[1, 2].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-md border ${
                  currentPage === page
                    ? "bg-brand-purple text-white"
                    : "bg-gray-100 text-gray-800"
                } hover:bg-purple-600 hover:text-white transition`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-3 py-1 text-gray-600 hover:text-purple-600 transition"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="w-full md:w-1/3 mt-10 md:mt-0">
          <BlogPostList />
        </div>
      </div>
    </div>
  );
};

export default Blog;
