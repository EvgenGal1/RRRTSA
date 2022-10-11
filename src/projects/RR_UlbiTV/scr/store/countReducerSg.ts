// les6. логика раб. счетчика

// ???
interface defStNumSg {
  // раб. с массивами
  counNumSg: number;
}
// состояние по умолчанию
const defaultState: defStNumSg = {
  //  раб. с числами
  counNumSg: 0,
};

// отдел. константы с типами экшенов
export const INCREMENT = "INCREMENT";
export const DICREMENT = "DICREMENT";
// les6.
export const ASYNC_INCREMENT = "ASYNC_INCREMENT";
export const ASYNC_DICREMENT = "ASYNC_DICREMENT";

// логика обработки сост. по state и action
export const countReducerSg = (state = defaultState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      // ч/з спрет разворач стар.сост., обращ. к конкретн. полю и его изменяем
      return { ...state, counNumSg: state.counNumSg + 1 };
    case DICREMENT:
      return { ...state, counNumSg: state.counNumSg - 1 };
    default:
      return state;
  }
};

// actionCreatorы `Создателb действий` (fn возвращ. объ. экшена) оптимизация передачи action в dispatch.
export const incrementCreatorSg = () => ({ type: INCREMENT });
export const decrementCreatorSg = () => ({ type: DICREMENT });
// les6.
export const asyncIncrementCreatorSg = () => ({ type: ASYNC_INCREMENT });
export const asyncDecrementCreatorSg = () => ({ type: ASYNC_DICREMENT });
