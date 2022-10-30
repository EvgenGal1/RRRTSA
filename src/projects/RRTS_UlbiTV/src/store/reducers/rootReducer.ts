// объеденитель reducerов
import { combineReducers } from "redux";
// подкл. reducerы
import { useReducer } from "./useReduсer";

// Объединяем редукторы ч/з объ. rootR и вызов fn combineR.
export const rootReducer = combineReducers({
  // fn приним. парам-ом объ., куда добавл. reducerы назв.|ключ-значением
  usersR: useReducer,
});

// ч/з ReturnType`возврат тип` получ тип reducer по умолч.(для своего типиз.хука.useSelector)
export type RootState = ReturnType<typeof rootReducer>;
