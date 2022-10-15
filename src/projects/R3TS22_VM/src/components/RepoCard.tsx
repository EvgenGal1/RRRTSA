// 0.29. карточка для вывода репозиториев usera
import React, { useState } from "react";
import { IRepo } from "../modals/modals";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

// карточка repo. получ repo, типы из Irepo
export function RepoCard({ repo }: { repo: IRepo }) {
  // 0.45. вызов хука с возможностью посмотреть доступные методы в {}
  const { addFavorite, remaveFavorites } = useActions();

  // 0.51. получ данн. из store для действий с ними (наприм. удалить)
  const { favorites } = useAppSelector((state) => state.githubR);
  // флаг проверки ч/з State есть ли эл. в масс.избран.
  const [isFav, setIsFav] = useState(favorites.includes(repo.html_url));

  // 0.44. добав в избран. с приёмом event с типами
  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    // откл. настр. по умолч.
    event.preventDefault();
    // 0.46. вызов метода с передачей парам. для уник.id сохраняего репозитория (здесь перед/сохр url)
    addFavorite(repo.html_url);
    // в DevTools.Redux.Diff.Tree при клик на repo видно добавл. в избр. Так же в DT.Application.LS видно все repo добавл. в избан. После обнов.стр. в DT.Redux.State.Tree|Raw видно избр.
    // 0.53. измен. state для измен кнп. после клик (добав в избр.)
    setIsFav(true);
  };
  // 0.50. удал. из избран. с приёмом event с типами
  const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    remaveFavorites(repo.html_url);
    // 0.53. измен. state для измен кнп. после клик (удал в избр.)
    setIsFav(false);
  };
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
        {/* // 0.52. условие отраж. кнп. (2 вар) е/и в store есть данный repo */}
        {isFav ? (
          // 0.49. кнп. удал. из избран.
          <button
            className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
            onClick={removeFromFavorite}
          >
            Удалить
          </button>
        ) : (
          // 0.43. кнп добав. в избран. и стили
          <button
            className="py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all"
            onClick={addToFavorite}
          >
            Добавить
          </button>
        )}
        {/* условие отраж. кнп. (1 вар)
        {!isFav && <button/>}
        {isFav && <button/>} */}
      </a>
    </div>
  );
}
