import { UserAction, UserActionTypes, UserState } from "../../types/todo";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const useReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    // case FETCH_USERS:
    case UserActionTypes.FETCH_USERS:
      return { loading: true, error: null, users: [] };
    // case FETCH_USERS_SUCCESS:
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload };
    // case FETCH_USERS_ERROR:
    case UserActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};
