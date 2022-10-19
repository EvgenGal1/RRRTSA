import React from "react";
// import { useSearchUsersQuery } from "../store/github/github.api";

export function NavAndLink() {
  // const [, set] = use();
  return (
    <div className="RR_MN NavLink">
      <h1>NavLink и его кастомизация</h1>
      <div>
        <h2>Автоподсветка NavLink</h2>
        <p>
          Cсылки <em>Link</em> заменяем на <em>NavLink</em>. К активной ссылке
          авто добавляется .active. Стилизуем клас
        </p>
      </div>
      <div>
        <h2>Свой класс</h2>
        <p>
          В <em>NavLink</em> + props{" "}
          <em>
            className=&#123;(&#123; <b>здесь ctrl + пробел для подсказки</b>
            &#125;) =&gt; <b>КОД</b> &#125;.
          </em>
        </p>
        <p>
          Props приним. стр. и fn. В fn есть объ. с парам. Парам isActive
          проверяет актив. ссылку, в КОД можно прописать условие.
        </p>
        <div>
          Например:{" "}
          <span>
            className=&#123;(&#123;isActive&#125;) =&gt; isActive ?
            'active-prob' : ''&#125;
          </span>
          . У себя откл., долго прописывать классы
        </div>
      </div>
      <div>
        <h2>Отдельная переменная</h2>
        <p>При большом кол-ве ссылок, fn можно вынести в перем.</p>
        <div>
          Пример: <br />
          Перем.:{" "}
          <span>
            const setAct = (&#123;isActive&#125;) =&gt; isActive ? 'active-prob'
            : ''
          </span>
          <br />
          тег : <span>className=&#123;setAct&#125;</span>
        </div>
      </div>
      <div>
        <h2>Свои стили</h2>
        <p>
          style приним. объ. В него можно передать fn. Fn так же может принять
          объ. с парам., но обязат. возвращает объ.{" "}
        </p>
        <div>
          Например:{" "}
          <span>
            style=&#123;(&#123;isActive&#125;) =&gt (&#123;color: isActive ?
            'var(--color-activ)' : 'white'&#125;)&#125;
          </span>
          .{" "}
          <p>
            Е/и ссылка активна, принм. цвет из перемен. var, иначе белый. Можно
            вынести в отдел. перем.
          </p>
        </div>
      </div>
      <div>
        <h2>Кастомный Link</h2>
        <p>
          + comp <span>CuctomLink.jsx</span> - настор. своих зависимостей/стилей
          ч/з хук <span>useMatch</span>. подробнее там
        </p>
        <p>импорт по месту использ и замена Link на CustomLink</p>
      </div>
    </div>
  );
}
