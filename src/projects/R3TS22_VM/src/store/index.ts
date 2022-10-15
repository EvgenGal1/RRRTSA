// 0.3. настр. store(`Хранилище`)
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { githubApi } from "./github/github.api";
import { githubReducer } from "./github/github.slice";

// 0.3. экспорт конст store созд. ч/з fn()configureStore(`настройка Хранилища`)
export const store = configureStore({
  // 0.3. пока 1 св-во с перечислением всех reducerы приложения
  reducer: {
    // 0.4. [ключ]: значение - хранит данные API. значение - регистрация
    [githubApi.reducerPath]: githubApi.reducer,

    // 0.38. регистр. reducer в store
    githubR: githubReducer,
  },
  // 0.8. парам `промежуточное ПО`: получ метод getDefaultMiddleware, возвращ вызом метода получая массив + конкат (сливаем вместе) с middleware от githubApi
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

// 0.19. расшир.настр. для refetchOnFocus `переориентироваться на фокусе`
setupListeners(store.dispatch);

// 0.39. корректн. настр. типизации при экспорт спец.типа. Кастом. типы для поним. данных
export type RootState = ReturnType<typeof store.getState>;
