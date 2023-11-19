// import { createSlice } from '@reduxjs/toolkit';

// const favoritesSlice = createSlice({
//   name: 'favorites',
//   initialState: [],
//   reducers: {
//     addFavorite(state, { payload }) {
//       state.favorites.push(payload);
//     },
//     deleteFavorite(state, { payload }) {
//       state.favorites = state.favorites.filter((item) => item !== payload);
//     },
//   },
// });

// export const { addFavorite, deleteFavorite } = favoritesSlice.actions;
// export const favoritesReducer = favoritesSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    addFavorite(state, { payload }) {
      state.items.push(payload);
    },
    deleteFavorite(state, { payload }) {
      state.items = state.items.filter((item) => item !== payload);
    },
  },
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;

