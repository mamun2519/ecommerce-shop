import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const adminInitalState = {
  admins: [],
  loading: false,
  error: "",
};

export const fetchAdmin = createAsyncThunk("/admin/fetch", (catagory) => {
  const config = {
    headers: { authorization: `Bearer ${localStorage.getItem("UserToken")}` },
  };
  if (typeof catagory == "number") {
    return axios
      .get(
        `https://ecommerce-shop-server.vercel.app/user/allAdmin?page=${catagory}`,
        config
      )
      .then((res) => res.data);
  }
  if (catagory) {
    return axios
      .get(
        `https://ecommerce-shop-server.vercel.app/user/allAdmin?keyword=${catagory}`,
        config
      )
      .then((res) => res.data);
  }

  return axios
    .get("https://ecommerce-shop-server.vercel.app/user/allAdmin", config)
    .then((res) => res.data);
});

export const adminSlice = createSlice({
  name: "admins",
  initialState: adminInitalState,
  extraReducers: (builder) => {
    builder.addCase(fetchAdmin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAdmin.fulfilled, (state, action) => {
      state.loading = false;
      state.admins = action.payload;
      state.error = "";
    });
    builder.addCase(fetchAdmin.rejected, (state, action) => {
      state.loading = false;
      state.admins = [];
      state.error = action.error.message;
    });
  },
});

export default adminSlice.reducer;
