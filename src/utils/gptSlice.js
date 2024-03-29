import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice for managing the state of GPT Search.
 *
 * @typedef {Object} GptSlice
 * @property {string} name - The name of the slice.
 * @property {Object} initialState - The initial state of the slice.
 * @property {boolean} initialState.toggleSearch - The toggleSearch state.
 * @property {Object} reducers - The reducers for the slice.
 * @property {Function} reducers.toggleSearch - The reducer function for toggling the search state.
 */

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleSearch(state) {
      state.toggleSearch = !state.toggleSearch;
    },
    setGptSearchedMovies(state, action) {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleSearch, setGptSearchedMovies } = gptSlice.actions;
export default gptSlice.reducer;
