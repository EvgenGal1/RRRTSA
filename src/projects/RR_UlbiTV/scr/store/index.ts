// логика по раб с данными
import { legacy_createStore as createStore, combineReducers } from "redux";
// подкл. reducerы
import { cashReducer } from "./cashReducer";
import { customReducer } from "./customReducer";

// подкл. инстр.разраб. для удобства разработки/отслеж. сост в redux
// стар способ
import { composeWithDevTools } from "redux-devtools-extension";
// нов. способ
// import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";

// Объединяем редукторы ч/з объ. rootR и вызов fn combineR.
const rootReducer = combineReducers({
  // fn приним. парам-ом объ., куда добавл. reducerы назв.|ключ-значением
  cashR: cashReducer,
  customR: customReducer,
});

// создан. store
// export const store = createStore(rootReducer);
export const store = createStore(rootReducer, composeWithDevTools());
