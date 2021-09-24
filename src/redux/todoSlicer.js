import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlicer = createSlice({
  name: "todoSlicer",
  initialState,
  reducers: {
    saveEntery: (state, action) => {
      // state.todos.push(action.payload)
      state.todos = [...state.todos, action.payload];
      console.log(state.todos);
    },
  },
});

export const { saveEntery } = todoSlicer.actions;
export default todoSlicer.reducer;
