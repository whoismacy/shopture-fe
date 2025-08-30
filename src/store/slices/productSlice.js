import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "",
  error: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const getData = (state) => state.product.data;
export default productSlice.reducer;
