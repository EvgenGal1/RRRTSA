// хранилище Redux и его экспорта
import { configureStore } from "@reduxjs/toolkit";
// Добавьте редукторы Slice в Store
import counterReducer from "../features/counter/counterSlice";

// configureStore принимает функцию reducer в качестве именованного аргумента
// configureStore автоматически настраивает магазин с хорошими настройками по умолчанию
export default configureStore({
  reducer: { counter: counterReducer },
});
