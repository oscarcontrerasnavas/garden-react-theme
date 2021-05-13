import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import galleryReducer from "../features/gallery/gallerySlice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    gallery: galleryReducer,
    cart: cartReducer,
  },
});

export default store;
