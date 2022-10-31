// объеденитель reducerов
import { combineReducers } from "redux";
// подкл. reducerы
import { usersReducer } from "./usersReduсer";
import { todosReducer } from "./todosReduсer";

// Объединяем редукторы ч/з объ. rootR и вызов fn combineR.
export const rootReducer = combineReducers({
  // fn приним. парам-ом объ., куда добавл. reducerы назв.|ключ-значением
  usersR: usersReducer,
  todosR: todosReducer,
});

// ч/з ReturnType`возврат тип` получ тип reducer по умолч.(для своего типиз.хука.useSelector)
export type RootState = ReturnType<typeof rootReducer>;
