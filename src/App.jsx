import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import More from "./pages/More";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import CartPage from "./pages/Cart";       // ✅ new
import Checkout from "./pages/Checkout";   // ✅ new
import Success from "./pages/Success";     // ✅ new

import { CartProvider } from "./CartContext"; // ✅ import context

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<CartPage />} />      {/* ✅ */}
          <Route path="/checkout" element={<Checkout />} />  {/* ✅ */}
          <Route path="/success" element={<Success />} />    {/* ✅ */}
          <Route path="/more" element={<More />} />
          <Route path="/more/blog" element={<Blog />} /> 
          <Route path="/more/blog/:id" element={<BlogDetail />} /> 
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
