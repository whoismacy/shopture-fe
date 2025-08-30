import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    cart: cartSlice,
  },
});

export default store;
