import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    numOfItems: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost, description } = action.payload;
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          name,
          image,
          cost,
          description,
          quantity: 1,
        });
      }
      state.numOfItems += 1;
    },

    removeItem: (state, action) => {
      const { name } = action.payload;
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        state.numOfItems -= existingItem.quantity;
        if (state.numOfItems < 0) state.numOfItems = 0;
        state.items = state.items.filter(item => item.name !== name);
      }
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        if (quantity <= 0) {
          state.numOfItems -= existingItem.quantity;
          if (state.numOfItems < 0) state.numOfItems = 0;
          state.items = state.items.filter(item => item.name !== name);
        } else {
          const diff = quantity - existingItem.quantity;
          state.numOfItems += diff;
          if (state.numOfItems < 0) state.numOfItems = 0;
          existingItem.quantity = quantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
