import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  Snackbar,
  Alert,
} from "@mui/material";
import Fab from "@mui/material/Fab";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const [sizes, setSizes] = useState(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );

  const selectedSize = (size) => {
    setSizes(size);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const addToCart = () => {
    if (!sizes) {
      setOpen(true);
    }
  };
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="warning"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Select size First
        </Alert>
      </Snackbar>
      <Container maxWidth="lg" sx={{ paddingY: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="500"
                image="https://picsum.photos/500/500"
                alt="Product Image"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {selectedProduct?.name}
              </Typography>
              <Box display="flex" alignItems="center" marginBottom={2}>
                <Typography variant="body1" color="text.secondary">
                  ★★★★☆
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {Number(selectedProduct?.rating).toFixed(1)}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" marginBottom={2}>
                <Typography variant="h6" color="green">
                  Rs {selectedProduct?.price}
                </Typography>
                <Chip
                  label="14% Off"
                  color="success"
                  size="small"
                  sx={{ marginLeft: 1 }}
                />
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                marginBottom={2}
              >
                {selectedProduct?.description}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                marginBottom={1}
              >
                Size:
              </Typography>
              <Box marginBottom={2}>
                {selectedProduct?.ProductSizes?.map((size) => (
                  <Button
                    disabled={sizes?.product_sizes_id === size.product_sizes_id}
                    key={size}
                    variant="outlined"
                    sx={{ marginRight: 1 }}
                    onClick={() => selectedSize(size)}
                  >
                    {size.size}
                  </Button>
                ))}
              </Box>
              {/* <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 38, height: 30, marginRight: 3 }}
            >
           -
            </Fab>
            <span>1</span>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 38, height: 30, marginLeft: 3, marginRight: 3 }}
            >
              +
            </Fab> */}
              <Button
                variant="contained"
                color="primary"
                sx={{ width: 150 }}
                onClick={addToCart}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ width: 150, marginLeft: 3 }}
              >
                Buy Now
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductDetails;
