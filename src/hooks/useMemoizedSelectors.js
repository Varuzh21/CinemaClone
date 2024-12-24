import {useSelector} from 'react-redux';
import {useMemo} from 'react';

const useMemoizedSelectors = () =>{

  const userSelector = useSelector((state) => state.getUserReducer.user) || [];
  const popularMovieSelector = useSelector((state) => state.getPopularMoviesReducer.popularMovies) || [];
  const moviesSelector = useSelector((state) => state.getAllMoviesReducer.movies) || [];
  const genresSelector = useSelector((state) => state.getAllGenresReducer.genres) || [];
  const singleMovieSelector = useSelector((state) => state.getSingleMovieReducer.singleMovie) || [];

  return useMemo(() => ({
    users: userSelector,
    popularMovies: popularMovieSelector,
    movies: moviesSelector,
    genres: genresSelector,
    single: singleMovieSelector,
  }), [userSelector, popularMovieSelector, moviesSelector, genresSelector, singleMovieSelector]);
};

export default useMemoizedSelectors;
