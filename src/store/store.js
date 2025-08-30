import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";
import dataSlice from "./slices/dataSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    cart: cartSlice,
    data: dataSlice,
  },
});

export default store;
