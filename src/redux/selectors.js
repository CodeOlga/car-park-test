// import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.items;
export const selectFavorites = state => state.favorites.items;
export const selectError = state => state.cars.error;
export const selectIsLoading = state => state.cars.isLoading;

// export const selectFilteredCars = createSelector(
//   [selectCars, selectFavorites],
//   (cars, filter) => {
//     return cars.filter(({ make }) =>
//       make.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );