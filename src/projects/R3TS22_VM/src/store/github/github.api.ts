// 0.4. настройка API для раб. с поиском
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser, ServerResponse } from "../../modals/modals";
// 0.4. при import fn из redux, добавл префикс /react для генерации хуков

// 0.4. экпорт конст githubApi, созд API ч/з fn createApi
export const githubApi = createApi({
  // 0.4. строка с адресом хранения кэш данных по API
  reducerPath: "github/api",
  // 0.4. парам 'базовый запрос' инициализируем с помощью fn'принесите базовый запрос' в котрую передаём объ. с парам baseUrl (один базовый url для всей API для запросов)
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  // 0.19.
  refetchOnFocus: true,
  // 0.4. 'конечные точки' это fn приним парам build(`строить`). возвращ объ. с перечислением всех конеч.точек
  endpoints: (build) => ({
    // 0.4. получ. список пользователей (searchUser назв.). ключ объ.: с build формир запрос (метод query - запросы/получене данных, mutation - изменения)
    // searchUser: build.query({
    // 0.5. указ типизацию. 2 дженерика. 1ый - ответ от сервера(врем. any), 2ой - принимаемый параметр для осущест. запроса (здесь string получаемая в query)
    // searchUser: build.query<any, string>({
    // 0.7. указ 1ый джейн. - ServerResponse + передача ожидания <IUser>
    // searchUser: build.query<ServerResponse<IUser>, string>({
    // 0.7. после transformResponse меняем ожидание на массив IUsers
    searchUsers: build.query<IUser[], string>({
      // 0.4. передаём объ. с описанием запроса (либо объ. как здесь, либо строкой ("search/users" стр. конкотенируется с baseUrl))
      // 0.5. явно указ. тип поиска - строка
      query: (search: string) => ({
        // 0.4. детальная настр. в объ.
        url: "search/users",
        // 0.5. параметры запроса
        params: {
          // 0.5. св-во q равно search
          q: search,
          // 0.6. лимит ответа с сервера
          per_page: 10,
        },
      }),
      // 0.7. колбэк для трансформ. данных из ответа
      transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
  }),
});

// 0.4. при обращении `const {} = githubApi`, в скобках (подсказка ctrl+пробел) видно автосгенерированй кастомный хук(useSearchUsersQuery). Генерация зависит от настроек endpoints
export const { useSearchUsersQuery } = githubApi;
