import React from "react";
import HomePage from "./components/homepage/HomePage.jsx";
import ProductDetails from "./components/productdetailpage/ProductDetail.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/header/Header.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
