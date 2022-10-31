// les6. экшны польз-лей с асинхр действий
// put `помещать` ~ dispatch `отправлять` для асинхр экшнов (где нет задержек)
// takeEvery `возьми каждый` для слежения фотчера за выполнением экшенов
// call `вызов` возвращ. дан. пришедшие в Promise
import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_USERS, setUsers } from "../store/usersReducerSg";

// fn() для отправки API запроса
const fetchUsersFromApi = () => {
  // ??? не раб - (0) по видео
  fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
  // ??? не раб - (3) из переделки thunk (простая)
  // .then((response) => response.json())
  // .then((users) => users);
  // ??? не раб - (3) из переделки thunk
  // .then((response) => {
  //   if (!response.ok) {
  // throw Error(response.statusText);
  //   }
  //   // this.setState({ isLoading: false });
  //   return response.json();
  // })
  // .then((users) => users);
};

// рабочий для асинхр запросов на сервер
// function* fetchUsersWorker(): any {
function* fetchUsersWorker() {
  // ??? не раб - (0) undefined (reading 'json') | fetchUsersWorker - created by takeEvery(FETCH_USERS, fetchUsersWorker)
  // // подобие async await. сохран их в перем. вызов call куда передали Promise с возвращаемыми данными
  // const data = yield fetchUsersFromApi();
  // // преобразов в json
  // const json = yield call((response) => response(data.json()));
  // // вызов put (тип dispatch), с передачей экшна|actionCreator. fn() возвращ объ экшна
  // yield put(setUsers(json));
  // ??? не раб - (1) undefined (reading 'map') ---------------------------------------------------------------
  // const data = yield fetchUsersFromApi();
  // yield put(setUsers(data));
  // ^^^ раб сборка с нэта ----------------------------------------------------------
  const json = yield call(() =>
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      // .then((response) => response.json())
      // .then((users) => users)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // this.setState({ isLoading: false });
        return response.json();
      })
      .then((users) => users)
  );
  yield put(setUsers(json));
}

// наблюдатель за экшенами
// export function* userWather(): any {
export function* userWatсher() {
  // слежение за рабочим. 1ый парам тип экшн., 2ой worker
  yield takeEvery(FETCH_USERS, fetchUsersWorker);
}
