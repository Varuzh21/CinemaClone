import { getUserReducer, postUserReducer } from './users';
import { getAllGenresReducer, getAllMoviesReducer, getSingleMovieReducer, getCreditsMovieReducer } from './movies';

const reducer = {
  postUserReducer,
  getUserReducer,
  getAllMoviesReducer,
  getAllGenresReducer,
  getSingleMovieReducer,
  getCreditsMovieReducer
};

export default reducer;
