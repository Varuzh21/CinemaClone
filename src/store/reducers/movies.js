import { createReducer } from '@reduxjs/toolkit';
import {
  getAllMoviesRequest,
  getAllGenresRequest,
  getSingleMoveRequest,
  getCreditsMovieRequest,
  getPopularMoviesRequest
} from '../actions/movies';

const initialState = {
  movies: [],
  genres: [],
  credits: [],
  singleMovie: [],
  popularMovies: [],
};

export const getAllMoviesReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllMoviesRequest.fulfilled, (state, action) => {
    state.movies = action.payload.results;
  })
})

export const getAllGenresReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllGenresRequest.fulfilled, (state, action) => {
    const genreImages = {
      Action: 'https://example.com/action.jpg',
      Horror: 'https://example.com/horror.jpg',
      Fantasy: 'https://example.com/fantasy.jpg',
      Anime: 'https://akamaividz2.zee5.com/image/upload/platform/movie/Animation-genre.jpg',
      Romance: 'https://example.com/romance.jpg',
      'Sci-fi': 'https://example.com/scifi.jpg',
      Comedy: 'https://example.com/comedy.jpg',
      Adventures: 'https://example.com/adventures.jpg',
    };

    state.genres = action.payload.genres.map((genre) => ({
      ...genre,
      image: genreImages[genre.name] || 'https://example.com/default.jpg',
    }));
  })
})

export const getSingleMovieReducer = createReducer(initialState, (builder) => {
  builder.addCase(getSingleMoveRequest.fulfilled, (state, action) => {
    state.singleMovie = action.payload;
  })
})

export const getCreditsMovieReducer = createReducer(initialState, (builder) => {
  builder.addCase(getCreditsMovieRequest.fulfilled, (state, action) => {
    state.credits = action.payload.cast;
  })
})

export const getPopularMoviesReducer = createReducer(initialState, (builder) => {
  builder.addCase(getPopularMoviesRequest.fulfilled, (state, action) => {
    state.popularMovies = action.payload.results;
  })
})
