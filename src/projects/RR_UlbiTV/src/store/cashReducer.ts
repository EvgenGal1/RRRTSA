// состояние по умолчанию
// const defaultState: any = {
//   // раб. с числами
//   cashNum: 0,
// };
// попытка исправ ошб. от composeWithDevTools - Ни одна перегрузка не соответствует этому вызову
export interface defStNum {
  // раб. с массивами
  cashNum: number;
  // добавилось после сперехода не TS
  cashR: any;
}
const defaultState: defStNum = {
  //  раб. с числами
  cashNum: 0,
  // добавилось после сперехода не TS
  cashR: 0,
};

// логика обработки сост. по state и action
const cashReducer = (state = defaultState, action: any): defStNum => {
  switch (action.type) {
    case "ADD_CASH":
      // ч/з спрет разворач стар.сост., обращ. к конкретн. полю и его изменяем
      return { ...state, cashNum: state.cashNum + action.payload };
    case "GET_CASH":
      return { ...state, cashNum: state.cashNum - action.payload };
    default:
      return state;
  }
};
export { cashReducer };
