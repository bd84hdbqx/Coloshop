import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  total: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const cardFind = state.basket.find(
        (elem) => elem._id == action.payload._id
      );
      if (cardFind) {
        cardFind.quantity = cardFind.quantity + 1;
      } else {
        state.basket.push(action.payload);
      }
      state.total += action.payload.price;
    },
    deleteBasket: (state, action) => {
      const cardFind = state.basket.find(
        (elem) => elem._id == action.payload._id
      );
      if (cardFind) {
        state.basket = state.basket.filter(
          (elem) => elem._id !== action.payload._id
        );
        state.total -= action.payload.price * cardFind.quantity;
      }
    },

    incremet: (state, action) => {
      const cardFind = state.basket.find(
        (elem) => elem._id == action.payload._id
      );
      cardFind.quantity = cardFind.quantity + 1;
      state.total += action.payload.price * cardFind.quantity;
    },
    decrement: (state, action) => {
      const cardFind = state.basket.find(
        (elem) => elem._id == action.payload._id
      );
      if (cardFind.quantity === 1) {
        state.basket = state.basket.filter(
          (elem) => elem._id !== action.payload._id
        );
      } else {
        cardFind.quantity = cardFind.quantity - 1;
      }
      state.total -= action.payload.price * cardFind.quantity;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBasket, incremet, decrement, deleteBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
