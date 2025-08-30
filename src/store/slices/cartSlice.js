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
    //eslint-disable-next-line
    dropCart(state, action) {
      state.cart = [];
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id !== action.payload);
      item.quantiy++;
      item.price = item.unitPrice * item.quantity;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id !== action.payload);
      item.quantity--;
      if (item < 1) {
        cartSlice.caseReducers.dropCart(state, action);
      }
      item.price = item.unitPrice * item.quantity;
    },
  },
});

export const getCart = (state) => state.cart.cart;
export const getItemById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id);
export default cartSlice.reducer;
export const { addItem, deleteItem, increaseQuantity, reduceQuantity } =
  cartSlice.actions;
