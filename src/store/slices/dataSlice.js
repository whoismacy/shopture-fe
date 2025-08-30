import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  filteredState: [],
  currentStatus: "",
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "data/fetchProducts",
  async function () {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch Products");
    const data = await res.json();
    return data;
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(
        fetchProducts.pending,
        (state) => void (state.currentStatus = "loading")
      )
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.filteredState = action.payload;
        state.currentStatus = "idle";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.currentStatus = "error";
        state.error = action.error.message;
      }),
});

export const getLoadingStatus = (state) => state.data?.currentStatus;
export const getProducts = (state) => state.data?.data;
export default dataSlice.reducer;
