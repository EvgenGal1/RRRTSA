// reducer для отражения списка польз-ей
import { UserAction, UserActionTypes, UserState } from "../../types/users";

// сост. по умолч. + указ. тип
const initialState: UserState = {
  // список польз-ей
  users: [],
  // флаг загрузки
  loading: false,
  // поле ошибки
  error: null,
};

// reducer взаимодейств. со списком пользователеё (приним state и action)
export const useReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    // case FETCH_USERS: // может падать в ошб. - невозм. сравнить и не существ. в типе (до перечисл.назв.тип.action)
    case UserActionTypes.FETCH_USERS:
      return { loading: true, error: null, users: [] };
    // case FETCH_USERS_SUCCESS:
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload };
    // case FETCH_USERS_ERROR:
    case UserActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };
    // обязат. сост по умолч.
    default:
      return state;
  }
};
