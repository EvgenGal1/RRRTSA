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

// отдел. константы
export const INCREMENT = "INCREMENT";
export const DICREMENT = "DICREMENT";

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

// оптимизация передачи action в dispatch.
export const incrementCreatorSg = () => ({ type: INCREMENT });
export const decrementCreatorSg = () => ({ type: DICREMENT });
