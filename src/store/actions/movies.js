import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../Api';

export const getAllMoviesRequest = createAsyncThunk('get-all-movies',
  async (payload, thunkAPI) => {
    try {
      const { data } = await Api.getAllMovies(payload);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  },
);

export const getAllGenresRequest = createAsyncThunk('get-all-genres',
  async (payload, thunkAPI) => {
    try {
      const { data } = await Api.getAllGenres(payload);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  },
);

export const getSingleMoveRequest = createAsyncThunk('get-all-genres',
  async (payload, thunkAPI) => {
    try {
      const { data } = await Api.getSingleMovie(payload);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  },
);

export const getCreditsMovieRequest = createAsyncThunk('get-credits',
  async (payload, thunkAPI) => {
    try {
      const { data } = await Api.getCreditsMovie(payload);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  },
);

export const getPopularMoviesRequest = createAsyncThunk('get-popular-movies',
  async (payload, thunkAPI) => {
     try {
       const { data } = await Api.getPopularMovies(payload);
       return data;
     }catch (e) {
       return thunkAPI.rejectWithValue(e.response.data);
     }
  },
);
