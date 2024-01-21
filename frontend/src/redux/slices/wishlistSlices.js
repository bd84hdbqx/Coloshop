import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist: (state, action) => {
      const cardFinds = state.wishlist.find(
        (elem) => elem._id == action.payload._id
      );
      if (cardFinds) {
        state.wishlist = state.wishlist.filter(
          (elem) => elem._id !== action.payload._id
        );
      } else {
        state.wishlist.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
