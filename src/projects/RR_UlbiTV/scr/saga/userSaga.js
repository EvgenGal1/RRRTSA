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
// function* fetchUsersWorker(): any {
function* fetchUsersWorker() {
  // подобие async await. сохран их в перем. вызов call куда передали Promise с возвращаемыми данными
  const data = yield call(fetchUsersFromApi);
  // console.log("1 : " + 1);
  // преобразов в json
  // const json = yield call((response) => response(data.json()));
  // как данные получены, вызов dispatch переданого ч/з параметры. в него передать actionCreate addManyCustomAction который вернёт action (+ много польз-ей), и туда передаём json(массив польз-ей с сервера)
  // yield put(setUsers(json));
  //  ----------------------------------------------------------------------------------
  // const json = yield call(() => new Promise((res) => res(data.json())));
  // const json = yield call(() => new Promise((res) => res(json())));
  // const json = yield call((response) => response(json()));
  // const json = yield call((response) => response.json());
  // const json = yield call((response) => response.data.json());
  const json = call((response) => response(data.json()));
  // const json = call((response) => response(json()));
  // console.log("2 : " + 2);
  // .then((response) => response.json())
  //     .then((json) => console.log(json));
  // const json = yield call((res) => res(data.json()));
  // const json = yield call((res) => res.json());
  // .then((json) => dispatch(addManyCustomAction(json)));
  // вызов put (тип dispatch), с передачей экшна|actionCreator. fn() возвращ объ экшна

  // .then((response) => {
  //   if (!response.ok) {
  //     throw Error(response.statusText);
  //   }
  //   // this.setState({ isLoading: false });
  //   return response.json();
  // })
  // .then((json) => dispatch(addManyCustomAction(json)));

  // yield console.log(data);
  // yield console.log(json);
  yield put(setUsers(json));
  // yield put(console.log(json));
  //  ----------------------------------------------------------------------------------
  // const json = yield call(() =>
  //   fetch("https://jsonplaceholder.typicode.com/users?_limit=10")
  //     .then((response) => response.json())
  //     .then((myJson) => myJson)
  // );
  // yield put({ type: "FETCH_USERS", json: json });
}

// наблюдатель за экшенами
// export function* userWather(): any {
export function* userWatсher() {
  // слежение за рабочим. 1ый парам тип экшн., 2ой worker
  yield takeEvery(FETCH_USERS, fetchUsersWorker);
}
