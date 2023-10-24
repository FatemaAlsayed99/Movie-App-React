import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from './Slices/Favorite.js';
import moviesSlice from './Slices/Movies.js'

const store = configureStore({
  reducer: {
    favorites: favoritesSlice,
    movies: moviesSlice,

  },
});

export default store;