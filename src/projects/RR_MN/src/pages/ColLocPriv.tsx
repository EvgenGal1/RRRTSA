const ColLocPriv = () => {
  return (
    <div className="ColLocPriv">
      <div className="ColLocPriv__descript">
        <div>
          <h1>История, Локация, Приваты</h1>
        </div>
        <div>
          <h2>Переход по маршруту</h2>
          <p>
            На странице подкл. хук <span>useNavigate</span> для возврашение по
            странице (возвращ. fn)
          </p>
          <p>
            Хук раб. с 2мя парам. 1ый genm переадрес., 2ой с 2ми опциями при
            ссылке
          </p>
          <p>
            Опции при ссылке. replase - флаг для пути, state - любой объ. доступ
            при переходе
          </p>
          <p>
            В Комп. записываем вызов хука в переменную -{" "}
            <span>const navigate = useNavigate();</span>
          </p>
          <p>
            Вызов fn перехода в направлениях(по сылке(2 опции), цифре). Здесь на
            шаг азад
          </p>
          <p>
            <span>const goBack = () =&gt; navigate(-1);</span>
          </p>
        </div>
        <div>
          <h1>
            Далее код не прописан, буду брать то что нужно, опишу по нужде, темы
            по времени
          </h1>
          <p>
            <a
              href="https://www.youtube.com/watch?v=jv0ckzkKYzU&list=PLiZoB8JBsdznY1XwBcBhHL9L7S_shPGVE&index=5"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "line-through" }}
            >
              Работа с историей, локацией и приватными роутами
            </a>
          </p>
        </div>
        <div>
          <h2>Переадресация</h2>
          <p>6:15</p>
          <p>
            Переадресация на др.стр. (новую,авториз.,) добавляя в Route.element
            спец.комп. <span>Navigate</span> с путём
          </p>
          <p>
            <span>
              &#123;Route path="OldPage" element=&#123;&lt;Navigate
              to="/NewPage" /&gt;&#125;
            </span>
          </p>
        </div>
        <div>
          <h2>Объ. Локации</h2>
          <p>7:40</p>
          <p>
            Подкл. хук <span>useLocation</span>
          </p>
          <p>
            Содоржит полезн.парам. - <b>hash</b>, <b>key</b>, <b>pathname</b>,{" "}
            <b>search</b>, <b>state</b>, ...
          </p>
        </div>
        <div>
          <h2>Приватные Routerы</h2>
          <p>9:40</p>
          <p>
            Файковое логирования + 2 hoc + 1 hook + стр. авторизации + общая
            обёртка для provider авторизации + обёртка комп для приватов + кнп.
            для авториз.
          </p>
        </div>
        <div>
          <h2></h2>
          <p></p>
          <p></p>
        </div>
        <div>
          <h2></h2>
          <p></p>
          <p></p>
        </div>
        <div>
          <h2></h2>
          <p></p>
          <p></p>
        </div>
      </div>
      <div className="ColLocPriv__content"></div>
    </div>
  );
};
export { ColLocPriv };
