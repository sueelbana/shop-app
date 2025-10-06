import React from "react";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";
import news4 from "../assets/news4.jpg";

const newsPosts = [
  {
    id: 1,
    title: "How grocers are approaching delivery as the market evolves",
    description:
      "Bilmästvik treskade i nibed den mobilinsbruk deren lyn rönning oick heterokstisk iri ulfran. Fälass",
    author: "sinan",
    date: "3 Nov 2023",
    image: news1,
  },
  {
    id: 2,
    title: "The Friday Checkout: Food insecurity keeps retailers off balance",
    description:
      "Bilmästvik treskade i nibed den mobilinsbruk deren lyn rönning oick heterokstisk iri ulfran. Fälass",
    author: "sinan",
    date: "3 Nov 2023",
    image: news2,
  },
  {
    id: 3,
    title: "Consumer want grocer to use AI to help them save money Dunnhumby",
    description:
      "Bilmästvik treskade i nibed den mobilinsbruk deren lyn rönning oick heterokstisk iri ulfran. Fälass",
    author: "sinan",
    date: "3 Nov 2023",
    image: news3,
  },
  {
    id: 4,
    title:
      "Order up! How grocers are replicating the restaurant experience in retail",
    description:
      "Bilmästvik treskade i nibed den mobilinsbruk deren lyn rönning oick heterokstisk iri ulfran. Fälass",
    author: "sinan",
    date: "3 Nov 2023",
    image: news4,
  },
];

const NewsSection = () => {
  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          Our News{" "}
          <span className="text-gray-500 font-normal text-sm">
            Some of the new posts this week
          </span>
        </h2>
        <button className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-100 transition">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {newsPosts.map((post) => (
          <div
            key={post.id}
            className="hover:shadow-md transition overflow-hidden"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-46 object-cover"
              />
              <span className="absolute top-3 left-3 bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded">
                {post.category}
              </span>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2">
                {post.title}
              </h3>
              <p className="text-gray-500 text-xs mb-3">{post.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>by {post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
