// объединённые actionCreator
import * as UserActionCreators from "./usersActCreat";
import * as TodosActionCreators from "./todosActCreat";

// возвращ. объ.объедан.actionCreator
export default {
  ...UserActionCreators,
  ...TodosActionCreators,
};
