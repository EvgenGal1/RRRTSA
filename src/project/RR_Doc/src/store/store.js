// хранилище Redux и его экспорта
import { configureStore } from "@reduxjs/toolkit";
// Добавьте редукторы Slice в Store
import counterReducer from "../features/counter/counterSlice";

export default configureStore({
  reducer: { counter: counterReducer },
});
