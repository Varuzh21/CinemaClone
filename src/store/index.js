import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
