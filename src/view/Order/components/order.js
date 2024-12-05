import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CheckCircleOutline } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../store/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { apiPlaceOrder } from "../../../services/OrderService";
import { Snackbar } from "@mui/material";

const ProductCard = ({ product }) => {
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          Quantity :<span>{product?.ProductSizes.quantity}</span>
        </Box>
      </Grid>
    </Grid>
  );
};

const Order = () => {
  const cartProducts = useSelector((state) => state.cart.products);
  const [notification, setNotification] = useState(false);
  const userData = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const placeOrder = async () => {
    try {
      const res = await apiPlaceOrder({
        customer_id: userData.customer_id,
        total_amount: totalAmount,
        delivery_date: new Date(),
        orderListData: cartProducts,
      });
      if (res.status === 201) {
        setNotification(true);
        dispatch(clearCart());
        navigate("/home");
      }
    } catch (error) {}
  };
  const handleClose = () => {
    setNotification(false);
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
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={notification}
        onClose={handleClose}
        message="Order Placed Successfully"
      />
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
          onClick={placeOrder}
        >
          Done
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

        <Typography variant="h6" sx={{ marginTop: "16px", fontWeight: "bold" }}>
          Cash On Delivery
        </Typography>
      </Box>
    </Box>
  );
};

export default Order;
