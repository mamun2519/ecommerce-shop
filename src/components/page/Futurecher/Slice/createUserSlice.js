import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const inititialUserState = {
  user: {},
  loading: false,
  error: "",
};

export const postUser = createAsyncThunk("/user/post", (userData) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  return axios
<<<<<<< HEAD
    .post(`http://localhost:5000/user/create`, userData, config)
=======
    .post(`http://207.244.230.118:5000/user/create`, userData, config)
>>>>>>> 9e080e4f0e88e48ea1ed5c2ec24c25c8a6de7c7e
    .then((res) => res.data);
});

export const userSlice = createSlice({
  name: "user",
  initialState: inititialUserState,
  extraReducers: (builder) => {
    builder.addCase(postUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(postUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
