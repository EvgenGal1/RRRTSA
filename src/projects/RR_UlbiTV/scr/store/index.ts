// логика по раб с данными
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
// подкл. reducerы
import { cashReducer } from "./cashReducer";
import { customReducer } from "./customReducer";
// les6.
import { countReducerSg } from "./countReducerSg";
import { usersReducerSg } from "./usersReducerSg";

// подкл. инстр.разраб. для удобства разработки/отслеж. сост в redux
// стар способ
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// нов. способ
// import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";

// Объединяем редукторы ч/з объ. rootR и вызов fn combineR.
const rootReducer = combineReducers({
  // fn приним. парам-ом объ., куда добавл. reducerы назв.|ключ-значением
  cashR: cashReducer,
  customR: customReducer,
  // les6.
  countRSg: countReducerSg,
  usersRSg: usersReducerSg,
});

// создан. store
// export const store = createStore(rootReducer);
// les5. подкл redux-thunk для алинхр. ч/з applyMiddleware
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
