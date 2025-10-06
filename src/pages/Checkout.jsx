import React from "react";
import CouponBar from "../components/CouponBar";
import BillingDetails from "../components/BillingDetails";
import OrderSummary from "../components/OrderSummary";

export default function Checkout() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-6">
      <div className="w-full">
        <CouponBar />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <BillingDetails />
        </div>

        <OrderSummary />
      </div>
    </div>
  );
}
