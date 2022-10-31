// все actionCreator для списка дел
// actionCreatorы `Создатель действий` (fn возвращ. объ. экшена) оптимизация передачи action в dispatch.

import { TodosAction, TodosActionTypes } from "../../types/todosT";
import { Dispatch } from "react";
import axios from "axios";

// actCreat для получ.данн. с сервера (приним № стр. и лимит со знач. по умолч.)
export const fetchTodos = (page = 1, limit = 10) => {
  // возвращ.нов.fn с парам. dispatch с типом TodoAction
  return async (dispatch: Dispatch<TodosAction>) => {
    // использ try/catch для отлова ошб.
    try {
      // при 1ом action - FETCH_TODOS
      dispatch({ type: TodosActionTypes.FETCH_TODOS });
      // логика запроса
      // перем.получ.данн. с запроса
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        { params: { _page: page, _limit: limit } }
        // постраничный вывод. передача стр. и лимита в строку для управл. загр.данн.
        // todos?_limit=2&_page=3 (2 эл. на 3ей стр. - 4,5 id)
      );
      // эмитация долгой загрузки
      setTimeout(() => {
        // вызов dispatch с типом УСПЕХА, в payload передача тела данн. из ответа запроса
        dispatch({
          type: TodosActionTypes.FETCH_TODOS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (error) {
      // при ошб. передача типа ошибки
      dispatch({
        type: TodosActionTypes.FETCH_TODOS_ERROR,
        payload: "Ошибка загрузки списка дел",
      });
    }
  };
};

// actCreat для имзен. № стр.(обычн.fn для разнообраз.). приним № стр., возвращ объ типа TodoAction
export function setTodosPage(page: number): TodosAction {
  // тип - PAGE, payload - приним.парам.
  return { type: TodosActionTypes.FETCH_TODOS_PAGE, payload: page };
}
