
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const movie = action.payload;
      if (!state.favorites.find(item => item.id === movie.id)) {
        state.favorites.push(movie);
      }
    },
    removeFavorites: (state,action) => {
      const movie = action.payload;
      state.favorites.splice(state.favorites.findIndex((item)=>item.id === movie.id), 1)
  }
  },
});

export const { removeFavorites, addToFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;