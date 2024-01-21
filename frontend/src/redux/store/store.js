import { configureStore } from "@reduxjs/toolkit";
import productReducers from "../slices/productSlices";
import basketReducers from "../slices/basketSlices";
import wishlistReducers from "../slices/wishlistSlices";

export const store = configureStore({
  reducer: {
    products: productReducers,
    baskets: basketReducers,
    wishlists: wishlistReducers,
  },
});
