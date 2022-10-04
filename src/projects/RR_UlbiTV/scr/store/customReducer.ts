// состояние по умолчанию
const defaultState = {
  // раб. с массивами
  customArr: [],
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
      return { ...state, customArr: state.customArr + action.payload };
    case "GET_CUSTOM":
      return { ...state, customArr: state.customArr - action.payload };
    default:
      return state;
  }
};
export { customReducer };
