import { getUserReducer, postUserReducer } from './users';
import { getAllGenresReducer, getAllMoviesReducer, getSingleMovieReducer, getCreditsMovieReducer, getPopularMoviesReducer } from './movies';

const reducer = {
  postUserReducer,
  getUserReducer,
  getAllMoviesReducer,
  getAllGenresReducer,
  getSingleMovieReducer,
  getCreditsMovieReducer,
  getPopularMoviesReducer
};

export default reducer;
