import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Products from "./Products/components/products";
import ProductDetails from "./Products/components/ProductDetail";
import CartData from "./Cart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route path="/product/details" element={<ProductDetails />} />
      <Route path="/cart" element={<CartData />} />
      <Route path="/home" element={<Products />} />
    </Routes>
  );
};

const View = () => {
  return <AllRoutes />;
};
export default View;
