// reducer для отражения списка дел
import { TodosAction, TodosActionTypes, TodosState } from "../../types/todosT";

// сост. по умолч. + указ. тип
const initialState: TodosState = {
  // список польз-ей
  todos: [],
  // флаг загрузки
  loading: false,
  // поле ошибки
  error: null,
  page: 1,
  // кол-во на 1ой стр.
  limit: 10,
};

// reducer взаимодейств. со списком дел (приним state и action)
export const todosReducer = (
  state = initialState,
  action: TodosAction
): TodosState => {
  switch (action.type) {
    // case FETCH_TODO: // может падать в ошб. - невозм. сравнить и не существ. в типе (до перечисл.назв.тип.action)
    case TodosActionTypes.FETCH_TODOS:
      // возвращ. сост и loading делаем true
      return { ...state, loading: true };
    case TodosActionTypes.FETCH_TODOS_SUCCESS:
      // loading делаем false(данн.загружены), в todo данн. с сервера
      return { ...state, loading: false, todos: action.payload };
    case TodosActionTypes.FETCH_TODOS_ERROR:
      // loading делаем false(данн.загружены), в error данн. с сервера
      return { ...state, loading: false, error: action.payload };
    case TodosActionTypes.FETCH_TODOS_PAGE:
      // перрезапись номера стр.
      return { ...state, page: action.payload };
    // обязат. сост по умолч.
    default:
      return state;
  }
};
