import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IPosts } from "../modals/modals";
// {
//   "userId": 2,
//   "id": 12,
//   "title": "in quibusdam tempore odit est dolorem",
//   "body": "itaque id aut magnam\npraesentium "
//   },

export function BlogParam() {
  // стат.для accordion|spoiler
  const [openClass, setOpenClass] = useState("section");

  // масс.получ.данн. из fetch > usE
  const [posts, setPosts] = useState<IPosts[]>([]);
  // получ.данн.и запись json в state
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <div className="RR_MN BlogParam">
        <div className={`BlogParam__descript ${openClass}`}>
          <h1
            onClick={() =>
              setOpenClass(openClass === "section" ? "section open" : "section")
            }
          >
            Параметры в ссылка
          </h1>
          <div>
            <p>
              Загрузка списка новостей и отдельную новость выводить на отдельную
              динамическую страницу
            </p>
          </div>
          <div>
            <h2>Динамическое формирование ссылок и работа с ними</h2>
            <h2>В Router.tsx</h2>
            <p>
              ++ копия <b>Route</b> от которого будет{" "}
              <span>отдельная динамическая страница</span>
            </p>
            <p>
              В <b>path</b> после основного пути + <span>/:</span>
              <b>id</b> для парам.(любое кол-во, здесь id), в <b>element</b>{" "}
              отдельн. компонент
            </p>
            <p>
              Параметров может быть большое количество. зависит от необходимости
              - <span>/:id/:title/:text</span>
            </p>
          </div>
          <div>
            <h2>В родителе</h2>
            <p>
              Можно сделать простой <b>fetch</b> запрос ч/з <b>useEff</b> с
              сохр. данных в <b>useSt</b> и распарсить их через <b>map</b> в
              структуру <b>Link</b>
            </p>
            <p>
              Сохр. в массив. Пример на TS с джейнериком interface -{" "}
              <span>
                const [posts, setPosts] = useState&lt;IPosts[]&gt;([]);
              </span>
            </p>
            <p>
              Путь указать динамический -{" "}
              <span>to=&#123;`/BlogParam/$&#123;post.id&#125;`&#125;</span>
            </p>
          </div>
          <div>
            <h2>В дочке</h2>
            <p>
              В дочке <span>SinglePage</span>
              подкл.спец.хук <span>useParams</span> для возврата параметров
            </p>
            <p>
              Достаём передан.парам. -{" "}
              <span>const &#123;id&#125; = useParams();</span>
            </p>
            <p>
              Загр./Сохр. даннные ч/з <b>fetch</b>&gt;<b>useEff</b>&gt;
              <b>useSt</b> только уже для одного эл. Концовка в <b>fetch</b> -{" "}
              <span>posts/$&#123;id&#125;`</span>, в <b>state</b> -{" "}
              <span>useState(null);</span>
              <p>
                использ.парам., можно сразу с условием -{" "}
                <span>
                  &#123;post &&
                  (&lt;div&gt;&#123;post.title&#125;&lt;/div&gt;)&#125;
                </span>
              </p>
            </p>
          </div>
          <div>
            <h2>Route для редактирования страниц</h2>
            <p>
              ++ копия <b>Route</b> от которого будет{" "}
              <span>завязана страница редактирования</span>
            </p>
            <p>
              В <b>path</b> после основного пути + <span>/:id</span>
              (привязка к выгрузке id), далее назв.стр.радакт.{" "}
              <span>/edit</span>, в <b>element</b> отдельн. компонент
            </p>
            <p>
              В дочке <b>SinglePage</b> добавл. ссылку на стран.редакт. с
              динамич. путём -{" "}
              <span>to=&#123;`/BlogParam/$&#123;id&#125;/edit`&#125;</span>
            </p>
            <p>
              Динамич. сылка с <b>BlogParam</b> (родит.), <b>id</b> (из парам),{" "}
              <b>item</b>
              (стран.редакт.)
            </p>
            <p>
              В стран.радакт. <span>EditPost.tsx</span> загруж.парам. <b>id</b>{" "}
              ч/з хук <b>useParams</b>
            </p>
          </div>
          <div>
            <h2>Route для создания страниц</h2>
            <p>
              ++ копия <b>Route</b> от которого будет срабатывать{" "}
              <span>разный набор после /</span>
            </p>
            <p>
              В <b>path</b> после основного пути + <span>/</span>
              <b>name</b> (любое имя, это уже <b>не параметр</b>), в{" "}
              <b>element</b> отдельн. компонент
            </p>
            <p>
              При наборе в адрес.строке после основ.адреса слэш и любой набор -
              приведёт на <b>CreatePost.tsx</b>
            </p>
            <p>
              Раб. только прямой странице дочки /BlogParam. На родителе
              RR_MN/BlogParam не работает, сброс на родителя
            </p>
          </div>
        </div>
        <div className="BlogParam__content">
          <h2>Загрузка данных с запроса в content</h2>
          <div>
            {/* перебор данн. с запроса */}
            {posts.map((post) => (
              // отрисовка в Link для переходов м/у стр.
              <Link
                key={post.id}
                // динам путь. 1ая часть постоянная, 2ая динам., зависит от парам. (id,title и пр.)
                to={`/BlogParam/${post.id}`}
              >
                <li>{post.title}</li>
                {/* <p>{post.body}</p> */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
