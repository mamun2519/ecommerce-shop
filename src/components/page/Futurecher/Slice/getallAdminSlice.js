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
<<<<<<< HEAD
      .get(`http://localhost:5000/user/allAdmin?page=${catagory}`, config)
=======
      .get(`http://207.244.230.118:5000/user/allAdmin?page=${catagory}`, config)
>>>>>>> 9e080e4f0e88e48ea1ed5c2ec24c25c8a6de7c7e
      .then((res) => res.data);
  }
  if (catagory) {
    return axios
<<<<<<< HEAD
      .get(`http://localhost:5000/user/allAdmin?keyword=${catagory}`, config)
=======
      .get(
        `http://207.244.230.118:5000/user/allAdmin?keyword=${catagory}`,
        config
      )
>>>>>>> 9e080e4f0e88e48ea1ed5c2ec24c25c8a6de7c7e
      .then((res) => res.data);
  }

  return axios
<<<<<<< HEAD
    .get("http://localhost:5000/user/allAdmin", config)
=======
    .get("http://207.244.230.118:5000/user/allAdmin", config)
>>>>>>> 9e080e4f0e88e48ea1ed5c2ec24c25c8a6de7c7e
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
