import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { fetchCount } from "./counterAPI";

export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  value: 0,
  status: "idle",
};

// Функция ниже называется Thunk и позволяет нам выполнять асинхронную логику.Это
// может быть отправлен как регулярное действие: `Dispatch (IncrementAsync (10))`.Этот
// позвонит Thunk с функцией `Dispatch` как первый аргумент.Асинхро
// затем можно выполнить код, а другие действия могут быть отправлены.Трюки есть
// обычно используется для выполнения асинхронных запросов.
export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount);
    // Значение, которое мы возвращаем
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // Поле `reductorы` позволяет определить редукторы и генерировать связанные действия
  reducers: {
    increment: (state) => {
      // Redux Toolkit позволяет нам написать «мультирной» логики в редукторах.Это
      // на самом деле не мутите государство, потому что он использует библиотеку Иммера,
      // который обнаруживает изменения в «проекте состояния» и производит совершенно новый
      // неизменное состояние на основе этих изменений
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Используйте тип PayloadAction, чтобы объявить содержимое `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  // Поле `extreareducers 'позволяет срезам действия, определяемые в другом месте,
  // включая действия, сгенерированные CreateAsyncthunk или в других ломтиках.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Функция ниже называется селектором и позволяет нам выбрать значение из
// state .Селекторы также могут быть определены в линии там, где они используются вместо
// в файле среза. Например: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;

// Мы также можем написать кусочки вручную, которые могут содержать как синхронизацию, так и асинхронную логику.
// Вот пример условного отправки действий на основе текущего состояния.
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };

export default counterSlice.reducer;
