import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import ProductFilter from "./pages/ProductFilter";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Vendor from "./pages/Vendor";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/home-2" element={<Home2 />} />
            <Route path="/home-3" element={<Home3 />} />
            <Route path="/filter" element={<ProductFilter />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/vendor" element={<Vendor />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
