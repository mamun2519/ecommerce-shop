import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userInitalState = {
  users: [],
  loading: false,
  error: "",
};

export const fetchUser = createAsyncThunk(
  "/user/fetch",

  (catagory) => {
    const config = {
      headers: { authorization: `Bearer ${localStorage.getItem("UserToken")}` },
    };
    if (typeof catagory == "number") {
      return axios
        .get(`http://207.244.230.118:5000/user/all?page=${catagory}`, config)
        .then((res) => res.data);
    }
    if (catagory) {
      return axios
        .get(`http://207.244.230.118:5000/user/all?keyword=${catagory}`, config)
        .then((res) => res.data);
    }

    return axios
      .get("http://207.244.230.118:5000/user/all", config)
      .then((res) => res.data);
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState: userInitalState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
