// тип сост.
export interface TodosState {
  todos: TodosArr[];
  loading: boolean;
  error: null | string;
  // номер стр.
  page: number;
  // кол-во на 1ой стр.
  limit: number;
}

export interface TodosArr {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// типы для todosReducer (отраж.списка дел)
const FETCH_TODOS = "FETCH_TODOS";
const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
const FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR";

// перечисления назв. типов action в общем блоке
export enum TodosActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  // для измен. стр.
  FETCH_TODOS_PAGE = "FETCH_TODOS_PAGE",
}

// типы для кажд. action (сторгго свои типы)
interface FetchTodosAction {
  // type: "FETCH_TODOS"; // ошб. - невозм. сравнить и не существ. в типе
  type: TodosActionTypes.FETCH_TODOS;
}
interface FetchTodosSuccessAction {
  type: TodosActionTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}
interface FetchTodosErrorAction {
  type: TodosActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}
interface FetchTodosPageAction {
  type: TodosActionTypes.FETCH_TODOS_PAGE;
  payload: number;
}

// объедин.типы action для кажд. action
export type TodosAction =
  | FetchTodosAction
  | FetchTodosSuccessAction
  | FetchTodosErrorAction
  | FetchTodosPageAction;
