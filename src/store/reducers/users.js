import { createReducer } from '@reduxjs/toolkit';
import { postUserRequest, getUserRequest } from '../actions/users';

const initialState = {
  user: null,
  userToken: null,
  error: null,
  getUserError: ''
};

export const postUserReducer = createReducer(initialState, (builder) => {
  builder.addCase(postUserRequest.fulfilled, (state, action) => {
    // console.log( action.payload.refreshToken, "test");
    state.userToken = action.payload.refreshToken;
  });
  builder.addCase(postUserRequest.rejected, (state, action) => {
    state.error = action.payload.message;
  });
});

export const getUserReducer = createReducer(initialState, (builder) => {
  builder.addCase(getUserRequest.fulfilled, (state, action) => {
    state.user = action.payload;
  });
  builder.addCase(getUserRequest.rejected, (state, action) => {
    // console.log(action.payload.message, 'reducer error');
    state.getUserError = action.payload.message;
  });
});
