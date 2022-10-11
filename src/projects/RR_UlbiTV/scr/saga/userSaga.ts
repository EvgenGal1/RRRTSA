// les6. экшны польз-лей с асинхр действий
// put `помещать` ~ dispatch `отправлять` для асинхр экшнов (где нет задержек)
// takeEvery `возьми каждый` для слежения фотчера за выполнением экшенов
// call `вызов` возвращ. дан. пришедшие в Promise
import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_USERS, setUsers } from "../store/usersReducerSg";

// fn() для отправки API запроса
const fetchUsersFromApi = () => {
  fetch("https://jsonplaceholder.typicode.com/users?_limit=10");
};

// рабочий для асинхр запросов на сервер
function* fetchUsersWorker(): any {
  // подобие async await. сохран их в перем. вызов call куда передали Promise с возвращаемыми данными
  const data = yield call(fetchUsersFromApi);
  // преобразов в json
  const json = yield call(() => new Promise((res) => res(data.json())));
  // вызов put (тип dispatch), с передачей экшна|actionCreator. fn() возвращ объ экшна
  yield put(setUsers(json));
}

// наблюдатель за экшенами
export function* userWather() {
  // слежение за рабочим. 1ый парам тип экшн., 2ой worker
  yield takeEvery(FETCH_USERS, fetchUsersWorker);
}
