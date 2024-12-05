import React, { useEffect } from "react";
import OrderCard from "./customerOrder";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomerOrder } from "../../../store/products/productSlice";
import { Container } from "@mui/material";

const CustomerOrders = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.user);
  const fetchData = () => {
    dispatch(getAllCustomerOrder({ customer_id: userData.customer_id }));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const data = useSelector((state) => state.products.orders) || [];

  return (
    <>
      <Container maxWidth="xl" sx={{ paddingY: 2 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 mb-3">
          {data.map((m, index) => (
            <div key={index}>
              <OrderCard data={m} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default CustomerOrders;
