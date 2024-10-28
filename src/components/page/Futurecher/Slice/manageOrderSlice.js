import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initistialManageOrderState = {
  orders: [],
  loading: false,
  error: "",
};

export const fetchManageOrder = createAsyncThunk(
  "/manageOrders/fetch",
  (catagory) => {
    const config = {
      headers: { authorization: `Bearer ${localStorage.getItem("UserToken")}` },
    };
    if (typeof catagory == "number") {
      return axios
<<<<<<< HEAD
        .get(`http://localhost:5000/order?page=${catagory}`, config)
=======
        .get(`http://207.244.230.118:5000/order?page=${catagory}`, config)
>>>>>>> 9e080e4f0e88e48ea1ed5c2ec24c25c8a6de7c7e
        .then((res) => res.data);
    }
    // if (catagory) {
    //   return axios
<<<<<<< HEAD
    //     .get(`http://localhost:5000/product/get?keyword=${catagory}`)
=======
    //     .get(`http://207.244.230.118:5000/product/get?keyword=${catagory}`)
>>>>>>> 9e080e4f0e88e48ea1ed5c2ec24c25c8a6de7c7e
    //     .then((res) => res.data);
    // }
    // if (catagory === "all") {
    //   return axios
<<<<<<< HEAD
    //     .get("http://localhost:5000/product/get")
    //     .then((res) => res.data);
    // }
    return axios
      .get("http://localhost:5000/order", config)
=======
    //     .get("http://207.244.230.118:5000/product/get")
    //     .then((res) => res.data);
    // }
    return axios
      .get("http://207.244.230.118:5000/order", config)
>>>>>>> 9e080e4f0e88e48ea1ed5c2ec24c25c8a6de7c7e
      .then((res) => res.data);
  }
);

export const manageOrdersSlice = createSlice({
  name: "orders",
  initialState: initistialManageOrderState,
  extraReducers: (builder) => {
    builder.addCase(fetchManageOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchManageOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
      state.error = "";
    });
    builder.addCase(fetchManageOrder.rejected, (state, action) => {
      state.loading = false;
      state.orders = [];
      state.error = action.error.message;
    });
  },
});

export default manageOrdersSlice.reducer;
