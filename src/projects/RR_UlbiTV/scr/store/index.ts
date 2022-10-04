import { legacy_createStore as createStore } from "redux";

// состояние по умолчанию
const defaultState = {
  cash: 0,
};

// логика обработки сост. по state и action
const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "ADD_CASH":
      // ч/з спрет разворач стар.сост., обращ. к конкретн. полю и его изменяем
      return { ...state, cash: state.cash + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

// создан. store
const store = createStore(reducer);

export { store /* defaultState, cash */ };
