import React from "react";
import { FaTag } from "react-icons/fa";

const CouponBar = () => {
  return (
    <div className="border bg-purple-50 rounded-md px-4 py-3 flex items-center gap-2 text-sm text-black">
      <FaTag className="text-red-500" />
      <span>
        Have a coupon?{" "}
        <button className="text-black font-medium hover:underline">
          Click here to enter your code
        </button>
      </span>
    </div>
  );
};

export default CouponBar;
