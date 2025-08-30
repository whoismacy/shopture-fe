import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  filteredState: [],
  currentStatus: "",
  error: null,
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
  reducers: {
    initialSort(state) {
      state.filteredState = [...state.data];
    },
    alphabeticalSort(state) {
      state.filteredState = [...state.filteredState].sort((a, b) =>
        a.title.localeCompare(b.title, { ignorePunctuation: true })
      );
    },
    categorySort(state) {
      state.filteredState = [...state.filteredState].sort((a, b) =>
        a.category.localeCompare(b.category, { ignorePunctuation: true })
      );
    },
    priceSort(state) {
      state.filteredState = [...state.filteredState].sort(
        (a, b) => a.price - b.price
      );
    },
    ratingSort(state) {
      state.filteredState = [...state.filteredState].sort((a, b) => {
        if (a.rating.rate !== b.rating.rate) {
          return b.rating.rate - a.rating.rate;
        }
        return b.rating.count - a.rating.count;
      });
    },
    searchQuery(state, action) {
      state.filteredState = [...state.data].filter((item) => {
        const searchContext =
          `${item.category} ${item.title} ${item.description}`.toLowerCase();
        const searchWords = action.payload
          .split(/\s+/)
          .filter((word) => word.length > 0);
        return searchWords.every((word) => searchContext.includes(word));
      });
    },
  },
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

export const getLoadingStatus = (state) => state.data.currentStatus;
export const getProducts = (state) => state.data.filteredState;
export const {
  initialSort,
  alphabeticalSort,
  categorySort,
  priceSort,
  ratingSort,
  searchQuery,
} = dataSlice.actions;
export default dataSlice.reducer;
