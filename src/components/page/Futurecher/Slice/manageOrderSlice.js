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
    if (typeof catagory == "number") {
      return axios
        .get(`http://localhost:5000/order?page=${catagory}`)
        .then((res) => res.data);
    }
    // if (catagory) {
    //   return axios
    //     .get(`http://localhost:5000/product/get?keyword=${catagory}`)
    //     .then((res) => res.data);
    // }
    // if (catagory === "all") {
    //   return axios
    //     .get("http://localhost:5000/product/get")
    //     .then((res) => res.data);
    // }
    return axios
      .get("http://localhost:5000/order")
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
