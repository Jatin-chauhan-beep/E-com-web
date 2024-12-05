import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetAllProducts } from "../../services/ProductService";

export const getAllProduct = createAsyncThunk("products/all", async (data) => {
  try {
    const response = await apiGetAllProducts(data);
    return response;
  } catch (error) {
    return error?.response;
  }
});

export const initialState = {
  products: [],
  selectedProduct: null,
  loading: false,
};

export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    clearCart: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data?.data || [];
      });
  },
});

export const { setSelectedProduct } = cartSlice.actions;

export default cartSlice.reducer;
