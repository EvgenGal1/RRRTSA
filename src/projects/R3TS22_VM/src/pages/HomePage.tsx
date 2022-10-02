import React, { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
import { useSearchUsersQuery } from "../store/github/github.api";

export function HomePage() {
  // 0.9.
  const [search, setSearch] = useState("");
  // 0.12.
  const debounced = useDebounce(search);
  // 0.16.
  const [dropdown, setDropdown] = useState(false);
  // 0.5. использ. кастом. хук. в подсказе поля для раб с запросами {индикатор загрузки, ошибки при загрузке, получаемые данные}.
  // в хуке TS ошибка т.к. не передали параметры, исправ в github.api.ts
  // 0.6. временно передаём строку (EvGenGal), по которой будет идти поиск в пользователях
  // const { isLoading, isError, data } = useSearchUsersQuery("EvGenG");
  // 0.13.
  const {
    isLoading,
    isError,
    data: users,
  } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    // 0.18.
    refetchOnFocus: true,
  });
  // console.log(data);

  // 0.10.
  useEffect(() => {
    //   console.log("search : " + search | debounced(из 0.12.));
    // }, [search]);
    // 0.17.
    setDropdown(debounced.length > 3 && users?.length! > 0);
    // 0.12.
  }, [debounced, users]);
  return (
    <>
      {/* по БЭМ */}
      {/* <div className="r3ts22-vm--pages__home">  */}
      <div className="R3TS22_VM--pages__Home">
        <h2>HomePage</h2>
        {/* <p>+ console.log(data)</p> */}
        {/* 0.8. */}
        <div className="flex justify-center py-5 mx-auto ">
          {/* h-screen w-screen - убрал чтоб не вылазили из контейнера */}
          {isError && (
            <p className="text-center text-red-600">Что-то пошло не так</p>
          )}
          <div className="relative w-[560px]">
            <input
              type="text"
              className="border py-2 px-4 w-full h-[42px] mb-2"
              placeholder="Поиск имени пользователя GitHub..."
              // 0.9.
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* 0.14. ранее был div с lorem, измен. на ul + условия + .overflow.list */}
            {/* 0.16. */}
            {dropdown && (
              <ul className="list-none overflow-y-scroll top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
                {/* absolute - врем убрал для одинаковыз растояний пред/след блоков */}
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              sunt! */}
                {/* 0.15. */}
                {isLoading && <p className="text-center">Загрузка ...</p>}
                {users?.map((user) => (
                  <li
                    key={user.id}
                    className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
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
