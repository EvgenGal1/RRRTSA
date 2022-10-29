import React from "react";
// import { useSearchUsersQuery } from "../store/github/github.api";

export function OutletOpt() {
  // const [, set] = use();
  return (
    <div className="RR_MN OutletOpt">
      <h1>Разметка и комп. Outlet</h1>
      {/* <h2>Автоподсветка NavLink</h2> */}

      <div>
        <h2>Есть несколько подходов для отражения вложеных страниц</h2>
        <ul>
          <li>
            <span>Без Outlet</span>
          </li>
          <li>
            <span>Outlet</span> - описать предыдущ видео
          </li>
        </ul>
        <p>
          Сейчас есть два варианта - <span>RR_MN</span> и{" "}
          <span>users/R3TS22_VMVlos</span> <b>(последний удалён)</b>
        </p>
        <p>
          Сейчас в <b>Routes</b> все обёрнуто в <b>Layout</b> - сбор главных
          файлов шаблона, anim и <b>Outlet</b>
        </p>
      </div>
      <div>
        <h2>RR_MN</h2>
        <p>
          В Router.tsx отдельн подкл Route.RR_MN и его вложен. стр. рядом ниже.
          С обёртк Layout можно <span>path без/со слешами</span>. В файл RR_MN
          прописаны Link.
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
        <p>
          <b>Выбран Outlet/Users подход</b>
        </p>
        {/* <p></p> */}
      </div>
      <div>
        <h2>Users/Users2</h2>
        <p>
          В Router.tsx вложен. стр. можно подкл. 3 способами. Прописывать Route
          дочек рядом с родителем (1 подход). Вкладывать Route дочек тут же в
          родителя (архит.приятно) или Route рядом, а Link объедин. в отдельн.
          fn|файл(не понял зачем).
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
        <h2>Особенности</h2>
        <p>
          К родителю вложенных Route прописывается путь со *{" "}
          <span>path="RR_MN/*"</span>
        </p>
        <section>
          <p>
            Если в Router.tsx <span>дочки рядом с родителем</span>, то в файле
            родителя путь в NavLink имеет след.логику:
          </p>
          <ul>
            <li>
              <span>to="</span> - дочка <b>откр. в родителе</b>
            </li>
            <li>
              <span>to="/</span> - переход <b>в дочку</b>
            </li>
          </ul>
        </section>
        <section>
          <p>
            Если в Router.tsx <span>дочки вложены в родителя</span>, то в файле
            родителя путь в NavLink имеет след.логику:
          </p>
          <ul>
            <li>
              <span>to="</span> - дочка <b>откр. в родителе</b>
            </li>
            <li>
              <span>to="/</span> - <b>ломается</b> переход
            </li>
          </ul>
        </section>
        <div>
          <p>
            При вложеных Rout в Router.tsx, в Heder.tsx подкл сылок дочек вместе
            с путём робителя и в дочке комент Routes и вкл Outlet - переход в
            родителе загружает дочку в родителя, при переходе в дочку Header
            также загружает дочку в родителя. Т.е. отдельной страницы для дочки
            нет. Пока так разобрался
          </p>
        </div>
      </div>
      <div>
        <h2>Выбор подхода</h2>
        <p>
          Какой подход лучше пока не понятно. Выбрал пока <b>Outlet</b>
        </p>
        <p>
          В перевом подходе (<b>Без Outlet</b>) в родителе{" "}
          <b>откр. дочек на отдельных страницах</b>
        </p>
        <p>
          Во втором варике (<b>Outlet</b>|<b>RR_MN</b>) в родителе{" "}
          <b>подгрузка дочек ниже стр.</b>
        </p>
      </div>
    </div>
  );
}
