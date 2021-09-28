import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  settoogle: true,
  setGetValue: "",
  setGetId: "",
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
    deleteAll: (state) => {
      state.todos = [];
      return state;
    },
    deleteOne: (state, action) => {
      const newArray = state.todos.filter((e) => {
        if (e.id !== action.payload) {
          return e;
        }
      });
      state.todos = newArray;
      return state;
    },
    editItem: (state, action) => {
      const ItemId = action.payload;
      console.log(ItemId.id);
      state.setGetId = ItemId.id;
      state.settoogle = false;
      state.setGetValue = ItemId.text;
      console.log(state.setGetValue);
    },
    settingState: (state, action) => {
      state.setGetValue = action.payload;
      console.log(state.setGetValue);
    },
    updateValue: (state, action) => {
      const finlValue = state.todos.filter((todo) => {
        if (todo.id == state.setGetId) {
          todo.text = state.setGetValue;
          return todo;
        } else {
          return todo;
        }
      });
      state.todos = finlValue;
      state.settoogle = true;
      state.setGetValue = "";
      return state;
    },
  },
});

export const {
  saveEntery,
  deleteAll,
  deleteOne,
  editItem,
  settingState,
  updateValue,
} = todoSlicer.actions;
export default todoSlicer.reducer;
