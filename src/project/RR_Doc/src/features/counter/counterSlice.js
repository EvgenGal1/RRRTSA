// срез состояния Redux
import { createSlice } from "@reduxjs/toolkit";

// Вызов createSlice со строковым именем, начальным состоянием и именованными функциями редуктора
export const counterSlice = createSlice({
  // строковое имя
  name: "counter",
  // начальное состояние
  initialState: {
    value: 0,
  },
  // именованные функции. Функции редуктора могут «мутировать» состояние, используя Immer.
  reducers: {
    increment: (state) => {
      // Redux Toolkit позволяет нам писать «мутирующая» логика в редукторах.Это
      // на самом деле не мутите государство, потому что он использует библиотеку Иммера,
      // который обнаруживает изменения в «проекте состояния» и производит совершенно новый
      // неизменное состояние на основе этих изменений
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Создатели действий генерируются для каждой функции редуктора случая
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Функция ниже называется Thunk и позволяет нам выполнять асинхронную логику.Это
// может быть отправлен как регулярное действие: `dispatch (incrementAsync (10))`.Этот
// позвонит Thunk с функцией `Dispatch` как первый аргумент.Асинхро
// затем можно выполнить код, а другие действия могут быть отправлены
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// функция ниже называется селектором и позволяет нам выбрать значение из
// штат.Селекторы также могут быть определены в линии там, где они используются вместо
// в файле среза.Например: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
