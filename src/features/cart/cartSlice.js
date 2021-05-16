import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  amount: 0,
  total: 0,
};

const getTotals = (state) => {
  // This reducer returns an object with two elements
  const { total, amount } = state.cart.reduce(
    (newTotal, product) => {
      const { price, amount } = product;
      newTotal.amount += amount;
      let tempTotal = price * amount;
      newTotal.total += tempTotal;
      return newTotal;
    },
    { total: 0, amount: 0 }
  );
  state.total = total;
  state.amount = amount;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      // Checks if the cart is empty
      if (!state.cart.length) {
        state.cart.push({ ...payload, amount: 1 });
      } else {
        // Check if the product is not already in the cart
        const filter = state.cart.filter(
          (product) => product.id === payload.id
        );
        if (!filter.length) {
          state.cart.push({ ...payload, amount: 1 });
        } else {
          // If it exists, loop and add 1 to the correct one
          let newCart = state.cart.map((product) => {
            if (product.id === payload.id) {
              return { ...product, amount: product.amount + 1 };
            }
            return product;
          });
          state.cart = newCart;
        }
      }
      getTotals(state);
    },
    removeProduct(state, { payload }) {
      let newCart = state.cart.filter((item) => item.id !== payload);
      state.cart = newCart;
      getTotals(state);
    },
  },
});

export const { addToCart, removeProduct } = cartSlice.actions;

// Selectors
export const selectCart = (state) => state.cart.cart;
export const selectCartAmount = (state) => state.cart.amount;
export const selectCartTotal = (state) => state.cart.total;

export default cartSlice.reducer;
