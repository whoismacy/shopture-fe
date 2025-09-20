import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  address: {},
  status: "",
  error: "",
  allowed: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addAddress(state, action) {
      state.address = action.payload;
    },
    setAllow(state) {
      state.allowed = true;
    },
  },
});

export const getAddress = (state) => state.user.address;
export const getAllowedState = (state) => state.user.allowed;
export const { addAddress, setAllow } = userSlice.actions;
export default userSlice.reducer;
