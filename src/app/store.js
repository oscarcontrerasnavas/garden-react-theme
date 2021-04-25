import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import galleryReducer from "../features/gallery/gallerySlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    gallery: galleryReducer,
  },
});

export default store;
