// les6. иниц-ция saga
// fn() для глобал. watcher для слеж за всеми watchers, типо ~ combineReducer.
import { all } from "redux-saga/effects";
import { countWatcher } from "./countSaga";
import { userWatсher } from "./userSaga";

export function* rootWatcher() {
  // вызов all приним. массив
  yield all([countWatcher(), userWatсher()]);
}
