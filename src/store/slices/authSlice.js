import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  id: "",
  isLoggedIn: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
