import { createSlice } from '@reduxjs/toolkit';

import { fetchCars } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items =
        state.items[0]?.id === payload[0]?.id
        ? payload
        : [...state.items, ...payload];
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

// Slice - create actions та create reducers разом взяті
const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  // в extraReducers опрацьовуємо actions, які створює createAsyncThunk
  // fetchCars тут - це назва відповідного thunk
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled,  handleFulfilled)
      .addCase(fetchCars.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;


