import React from "react";
import { useSearchUserQuery } from "./src/store/github/github.api";

export function R3TS22_VM() {
  // 0.5. использ. кастом. хук. в подсказе поля для раб с запросами {индикатор загрузки, ошибки при загрузке, получаемые данные}.
  // в хуке TS ошибка т.к. не передали параметры, исправ в github.api.ts
  // 0.6 временно передаём строку (EvGenGal), по которой будет идти поиск в пользователях
  const { isLoading, isError, data } = useSearchUserQuery("EvGenG");
  console.log(data);
  return (
    <>
      <div className="R3TS22_VM">
        <div>R3TS22_VM</div>
        <div>
          По видео "React стек 2022. TypeScript, Redux Toolkit, RTKQuery,
          Tailwind" - https://www.youtube.com/watch?v=lkbm-zlcFvs
        </div>
      </div>
    </>
  );
}
