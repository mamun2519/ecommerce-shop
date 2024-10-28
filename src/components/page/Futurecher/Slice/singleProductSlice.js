import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initistialProductState = {
  product: {},
  loading: false,
  error: "",
};
export const fetchSingleProduct = createAsyncThunk("/products/fetch", (id) => {
  if (id) {
    return axios
<<<<<<< HEAD
      .get(`http://localhost:5000/product/get/${id}`)
=======
      .get(`http://207.244.230.118:5000/product/get/${id}`)
>>>>>>> 9e080e4f0e88e48ea1ed5c2ec24c25c8a6de7c7e
      .then((res) => res.data);
  }
});

export const singleProductSlice = createSlice({
  name: "product",
  initialState: initistialProductState,
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.loading = false;
      state.product = {};
      state.error = action.error.message;
    });
  },
});

export default singleProductSlice.reducer;
