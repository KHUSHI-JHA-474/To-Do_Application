import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter((task, index) => index !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state[action.payload];
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, removeTask, toggleTaskCompletion } = tasksSlice.actions;
export default tasksSlice.reducer;