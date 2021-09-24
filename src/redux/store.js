import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlicer";
const store = configureStore({
  reducer: {
    todone: todoReducer,
  },
});

export { store };
