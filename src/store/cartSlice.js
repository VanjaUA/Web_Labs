import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    cartItems: []
  }

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id);
      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    changeQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.item.id);
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity = action.payload.quantity;
      }
    },
    removeFromCart: (state, action) => {
        const existingItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id);
        if (existingItemIndex !== -1) {
          state.cartItems.splice(existingItemIndex, 1);
        }
      },
  },
});

export const { addToCart, changeQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
