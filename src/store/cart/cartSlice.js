import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    },
    clearCart: () => initialState,
  },
});

export const { setProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
