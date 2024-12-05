import React, { useEffect } from "react";
import ProductCard from "./productCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../../store/products/productSlice";
import { Container } from "@mui/material";

const Products = () => {
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(getAllProduct({}));
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const data = useSelector((state) => state.products.products) || [];

  return (
    <>
      <Container maxWidth="xl" sx={{ paddingY: 2 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 mb-3">
          {data.map((m, index) => (
            <div key={index}>
              <ProductCard data={m} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Products;
