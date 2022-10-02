import React from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";

import { FirstPage } from "./src/pages/FirstPage";
import { SecondPage } from "./src/pages/SecondPage";
import { ThirdPage } from "./src/pages/ThirdPage";
// import { use  } from "react";
import "./RR_MN.scss";

export function RR_MN() {
  // const [, set] = use();
  return (
    <div className="RR_MN">
      <b>перед Link в RR_MN 0</b>
      <div>
        {/* <Link to="firstPage">1</Link> */}
        <ul>
          <li>
            <Link to="/FirstPage">FirstPage link</Link>
          </li>
          <li>
            <Link to="/SecondPage">NavLink и его кастомизация</Link>
          </li>
          <li>
            <Link to="/ThirdPage">ThirdPage link</Link>
          </li>
        </ul>
      </div>
      <b>после Link в RR_MN 1</b>
      <div>
        <div>
          <h1>RR_MN</h1>
          <p>
            По видео "React Router 6" -
            https://www.youtube.com/watch?v=U7c7k-NBtQg
          </p>
          <h2>Есть несколько подходов для отражения вложеных страниц</h2>
          <ul>
            <li>Без Outlet</li>
            <li>Outlet - описать предыдущ видео</li>
            <li></li>
            <li></li>
          </ul>
        </div>
        {/* <br /> */}
        <p>
          Сейчас есть два варианта - <span>RR_MN</span> и{" "}
          <span>users/R3TS22_VMVlos</span>
        </p>
        <p>
          Сейчас в <b>Routes</b> все обёрнуто в <b>Layout</b> - сбор больших
          файлов, anim и <b>Outlet</b>
        </p>
        <div>
          <h2>RR_MN</h2>
          <p>
            В Router.tsx отдельн подкл Route.RR_MN и его вложен. стр. рядом
            ниже. С обёртк Layout можно <span>path без/со слешами</span>. В файл
            RR_MN прописаны Link.
          </p>
          <p>
            В header(Navigation) ссылки на дочки рядом с родителем. Клик по
            робителю - переходит в родителя. По дочке - сразу на стр. дочки.{" "}
          </p>
          <p>
            В родителе RR_MN отражены ссылки{" "}
            <span>
              Link с <b>to="/Page</b> без слеша
            </span>
            . Клик по ним <span>переход только в дочку</span>.
          </p>
          {/* <p></p> */}
        </div>
        <div>
          <h2>Users/Users2</h2>
          <p>
            В Router.tsx вложен. стр. можно подкл. 2 способами. Вкладывать Route
            дочек тут же в родителя а Link в отдельн. fn|файл (
            <span>Users2</span>) или Route рядом, а Link объедин. в отдельн.
            fn|файл(<span>Users</span>).
          </p>
          <p>
            Во втором варике путь к дочкам усил. звездой
            <span>
              <b>path="Users/*"</b>
            </span>
            . В файле Users Link и Routes.Route
          </p>
          <p>В header(Navigation) всё аналогично</p>
          <p>
            В родителе Users отражены ссылки{" "}
            <span>
              Link с <b>to="Page</b> со слешем
            </span>
            . Клик по ним <span>подгружает дочку ниже родителя</span>. Route без
            слеша
          </p>
        </div>
        <div>
          <h2>Выбор </h2>
          <p>Какой вариант лучше пока не понятно.</p>
          <p>
            В перевом варике (<b>RR_MN</b>) в родителе{" "}
            <b>откр. дочек на отдельных страницах</b>
          </p>
          <p>
            Во втором варике (<b>Users</b>) в родителе{" "}
            <b>подгрузка дочек ниже стр.</b>
          </p>
        </div>
      </div>
      <b>перед Routes в RR_MN 0</b>
      {/* для вложенности в Routes. Отражает страницы вместе с данными вверху */}
      <Routes>
        <Route path="/FirstPage" element={<FirstPage />} />
        <Route path="/SecondPage" element={<SecondPage />} />
        <Route path="/ThirdPage" element={<ThirdPage />} />
      </Routes>
      <b>после Routes в RR_MN 1</b>
    </div>
  );
}
