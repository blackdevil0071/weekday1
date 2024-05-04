// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/JobSlice';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
