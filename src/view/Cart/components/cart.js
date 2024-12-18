import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { RemoveCircleOutline, CheckCircleOutline } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import Fab from "@mui/material/Fab";
import { removeProduct, setQuantity } from "../../../store/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (val) => {
    dispatch(setQuantity({ product_id: product?.product_id, val: val }));
  };

  const handleRemove = () => {
    if (cartProducts.length == 1) {
      navigate("/home");
      dispatch(removeProduct(product.product_id));
    } else {
      dispatch(removeProduct(product.product_id));
    }
  };

  return (
    <Grid container spacing={2} sx={{ border: "1px solid black" }}>
      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "150px",
          }}
        >
          <img
            image="https://picsum.photos/500/500"
            alt={product.name}
            style={{ height: "100%" }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: "2px" }}
        >
          {product.description}
        </Typography>

        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
        >
          <Fab
            color="primary"
            aria-label="subtract"
            sx={{ width: 38, height: 30, marginRight: 3 }}
            onClick={() => handleQuantityChange("dec")}
            disabled={product?.ProductSizes.quantity === 1}
          >
            -
          </Fab>
          <span>{product?.ProductSizes.quantity}</span>
          <Fab
            color="primary"
            aria-label="add"
            sx={{ width: 38, height: 30, marginLeft: 3 }}
            onClick={() => handleQuantityChange("inc")}
          >
            +
          </Fab>
        </Box>

        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleRemove}
            startIcon={<RemoveCircleOutline />}
          >
            Remove
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

const Cart = () => {
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cart.products);
  const calculateTotal = () => {
    let totalAmount = 0;

    cartProducts?.forEach((product, index) => {
      const productPrice =
        Number(product?.price) * product?.ProductSizes.quantity;
      totalAmount += productPrice;
    });

    return {
      totalAmount,
      finalAmount: totalAmount,
    };
  };

  const { totalAmount, finalAmount } = calculateTotal();

  const handlePlace = () => {
    navigate("/order");
  };

  return (
    <Box
      className="p-4"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 4,
      }}
    >
      {/* Cart Products */}
      <Box sx={{ flex: 1 }}>
        {cartProducts?.map((product, index) => (
          <ProductCard key={product.id} product={product} />
        ))}

        <Button
          variant="outlined"
          color="success"
          startIcon={<CheckCircleOutline />}
          sx={{ marginTop: "20px" }}
          onClick={handlePlace}
        >
          Place Order
        </Button>
      </Box>

      {/* Price Details */}
      <Box
        sx={{ minWidth: "250px", padding: "16px", border: "1px solid gray" }}
      >
        <Typography variant="h6" gutterBottom>
          Price Details
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: "8px" }}>
          Product Price: ₹{totalAmount.toFixed(2)}
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: "8px" }}>
          Delivery Charges: Free
        </Typography>

        <Typography variant="h6" sx={{ marginTop: "16px", fontWeight: "bold" }}>
          Total Amount: ₹{finalAmount.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Cart;
