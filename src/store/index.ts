// ОБЪЕДИНЁННЫЕ REDUCERЫ ВСЕХ ПРОЕКТОВ
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
// REDUSERЫ
// VM
import { githubApi } from "../projects/R3TS22_VM/src/store/github/github.api";
import { githubReducer } from "../projects/R3TS22_VM/src/store/github/github.slice";
// RRTS_UBI
import { todosReducer } from "../projects/RRTS_ULBITV/src/store/reducers/todosReduсer";
import { usersReducer } from "../projects/RRTS_ULBITV/src/store/reducers/usersReduсer";
// RR_UBI
import { cashReducer } from "../projects/RR_ULBITV/src/store/cashReducer";
import { countReducerSg } from "../projects/RR_ULBITV/src/store/countReducerSg";
import { customReducer } from "../projects/RR_ULBITV/src/store/customReducer";
import { usersReducerSg } from "../projects/RR_ULBITV/src/store/usersReducerSg";
import { rootWatcher } from "../projects/RR_ULBITV/src/saga";
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  // VM
  [githubApi.reducerPath]: githubApi.reducer,
  githubR: githubReducer,
  // RRTS_UBI
  usersR: usersReducer,
  todosR: todosReducer,
  // RR_UBI
  cashR: cashReducer,
  customR: customReducer,
  countRSg: countReducerSg,
  usersRSg: usersReducerSg,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, sagaMiddleware, githubApi.middleware)
  )
);
// запуск saga с переданым парам. watcher `наблюдателем`
sagaMiddleware.run(rootWatcher);
// расшир.настр. для refetchOnFocus `переориентироваться на фокусе`
setupListeners(store.dispatch);
// ч/з ReturnType`возврат тип` получ тип reducer по умолч.(для своего типиз.хука.useSelector)
export type RootState = ReturnType<typeof rootReducer>; // <typeof store.getState>
