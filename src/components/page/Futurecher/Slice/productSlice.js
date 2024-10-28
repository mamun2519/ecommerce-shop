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
<<<<<<< HEAD
      .get(`http://localhost:5000/product/get?page=${catagory}`, config)
=======
      .get(`http://207.244.230.118:5000/product/get?page=${catagory}`, config)
>>>>>>> 9e080e4f0e88e48ea1ed5c2ec24c25c8a6de7c7e
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
<<<<<<< HEAD
        .get(`http://localhost:5000/product/get?category=${catagory}`, config)
        .then((res) => res.data);
    } else {
      return axios
        .get(`http://localhost:5000/product/get?keyword=${catagory}`, config)
=======
        .get(
          `http://207.244.230.118:5000/product/get?category=${catagory}`,
          config
        )
        .then((res) => res.data);
    } else {
      return axios
        .get(
          `http://207.244.230.118:5000/product/get?keyword=${catagory}`,
          config
        )
>>>>>>> 9e080e4f0e88e48ea1ed5c2ec24c25c8a6de7c7e
        .then((res) => res.data);
    }
  }
  if (catagory === "all") {
    return axios
<<<<<<< HEAD
      .get("http://localhost:5000/product/get", config)
      .then((res) => res.data);
  }
  return axios
    .get("http://localhost:5000/product/get", config)
=======
      .get("http://207.244.230.118:5000/product/get", config)
      .then((res) => res.data);
  }
  return axios
    .get("http://207.244.230.118:5000/product/get", config)
>>>>>>> 9e080e4f0e88e48ea1ed5c2ec24c25c8a6de7c7e
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
