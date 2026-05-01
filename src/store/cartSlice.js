// cartSlice.js - Redux slice for cart state management
// Contains actions, reducers and selectors for cart items

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    // Action 1 - Product cart mein add karo
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
      
        existingItem.quantity += 1;
      } else {
      
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    // Action 2 - remove from Product cart 
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    //Increse Quantity 
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
    },

    // Reduce Quantity 
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    //  empty Cart 
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

//  export Actions
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

//export Selectors  
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartCount = (state) => state.cart.cartItems.length;
export const selectCartTotal = (state) =>
  state.cart.cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

export default cartSlice.reducer;