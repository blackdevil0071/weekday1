// src/redux/reducers/jobSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchJobsRequest: state => {
      state.loading = true;
      state.error = null;
    },
    fetchJobsSuccess: (state, action) => {
      state.loading = false;
      state.jobs = action.payload;
    },
    fetchJobsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchJobsRequest, fetchJobsSuccess, fetchJobsFailure } = jobSlice.actions;

export default jobSlice.reducer;
