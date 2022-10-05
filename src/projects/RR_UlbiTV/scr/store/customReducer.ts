// состояние по умолчанию
const defaultState = {
  // раб. с массивами
  customArrs: [],
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
const customReducer = (
  state: any /* : Array<string> */ = defaultState,
  action: any
) => {
  switch (action.type) {
    case "ADD_CUSTOM":
      // let4. добавл. нов.польз-ля переданого ч/з action. ч/з спрет ...разворач.стар.масс., возвращ.нов.объ.: присваиваем нов.масс.[], где ...разворач.сущ-щий масс. + в конце объ.переданый ч/з action
      return { ...state, customArrs: [...state.customArrs, action.payload] };
    case "REMOVE_CUSTOM":
      // удаляем польз-ля переданого ч/з action. ...разворач.сост., получ.нов.объ.: масс. фильтруем(возвращ.нов.масс.) и получ. нов.объ. где id.кл. = id.переданого, не попадает в нов.масс.
      return {
        ...state,
        customArrs: state.customArrs.filter(
          (customArr: any) => customArr.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export { customReducer };
