// les6. раб. с польз-ми. Получ. асинхр с сервера

// ???
interface defStArrSg {
  // раб. с массивами
  userArrSg: any[];
}
// состояние по умолчанию
const defaultState: defStArrSg = {
  //  раб. с числами
  userArrSg: [],
};

// отдел. константы
export const SET_USERS = "SET_USERS";
// les6.
export const FETCH_USERS = "FETCH_USERS";

// логика обработки сост. по state и action
export const usersReducerSg = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_USERS:
      // ч/з спрет разворач стар.сост., обращ. к конкретн. полю и его изменяем
      return { ...state, userArrSg: action.payload };
  }
  return state;
};

// actionCreatorы `Создателb действий` (fn возвращ. объ. экшена). оптимизация передачи action в dispatch.
export const setUsers = (payload: any) => ({ type: SET_USERS, payload });
// les6.
export const fetchUsers = () => ({ type: FETCH_USERS });
