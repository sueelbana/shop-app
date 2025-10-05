import React from "react";

const OrderSummary = () => {
  return (
    <div className="border border-gray-200 bg-purple-50 p-6 rounded-md">
      <h2 className="text-lg font-semibold mb-4">Your order</h2>

      {/* Table Header */}
      <div className="flex justify-between border-b pb-2 mb-2">
        <span className="font-medium">Product</span>
        <span className="font-medium">Subtotal</span>
      </div>

      {/* Example Items */}
      <div className="flex justify-between text-sm mb-2">
        <span>Marketside Fresh Organic Bananas, Bunch × 1</span>
        <span>$0.89</span>
      </div>
      <div className="flex justify-between text-sm mb-2">
        <span>Subtotal</span>
        <span>$0.89</span>
      </div>
      <div className="flex justify-between text-sm mb-2">
        <span>Shipping</span>
        <span>Local pickup</span>
      </div>

      {/* Total */}
      <div className="flex justify-between font-semibold text-base mt-4">
        <span>Total</span>
        <span>$15.89</span>
      </div>

      {/* Payment Options */}
      <div className="mt-6 space-y-3 text-sm text-black font-semibold">
        <label className="flex items-center gap-2">
          <input type="radio" name="payment" defaultChecked />
          Direct Bank Transfer
        </label>
        <p className="text-gray-500 ml-6">
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference.
        </p>

        <label className="flex items-center gap-2">
          <input type="radio" name="payment" />
          Check Payments
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" name="payment" />
          Cash On Delivery
        </label>
      </div>

      {/* Terms Agreement */}
      <div className="mt-6 flex items-start gap-2">
        <input type="checkbox" />
        <p className="text-sm text-gray-700">
          I have read and agree to the website terms and conditions *
        </p>
      </div>

      {/* Submit Button */}
      <button className="w-full mt-6 bg-brand-purple text-white py-2 rounded-md hover:bg-purple-700">
        Place order
      </button>
    </div>
  );
};

export default OrderSummary;
