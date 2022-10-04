import React, { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
import { useSearchUsersQuery } from "../store/github/github.api";

export function HomePage() {
  // 0.9. состояние/изменен. для поиска
  const [search, setSearch] = useState("");
  // 0.13. вызов хука задерки с передачей зависимости - search (отслеж. после остановки печать ч/з 700ms)
  const debounced = useDebounce(search);
  // 0.18. сост для выпад. списка по условию в useEff для очистки списка
  const [dropdown, setDropdown] = useState(false);
  // 0.5. использ. кастом. хук. в подсказе поля для раб с запросами {индикатор загрузки, ошибки при загрузке, получаемые данные}.
  // в хуке TS ошибка т.к. не передали параметры, исправ в github.api.ts
  // 0.6. временно передаём строку (EvGenGal), по которой будет идти поиск в пользователях
  // const { isLoading, isError, data } = useSearchUsersQuery("EvGenG");
  // 0.14. передаём строку зависимости debounced (поиск с задержкой после печати). и имя для data - users
  // до 0.15. получ. ошб. т.к. нет передачи нач-го парам., не известно что выдавать
  const {
    isLoading,
    isError,
    data: users,
  } = useSearchUsersQuery(
    debounced,
    // 0.15. передача объ. 2ым парам-ом в хук для настр. запроса
    // 0.15. `пропускать` - условие когда не делать запросы
    {
      // в строке поиска меньше 3 символов
      skip: debounced.length < 3,
      // 0.19.
      refetchOnFocus: true,
    }
  );
  // console.log(data);

  // 0.11. смотрим за измен. поиска. не оптимально - запрос на каждое нажатие
  useEffect(() => {
    //   console.log("search : " + search | debounced(из 0.12.));
    // }, [search]);
    // 0.18. условие видимости выпад.списка. е/и набор > 3 и ответ сервера > 0
    setDropdown(debounced.length > 3 && users?.length! > 0);
    // 0.13. следим за измен. `задержки` поиска и после setDropdown ещё за users
  }, [debounced, users]);
  return (
    <>
      {/* по БЭМ */}
      {/* <div className="r3ts22-vm--pages__home">  */}
      <div className="R3TS22_VM--pages__Home">
        <h2>HomePage</h2>
        {/* <p>+ console.log(data)</p> */}
        {/* 0.9. отражаем ошибку по условию, ввод поиска, вывод */}
        <div className="flex justify-center py-5 mx-auto ">
          {/* h-screen w-screen - убрал чтоб не вылазили из контейнера */}
          {isError && (
            <p className="text-center text-red-600">Что-то пошло не так</p>
          )}
          {/* 0.9. Livesearch - отражение поиска при наборе клвш. + dropdown - выпадающий список */}
          <div className="relative w-[560px]">
            <input
              type="text"
              className="border py-2 px-4 w-full h-[42px] mb-2"
              placeholder="Поиск имени пользователя GitHub..."
              // 0.10. отражение и изменение набора поиска
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* 0.16. dropdown. ранее был div с lorem, измен. на ul + условия + .overflow.list */}
            {/* 0.18. показ выпад.списка по условию е/и он есть. для скрытия после очистки набора */}
            {dropdown && (
              <ul className="list-none !important overflow-y-scroll top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
                {/* absolute - врем убрал для одинаковыз растояний пред/след блоков */}
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              sunt! */}
                {/* 0.17. при загрузке с сервера вывод Загрузка... */}
                {isLoading && <p className="text-center">Загрузка ...</p>}
                {/* 0.17. вывод список пользователей ч/з итерацию map и на каждого получен user возвращ li с key и вывод login  */}
                {users?.map((user) => (
                  <li
                    key={user.id}
                    className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                    style={{ listStyle: "none" }}
                  >
                    {user.login}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
