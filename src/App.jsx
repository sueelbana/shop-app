import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home1 from "./pages/Home1";
import ProductFilter from "./pages/ProductFilter";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

import FruitsAndVegetables from "./pages/FruitsAndVegetables";
import Shop from "./pages/Shop";
import ShopListing from "./pages/ShopListing";
import VendorAccount from "./pages/VendorAccount";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop-listing" element={<ShopListing />} />

            <Route path="/filter" element={<ProductFilter />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/vendor-account" element={<VendorAccount />} />

            <Route
              path="/fruits-vegetables"
              element={<FruitsAndVegetables />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
