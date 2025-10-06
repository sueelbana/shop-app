import React, { useState } from "react";

const Description = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full mt-10">
      <div className="flex space-x-8 border-b border-gray-300 w-full">
        <button
          className={`py-3 text-base font-medium ${
            activeTab === "description"
              ? "text-gray-900 border-b-2 border-black"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`py-3 text-base font-medium ${
            activeTab === "reviews"
              ? "text-gray-900 border-b-2 border-black"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (2)
        </button>
      </div>

      <div className="mt-6 w-full text-gray-700 text-sm leading-relaxed">
        {activeTab === "description" && (
          <div className="space-y-4 w-full">
            <p>
              Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
              Proin vitae magna in dui finibus malesuada at et nulla. Morbi elit
              ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
              fermentum lacus nibh, at sodales leo maximus a. Nullam ultricies
              sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet
              est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan
              tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim
              a tortor.
            </p>
            <p>
              Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat
              auctor, eleifend nunc a, lobortis neque. Praesent aliquam
              dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet,
              maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet
              eros at, ultricies cursus ipsum. Sed consequat luctus ligula.
              Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu
              pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in
              vestibulum vulputate, lorem orci convallis quam, sit amet
              consequat nulla felis pharetra lacus. Duis semper erat mauris, sed
              egestas purus commodo vel.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4 w-full">
            <div>
              <p className="font-semibold text-gray-800">Sarah M.</p>
              <p className="text-gray-600 text-sm">
                Great quality and fast delivery! Will definitely order again.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">James L.</p>
              <p className="text-gray-600 text-sm">
                Loved the product, but packaging could be improved a bit.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Description;
