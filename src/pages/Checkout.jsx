import React from "react";
import CouponBar from "../components/CouponBar";
import BillingDetails from "../components/BillingDetails";
import OrderSummary from "../components/OrderSummary";

export default function Checkout() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-6">
      {/* 🔹 Full-Width Coupon Bar */}
      <div className="w-full">
        <CouponBar />
      </div>

      {/* 🔹 Two-column layout: Billing + Order Summary */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* LEFT SECTION - Billing Details */}
        <div className="lg:col-span-2 space-y-6">
          <BillingDetails />
        </div>

        {/* RIGHT SECTION - Order Summary */}
        <OrderSummary />
      </div>
    </div>
  );
}
