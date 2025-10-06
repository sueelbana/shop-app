import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-2 gap-6 border-b">
        <div>
          <h2 className="text-lg font-semibold">
            Join our newsletter for £10 offs
          </h2>
          <p className="text-sm mt-1">
            Register now to get latest updates on promotions & coupons. Don’t
            worry, we won’t spam!
          </p>
        </div>
        <form className="flex w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button
            type="submit"
            className="bg-brand-purple text-white px-5 rounded-r-md"
          >
            SEND
          </button>
        </form>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-5 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-3">Do You Need Help ?</h3>
          <p className="mb-2">
            Aliquam vitae nisi et nisl tincidunt posuere. Nisi ante tristique
            nisl, vitae posuere nisl.
          </p>
          <p className="font-semibold">0 800 300-353</p>
          <p className="mt-1">info@example.com</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Make Money with Us</h3>
          <ul className="space-y-2">
            <li>Sell on Origin</li>
            <li>Sell Your Services on Origin</li>
            <li>Sell on Origin Business</li>
            <li>Become an Origin Partner</li>
            <li>Advertise Your Products</li>
            <li>See all Plans & Pricing</li>
            <li>Become an Origin Vendor</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Let Us Help You</h3>
          <ul className="space-y-2">
            <li>Accessibility Statement</li>
            <li>Your Orders</li>
            <li>Returns & Replacements</li>
            <li>Shipping Rates & Policies</li>
            <li>Refunds & Returns Policy</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Cookie Settings</li>
            <li>Help Center</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Get to Know Us</h3>
          <ul className="space-y-2">
            <li>Careers for Origin</li>
            <li>About Origin</li>
            <li>Investor Relations</li>
            <li>Origin Devices</li>
            <li>Customer Reviews</li>
            <li>Social Responsibility</li>
            <li>Store Locations</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Download our app</h3>
          <div className="space-y-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-36"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="w-36"
            />
          </div>
          <div className="flex gap-4 mt-4 text-gray-600 text-lg">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 border-t text-sm text-gray-600">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p>
            Copyright © 2025. All rights reserved. Powered by Blackfire Themes.
          </p>
          <div className="flex gap-3">
            <img
              src="https://www.logo.wine/a/logo/Visa_Inc./Visa_Inc.-Logo.wine.svg"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://www.logo.wine/a/logo/PayPal/PayPal-Logo.wine.svg"
              alt="PayPal"
              className="h-6"
            />
            <img
              src="https://www.logo.wine/a/logo/Skrill/Skrill-Logo.wine.svg"
              alt="Skrill"
              className="h-6"
            />
            <img
              src="https://www.logo.wine/a/logo/Klarna/Klarna-Logo.wine.svg"
              alt="Klarna"
              className="h-6"
            />
          </div>
          <div className="flex gap-4">
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Order Tracking</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
