// Виправлений campersSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface GalleryImage {
  thumb: string;
  original: string;
}
interface Camper {
  id: string;
  name: string;
  price: number;
  gallery: GalleryImage[];
  rating: number;
  location: string;
  description: string;
  transmission: string;
  engine: string;
  kitchen: boolean;
  AC: boolean;
  TV: boolean;
  bathroom: boolean;
  form: string;
  length: number;
  width: number;
  height: number;
  tank: number | string;
  consumption: number | string;
}

interface CampersState {
  data: Camper[];
  loading: boolean;
  error: string | null;
}

const initialState: CampersState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async () => {
    const response = await axios.get(
      "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
    );
    console.log(response.data); // Перевірте, що повертається тут
    return response.data.items;
  }
);

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default campersSlice.reducer;
