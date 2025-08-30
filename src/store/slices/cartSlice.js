import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action) {},
    decreaseQuantity(state, action) {},
  },
});

export const getCart = (state) => state.cart.cart;
export default cartSlice.reducer;
export const { addItem, deleteItem, increaseQuantity, reduceQuantity } =
  cartSlice.actions;
