// все actionCreator для польз-ей
// actionCreatorы `Создатель действий` (fn возвращ. объ. экшена) оптимизация передачи action в dispatch.

import { UserAction, UserActionTypes } from "../../types/usersT";
import { Dispatch } from "react";
import axios from "axios";

// actCreat для получ.данн. с сервера
export const fetchUsers = () => {
  // возвращ.нов.fn с парам. dispatch с типом UserAction
  return async (dispatch: Dispatch<UserAction>) => {
    // использ try/catch для отлова ошб.
    // ? loading true для отраж. загрузки...
    try {
      // Достать тип из перечисления типов
      dispatch({ type: UserActionTypes.FETCH_USERS });
      // логика запроса
      // перем.получ.данн. с запроса
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // эмитация долгой загрузки
      setTimeout(() => {
        // вызов dispatch с типом УСПЕХА, в payload передача тела данн. из ответа запроса
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (error) {
      // при ошб. передача типа ошибки
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Ошибка загрузки пользователей",
      });
    }
  };
};
