import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice'; // Ensure the path is correct

const store = configureStore({
  reducer: {
    tasks: tasksReducer, // Add reducers here
  },
});

export default store; // Export store as default