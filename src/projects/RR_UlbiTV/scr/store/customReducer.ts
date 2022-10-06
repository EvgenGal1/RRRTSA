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

// les4. рефакторинг типов(стр.значен.) выносов отдел. константы
const ADD_CUSTOM = "ADD_CUSTOM";
const REMOVE_CUSTOM = "REMOVE_CUSTOM";
// les5. + конст. для многих польз-лей
const ADD_MANY_CUSTOM = "ADD_MANY_CUSTOM";

// логика обработки сост. по state и action
export const customReducer = (
  state: any /* : Array<string> */ = defaultState,
  action: any
) => {
  switch (action.type) {
    // les5. + нов. action к thunk для добавл. кучи польз-лей
    case ADD_MANY_CUSTOM:
      // возвращ.нов.объ.сост.{}, ...разворач.стар.сост., измен/присвой.нов.масс.:[] где ...разворач.стар.масс. + ...масс. с сервера переданый ч/з action
      return { ...state, customArrs: [...state.customArrs, ...action.payload] };
    case ADD_CUSTOM:
      // les4. добавл. нов.польз-ля переданого ч/з action. ч/з спрет ...разворач.стар.масс., возвращ.нов.объ.: присваиваем нов.масс.[], где ...разворач.сущ-щий масс. + в конце объ.переданый ч/з action
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

// les4. оптимизация передачи action(отдотип.объ.) в dispatch. `Добавьте пользовательское действие` прост.fn возращ.объ. Парам. приним. данные. Вызов fn, передаём данные, возвращ.объ. с типом прописаного action и данными передаными в парам.
export const addCustomAction = (payload: any) => ({
  type: ADD_CUSTOM,
  payload,
});
export const removeCustomAction = (payload: any) => ({
  type: REMOVE_CUSTOM,
  payload,
});
// les5. fn() ~createAction к Many для оптимизации передачи action
export const addManyCustomAction = (payload: any) => ({
  type: ADD_CUSTOM,
  payload,
});
