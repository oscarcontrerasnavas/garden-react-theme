import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { products_url } from "../../utils/globals";
import { getUniqueValues } from "../../utils/helpers";

const initialState = {
  products: [],
  categories: [],
  filters: {
    category: "all",
  },
  filtered: [],
  status: null,
  error: null,
  modal: {
    status: null,
    text: null,
  },
};

// Async
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await axios.get(products_url);
      if (299 >= response.status && response.status >= 200) {
        return response.data;
      } else {
        throw new Error(`error: ${response.status}`);
      }
    } catch (error) {
      return error;
    }
  }
);

// Slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateFilter(state, { payload }) {
      let { name, value } = payload;
      let temp = state.products;
      state.filters[name] = value;

      // Filter category
      if (state.filters.category !== "all") {
        temp = temp.filter(
          (product) => product.category === state.filters.category
        );
      }

      state.filtered = temp;
    },
    setModalStatus(state, { payload }) {
      state.modal.status = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.filtered = action.payload;
        state.categories = getUniqueValues(action.payload, "category");
        state.status = "fulfilled";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const { updateFilter, setModalStatus } = productsSlice.actions;

// Selectors
export const selectStatus = (state) => state.products.status;
export const selectProducts = (state) => state.products.filtered;
export const selectCategories = (state) => state.products.categories;
export const selectFilters = (state) => state.products.filters;
export const selectModal = (state) => state.products.modal;

export default productsSlice.reducer;
