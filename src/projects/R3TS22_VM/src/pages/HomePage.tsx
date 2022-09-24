import React from "react";
import { useSearchUserQuery } from "../store/github/github.api";

export function HomePage() {
  // 0.5. использ. кастом. хук. в подсказе поля для раб с запросами {индикатор загрузки, ошибки при загрузке, получаемые данные}.
  // в хуке TS ошибка т.к. не передали параметры, исправ в github.api.ts
  // 0.6 временно передаём строку (EvGenGal), по которой будет идти поиск в пользователях
  const { isLoading, isError, data } = useSearchUserQuery("EvGenG");
  console.log(data);
  return (
    <>
      <div>HomePage</div>
      <p>+ console.log(data)</p>
    </>
  );
}
