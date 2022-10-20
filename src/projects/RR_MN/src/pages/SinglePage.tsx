// отдельн. динам. страница
import React, { useState, useEffect } from "react";
// хук useParams для раб. с парам. после /: (возращ.парам.)
// хук useNavigate для возврашение по странице (возвращ. fn)
import { Link, useParams, useNavigate } from "react-router-dom";
import { IPosts } from "../modals/modals";

const SinglePage = () => {
  // в Router.tsx>path можно задать много параметров. Например - /:id/:title , в строке поиска набрать BlogParam/знач1/знач2 и в cg это увидеть
  // console.log(useParams()); // {id: 'знач1', title: 'знач2'}

  // в перем. хук перехода по странице. Раб. с 2мя парам. 1ый куда переадрес., 2ой с 2ми опциями при ссылке(replase - флаг для пути, state - любой объ. доступ при переходе)
  const navigate = useNavigate();
  // вызов fn перехода в направлениях(по сылке(2 опции), цифре). Здесь на шаг назад
  const goBack = () => navigate(-1);

  // достаем передан. параметры
  const { id } = useParams();
  // масс.получ.данн. из fetch > usE
  const [post, setPost]: any = useState(null);
  // получ.данн.и запись json в state
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div className="SinglePage">
      {/* кнп. для перехода назад по маршруту */}
      <button className="goback" onClick={goBack}>
        Go back
      </button>
      <div className="SinglePage__descript">
        <h2>Блок descript</h2>
        {/* динамич используем параметры */}
        <p>{id}</p>
      </div>
      <div className="SinglePage__content">
        <h2>Блок content</h2>
        <div>
          {post && (
            <>
              <div>
                <p>
                  id - {post.id} | {post.userId} - userId
                </p>
                <h5>{post.title}</h5>
                <div>{post.body}</div>
              </div>
              {/* кнп. для страницы редактирования */}
              <section>
                <Link
                  style={{ textDecoration: "line-through" }}
                  // динамич. сылка с post из парам, id из выбора, item стран.редакт.
                  to={`/BlogParam/${id}/edit`}
                >
                  Измените этот пост
                </Link>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export { SinglePage };
