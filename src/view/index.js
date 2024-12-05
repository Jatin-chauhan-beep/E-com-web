import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Products from "./Products/components/products";
import ProductDetails from "./Products/components/ProductDetail";
import CartData from "./Cart";
import OrderData from "./Order";
import CustomerOrders from "./Order/components/orderCard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route path="/product/details" element={<ProductDetails />} />
      <Route path="/cart" element={<CartData />} />
      <Route path="/Order" element={<OrderData />} />
      <Route path="/customer/order" element={<CustomerOrders />} />
      <Route path="/all/orders" element={<CustomerOrders />} />
      <Route path="/home" element={<Products />} />
    </Routes>
  );
};

const View = () => {
  return <AllRoutes />;
};
export default View;
