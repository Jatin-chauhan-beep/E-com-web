import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import {
  AddCircleOutline,
  RemoveCircleOutline,
  CheckCircleOutline,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: "10px",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: 1.5,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "4px",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const ProductCard = ({ product, quantity, setQuantity }) => {
  const [isRemoved, setIsRemoved] = useState(false);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleRemove = () => {
    setIsRemoved(true);
  };

  if (isRemoved) {
    return null;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "150px",
          }}
        >
          <img src={product.image} alt={product.name} height="100%" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <StyledInput
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AddCircleOutline />
              </InputAdornment>
            ),
          }}
        />
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleRemove}
            startIcon={<RemoveCircleOutline />}
          >
            Remove
          </Button>
          <Button
            variant="outlined"
            color="success"
            startIcon={<CheckCircleOutline />}
            sx={{ marginLeft: "10px" }}
          >
            Confirm
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

const Cart = ({ products }) => {
  const [quantities, setQuantities] = useState(Array(products.length).fill(1));

  const setQuantity = (index, quantity) => {
    const newQuantities = [...quantities];
    newQuantities[index] = quantity;
    setQuantities(newQuantities);
  };
  const cartProducts = useSelector((state) => state.cart.products);
  return (
    <Box className="p-4">
      {cartProducts?.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          quantity={quantities[index]}
          setQuantity={(quantity) => setQuantity(index, quantity)}
        />
      ))}
    </Box>
  );
};

export default Cart;
