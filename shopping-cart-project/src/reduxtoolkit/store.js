import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "@/reduxtoolkit/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
  },
});

export default store;
