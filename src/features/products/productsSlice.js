import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { products_url } from "../../utils/globals";
import { getUniqueValues } from "../../utils/helpers";

const initialState = {
  products: [],
  categories: [],
  companies: [],
  colors: [],
  filters: {
    sort: "price-highest",
    search: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
  filtered: [],
  status: null,
  error: null,
  gridView: true,
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
    updateFilters(state, { payload }) {
      let { name, value } = payload;
      let temp = state.products;
      if (name === "price") {
        value = parseInt(value);
      }
      state.filters[name] = value;

      // Filter sort
      if (state.filters.sort !== "price-highest") {
        if (value === "price-lowest") {
          temp.sort((a, b) => a.price - b.price);
        }
        if (value === "name-a") {
          temp.sort((a, b) => a.name.localeCompare(b.name));
        }
        if (value === "name-z") {
          temp.sort((a, b) => b.name.localeCompare(a.name));
        }
      } else {
        temp.sort((a, b) => b.price - a.price); // default
      }

      //Filter search
      if (state.filters.search !== "") {
        temp = temp.filter((product) =>
          product.name.includes(state.filters.search)
        );
      }

      // Filter category
      if (state.filters.category !== "all") {
        temp = temp.filter(
          (product) => product.category === state.filters.category
        );
      }

      // Filter company
      if (state.filters.company !== "all") {
        temp = temp.filter(
          (product) => product.company === state.filters.company
        );
      }

      // Filter color
      if (state.filters.color !== "all") {
        temp = temp.filter((product) =>
          product.colors.includes(state.filters.color)
        );
      }

      // Filter price
      if (state.filters.price !== state.filters.max_price) {
        temp = temp.filter((product) => product.price <= state.filters.price);
      }

      // shipping filter
      if (state.filters.shipping) {
        temp = temp.filter(
          (product) => product.shipping === state.filters.shipping
        );
      }

      state.filtered = temp;
    },
    clearFilters(state) {
      state.filters = {
        sort: "price-highest",
        search: "",
        company: "all",
        category: "all",
        color: "all",
        min_price: state.filters.min_price,
        max_price: state.filters.max_price,
        price: state.filters.max_price,
        shipping: false,
      };
      state.filtered = state.products.sort((a, b) => b.price - a.price); // Default sort
    },
    changeView(state, { payload }) {
      state.gridView = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        let maxPrice = payload.map((product) => product.price);
        maxPrice = Math.max(...maxPrice);

        state.products = payload;
        state.filtered = payload;
        state.categories = getUniqueValues(payload, "category");
        state.companies = getUniqueValues(payload, "company");
        state.colors = getUniqueValues(payload, "colors");
        state.filters.max_price = maxPrice;
        state.filters.price = maxPrice;
        state.status = "fulfilled";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const { updateFilters, updateSort, clearFilters, changeView } =
  productsSlice.actions;

// Selectors
export const selectStatus = (state) => state.products.status;
export const selectProducts = (state) => state.products.filtered;
export const selectCategories = (state) => state.products.categories;
export const selectCompanies = (state) => state.products.companies;
export const selectColors = (state) => state.products.colors;
export const selectFilters = (state) => state.products.filters;
export const selectView = (state) => state.products.gridView;

// Default export
export default productsSlice.reducer;
