import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userProInitalState = {
  avatar: {},
  loading: false,
  error: "",
};

export const fetchUserAvater = createAsyncThunk(
  "/user/avater",

  (id) => {
    const config = {
      headers: { authorization: `Bearer ${localStorage.getItem("UserToken")}` },
    };

    return axios
<<<<<<< HEAD
      .get(`http://localhost:5000/user/single/${id}`, config)
=======
      .get(`http://207.244.230.118:5000/user/single/${id}`, config)
>>>>>>> 9e080e4f0e88e48ea1ed5c2ec24c25c8a6de7c7e
      .then((res) => res.data);
  }
);

export const userProSlice = createSlice({
  name: "avatar",
  initialState: userProInitalState,
  extraReducers: (builder) => {
    builder.addCase(fetchUserAvater.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserAvater.fulfilled, (state, action) => {
      state.loading = false;
      state.avatar = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUserAvater.rejected, (state, action) => {
      state.loading = false;
      state.avatar = {};
      state.error = action.error.message;
    });
  },
});

export default userProSlice.reducer;
