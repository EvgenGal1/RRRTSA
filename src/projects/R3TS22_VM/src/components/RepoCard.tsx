// 0.29. карточка для вывода репозиториев usera
import React from "react";
import { IRepo } from "../modals/modals";

// карточка repo. получ repo, типы из Irepo
export function RepoCard({ repo }: { repo: IRepo }) {
  return (
    // структура и стили карточки
    <div className="border border-solid py-3 px-5 rounded mb-2 hover:shadow-md hover:border-dotted hover:bg-gray-100 translate-all">
      {/* // 0.32. открытие repo в отделн. окне по клик */}
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        <h2 className="text-lg font-bold ">{repo.full_name}</h2>
        <p className="text-sm">
          Вилки: <span className="font-bold mr-2">{repo.forks}</span>
          Наблюдатели: <span className="font-bold">{repo.watchers}</span>
        </p>
        {/* выводим если есть (?) */}
        <p className="text-sm font-thin">{repo?.description}</p>
      </a>
    </div>
  );
}
