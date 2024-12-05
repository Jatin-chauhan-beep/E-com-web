import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      let product = state.products;
      state.products = [...product, action.payload];
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (f) => f.product_id !== action.payload
      );
    },
    setQuantity: (state, action) => {
      const { product_id, val } = action.payload;

      state.products = state.products.map((product) => {
        if (product.product_id === product_id) {
          const currentQuantity = product.ProductSizes?.quantity || 0;
          const basePrice = Number(product.price);

          const newQuantity =
            val === "inc"
              ? currentQuantity + 1
              : Math.max(0, currentQuantity - 1);

          const newPrice = basePrice * newQuantity;

          return {
            ...product,
            ProductSizes: {
              ...product.ProductSizes,
              quantity: newQuantity,
            },
            price: newPrice.toFixed(2),
            basePrice,
          };
        }
        return product;
      });
    },
    clearCart: () => initialState,
  },
});

export const { setProduct, clearCart, removeProduct, setQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
