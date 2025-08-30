import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  address: {},
  status: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
