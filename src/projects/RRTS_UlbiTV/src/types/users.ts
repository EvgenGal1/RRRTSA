// типы для usersReducer (отраж.списка польз-ей с сервера)
const FETCH_USERS = "FETCH_USERS";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

// тип сост.
export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

// перечисления назв. типов action в общем блоке
export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

// типы для кажд. action (сторгго свои типы)
interface FetchUsersAction {
  // type: "FETCH_USERS";
  type: UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
  // type: "FETCH_USERS"; // ошб. - невозм. сравнить и не существ. в типе
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}
interface FetchUsersErrorAction {
  // type: "FETCH_USERS";
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}
// объедин.типы action для кажд. action
export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction;

// общ. тип. action
// interface UserAction {
//   type: string;
//   payload?: any;
// }
