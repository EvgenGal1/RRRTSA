import { AnchorHTMLAttributes, DetailedHTMLProps, useState } from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IRepo } from "../modals/modals";

interface Props
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  display: boolean;
  preventDefault: () => void;
}

export function FavoritesPage() {
  // export function FavoritesPage({ repo }: { repo: IRepo }) {
  // 0.47. в const получ. все эл. из store по кастом.хуку из state.githubR
  const { favorites } = useAppSelector((state) => state.githubR);
  // е/и favorites пусто то верн. прост строку с инфо.
  if (favorites.length === 0) {
    return <p className="text-center">Нет элементов</p>;
  }
  return (
    <>
      <h2>FavoritesPage</h2>
      {/* // 0.48. вывод на стр. избр. */}
      <div className="flex justify-center py-5 mx-auto">
        <ul>
          {/* key и ссылка это всё url */}
          {favorites.map((f) => (
            <li key={f}>
              <a href={f} target="_blank" rel="noreferrer">
                {f}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
