import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchCarsMore } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCarsMore.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCarsMore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.concat(action.payload); 
        state.error = null;
      })
      .addCase(fetchCarsMore.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export const carsReducer = carsSlice.reducer;