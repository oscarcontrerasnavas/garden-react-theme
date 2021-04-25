import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  images: [],
  status: "idle",
};

export const getImages = createAsyncThunk("gallery/getImages", async () => {
  const unsplash =
    "https://api.unsplash.com/search/photos?query=potted+plant&orientation=squarish";
  const headers = {
    Authorization: "Client-ID 2WezSIuQ-U8ze6iwjzmNByqDSxTXSzSv0rVq5nC4TX8",
  };
  try {
    const response = await axios.get(unsplash, { headers });
    if (200 <= response.status && response.status <= 299) {
      return response.data.results;
    } else {
      throw new Error(`Response status: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
});

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getImages.fulfilled, (state, { payload }) => {
        state.status = "fulfilled";
        state.images = payload;
      })
      .addCase(getImages.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

// Selectors
export const selectImages = (state) => state.gallery.images;

export default gallerySlice.reducer;
