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
  reducers: {
    addAddress(state, action) {
      state.address = action.payload;
    },
  },
});

export const { addAddress } = userSlice.actions;
export default userSlice.reducer;
