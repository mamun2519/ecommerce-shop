import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initistialProductState = {
  products: [],
  loading: false,
  error: "",
};

export const fetchProduct = createAsyncThunk("/products/fetch", (catagory) => {
  const config = {
    headers: { authorization: `Bearer ${localStorage.getItem("UserToken")}` },
  };
  if (typeof catagory == "number") {
    return axios
      .get(
        `https://ecommerce-shop-server.vercel.app/product/get?page=${catagory}`,
        config
      )
      .then((res) => res.data);
  }
  if (catagory) {
    if (
      catagory == "Smart Hudi" ||
      catagory == "Burka" ||
      catagory == "Arabic Hijab" ||
      catagory == "Saree" ||
      catagory == "Shoe" ||
      catagory == "Cosmatic" ||
      catagory == "T-shirts"
    ) {
      return axios
        .get(
          `https://ecommerce-shop-server.vercel.app/product/get?category=${catagory}`,
          config
        )
        .then((res) => res.data);
    } else {
      return axios
        .get(
          `https://ecommerce-shop-server.vercel.app/product/get?keyword=${catagory}`,
          config
        )
        .then((res) => res.data);
    }
  }
  if (catagory === "all") {
    return axios
      .get("https://ecommerce-shop-server.vercel.app/product/get", config)
      .then((res) => res.data);
  }
  return axios
    .get("https://ecommerce-shop-server.vercel.app/product/get", config)
    .then((res) => res.data);
});
export const productsSlice = createSlice({
  name: "products",
  initialState: initistialProductState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

// export const {} = productsSlice.actions
export default productsSlice.reducer;
