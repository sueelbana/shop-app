import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";

const BlogPostList = () => {
  const posts = [
    {
      id: 1,
      img: blog1,
      title: "How grocers are approaching delivery as the market evolves",
      date: "November 3, 2023",
    },
    {
      id: 2,
      img: blog2,
      title:
        "The Friday Checkout: Food insecurity keeps retailers off balance",
      date: "November 3, 2023",
    },
    {
      id: 3,
      img: blog3,
      title:
        "Consumer want grocer to use AI to help them save money Dunnnhumby",
      date: "November 3, 2023",
    },
    {
      id: 4,
      img: blog4,
      title:
        "Order up! How grocers are replicating the restaurant experience in retail",
      date: "November 3, 2023",
    },
  ];

  return (
    <aside className="w-full md:w-80 p-4 space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Blog Post List</h2>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="flex items-center gap-3">
              <img
                src={post.img}
                alt={post.title}
                className="w-14 h-14 object-cover rounded-md"
              />
              <div>
                <h3 className="text-sm font-medium leading-snug hover:text-blue-600 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-4 border-gray-200" />

      <div>
        <h2 className="text-lg font-semibold mb-4">Social Media Widget</h2>
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
            <FaFacebookF /> Facebook
          </button>
          <button className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-md">
            <FaTwitter /> Twitter
          </button>
          <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md">
            <FaInstagram /> Instagram
          </button>
          <button className="flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-md">
            <FaLinkedinIn /> LinkedIn
          </button>
        </div>
      </div>
    </aside>
  );
};

export default BlogPostList;
