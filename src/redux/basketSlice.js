import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (i) => i.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex((i) => i.id === action.payload);
      if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
  },
});

export const { addItem, removeItem } = basketSlice.actions;

export const selectItems = (state) => state.basket.items;

export const selectNumberOfItems = (state) => {
  let count = 0;
  for (let i of state.basket.items) {
    count += i.quantity;
  }
  return count;
};

export const selectBasketSubTotal = (state) => {
  let sum = 0;
  for (let i of state.basket.items) {
    sum += i.price * i.quantity;
  }
  return sum;
};

export default basketSlice.reducer;
