// 0.34. добав. repo в избран. Пробы раб. с обычн. reducerами
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 0.35. ключ для localStorage
const LS_FAV_KEY = "rfk";

// тип массив строк
interface GithubState {
  favorites: string[];
}

// нач.сост.
const initialState: GithubState = {
  favorites: [],
};

// созд методом createSlice const gitnubSlice
export const gitnubSlice = createSlice({
  name: "github",
  initialState,
  // Slice ~ как reducer но удобнее (нет измен объ., мутации и пр.)
  reducers: {
    // reducer добавл. в избран. Приним state = GithubState, action с тип PayloadAction с джейнериком типов данных string
    addFavorites(state, action: PayloadAction<string>) {
      // добав. ч/з обращ. к sate.favorites + добавить action.payload (строка хранящ. например в url repo т.к. уникальна)
      state.favorites.push(action.payload);
      // сохран с localStorage. 1ый ключ, приведен к строке
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites));
    },
    // метод удал из избран.
    remaveFavorites(state, action: PayloadAction<string>) {
      // удаляем ч/з фильтр
      state.favorites = state.favorites.filter((f) => f !== action.payload);
      // обнов localStorage
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites));
    },
  },
});
