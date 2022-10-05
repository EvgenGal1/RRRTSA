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

// let4. рефакторинг типов(стр.значен.) выносов отдел. константы
const ADD_CUSTOM = "ADD_CUSTOM";
const REMOVE_CUSTOM = "REMOVE_CUSTOM";

// логика обработки сост. по state и action
export const customReducer = (
  state: any /* : Array<string> */ = defaultState,
  action: any
) => {
  switch (action.type) {
    case ADD_CUSTOM:
      // let4. добавл. нов.польз-ля переданого ч/з action. ч/з спрет ...разворач.стар.масс., возвращ.нов.объ.: присваиваем нов.масс.[], где ...разворач.сущ-щий масс. + в конце объ.переданый ч/з action
      return { ...state, customArrs: [...state.customArrs, action.payload] };
    case REMOVE_CUSTOM:
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

// let4. оптимизация передачи action(отдотип.объ.) в disath. `Добавьте пользовательское действие` прост.fn возращ.объ. Парам. приним. данные. Вызов fn, передаём данные, возвращ.объ. с типом указаного action и данными передаными в парам.
export const addCustomAction = (payload: any) => ({
  type: ADD_CUSTOM,
  payload,
});
export const removeCustomAction = (payload: any) => ({
  type: REMOVE_CUSTOM,
  payload,
});
