import React from "react";
import paymentIcon from "../assets/icons/payment.jpg";
import salesIcon from "../assets/icons/sales.jpg";
import qualityIcon from "../assets/icons/quality.jpg";
import deliveryIcon from "../assets/icons/delivery.jpg";

const features = [
  {
    icon: paymentIcon,
    title: "Payment only online",
    description:
      "Tragisfremt betende design. Mobile checkout. Ylig kartforrep.",
  },
  {
    icon: salesIcon,
    title: "New stocks and sales",
    description:
      "Tragisfremt betende design. Mobile checkout. Ylig kartforrep.",
  },
  {
    icon: qualityIcon,
    title: "Quality assurance",
    description:
      "Tragisfremt betende design. Mobile checkout. Ylig kartforrep.",
  },
  {
    icon: deliveryIcon,
    title: "Delivery from 1 hour",
    description:
      "Tragisfremt betende design. Mobile checkout. Ylig kartforrep.",
  },
];

const FeatureHighlights = () => {
  return (
    <div className="bg-white py-8 px-6 grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-200">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start space-x-4">
          <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
          <div>
            <h3 className="font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureHighlights;
