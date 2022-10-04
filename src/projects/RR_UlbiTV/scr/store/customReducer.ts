// состояние по умолчанию
const defaultState = {
  // раб. с массивами
  custom: [],
};
// попытка исправ ошб. от composeWithDevTools - Ни одна перегрузка не соответствует этому вызову
// interface defStArr {
//   // раб. с массивами
//   custom: any[];
// }
// const defaultState: defStArr = {
//   // раб. с массивами
//   custom: [],
// };

// логика обработки сост. по state и action
const customReducer = (state: any = defaultState, action: any) => {
  switch (action.type) {
    case "ADD_CUSTOM":
      // ч/з спрет разворач стар.сост., обращ. к конкретн. полю и его изменяем
      return { ...state, cash: state.custom + action.payload };
    case "GET_CUSTOM":
      return { ...state, cash: state.custom - action.payload };
    default:
      return state;
  }
};
export { customReducer };
