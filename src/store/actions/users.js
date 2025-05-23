import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { storage } from '../../utils/storage';
import Api from '../../Api';

export const postUserRequest = createAsyncThunk('post-User',
  async (payload, thunkAPI) => {
    try {
      const { data } = await Api.postUser(payload);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  },
);

export const getUserRequest = createAsyncThunk('get-user',
  async (payload, thunkAPI) => {
    try {
      const { data } = await Api.getUser(payload);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  },
);

export const logOut = createAction('logOut',
  async () => {
     await storage.removeItem('userToken');
  });
