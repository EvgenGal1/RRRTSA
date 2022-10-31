// les6. асинхр экшны для раб. со счётчиком
// put `помещать` ~ dispatch `отправлять` для асинхр экшнов (где нет задержек)
// takeEvery `возьми каждый` для слежения фотчера за выполнением экшенов
import { put, takeEvery } from "redux-saga/effects";
import {
  ASYNC_DICREMENT,
  ASYNC_INCREMENT,
  decrementCreatorSg,
  incrementCreatorSg,
} from "../store/countReducerSg";

// fn() искуственной задержки. парам приним ms, возвращ. нов. Promis, колбэкjv передаём resolv чтоб выполн Promis и 2ой парам ms
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// worker `рабочий` инкремент
function* incrementWorker() {
  // перед асинх пишем yield (идут по порядку)
  yield delay(1000);
  // тип dispatch, передача экшна. fn() возвращ объ экшна
  yield put(incrementCreatorSg());
  // задержка 1сек, потом инкремент
}
// форкер `рабочий` дикремент
function* decrementWorker() {
  yield delay(1000);
  yield put(decrementCreatorSg());
}

// watcher `наблюдатель` экшов со счётчиком.
export function* countWatcher() {
  // `возьми каждый` - следит чтоб асинх экшн был выполнен. 1ый парам. тип экшна для слежения, 2ой парам форкер, который зараб, когда тип 1ый будет задеспатчен (отправлен)
  yield takeEvery(ASYNC_INCREMENT, incrementWorker);
  yield takeEvery(ASYNC_DICREMENT, decrementWorker);
}
