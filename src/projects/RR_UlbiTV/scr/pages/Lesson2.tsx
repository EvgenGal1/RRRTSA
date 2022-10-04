import * as React from "react";

export function Lesson2() {
  return (
    <div className="RR_ULBITV--body__lesson2">
      <h2>Lesson2</h2>
      <div>
        <span>store</span> Хранилище сост. Объ. с неск-ми методами.
        <ul>
          <li>
            <b>getState()</b> - `получить состояние` получить сост.
          </li>
          <li>
            <b>dispatch(action)</b> - `отправка(действие)` изменить сост.
          </li>
          <li>
            <b>subscribe(listener)</b> - `подписываться(слушатель)` отслеж
            измен. сост.
          </li>
          <li>
            <b>replaceReducer(nextReducer)</b> - `заменить редуктор(следующий
            редусер)` -
          </li>
        </ul>
      </div>
      <div>
        <b>store</b> создан. с fn <b>createStore</b>. первый парам{" "}
        <b>reducer</b>, второй - middleware (промежут. ПО выполн. м/у
        запрос-ответ)
      </div>
      <div>
        <span>reducer</span> - чистая fn (и простая и стрелочная) приним 2 парам
        - <b>state</b> и <b>action</b>.
        <p>
          Логика работы завсит от пришедшего action. В зависимости от type в
          action идёт выбор (ч/з if/else | switch/case). По умолчан возвращ.
          сост.
        </p>
        <p>state неизменяемый. для измен. разворач. новый и там изменения</p>
        <p>в action в поле payload обращ к парам и их обрабатываем</p>
        <p>reducer передаём первым парам в createStore</p>
      </div>
      <div>
        <span>state</span> - объ./масс./примитив с хранящ. данными. Получ сост.
        от хука <b>useSelector()</b>
        <p>
          <b>useSelector</b> парам-ом приним. fn, а fn приним. парам-ом state, а
          из state получ. переменную(счас cash). смотр в логах
        </p>
      </div>
      <div>
        <span>actions</span> - простой объ. JS с полями type и payload (не
        обязат.)
      </div>
      <div>
        <span>dispatch</span> - fn для измен сост. Получаем от хука{" "}
        <b>useDispatch()</b>. проброс action в reducer
      </div>
      <div>
        <h2>Общая логика</h2>
        <p>
          <b>Dispatch</b> передаётся <b>action</b> в <b>reducer</b>. В{" "}
          <b>reducer</b> определено как <b>action</b> будет изменять{" "}
          <b>state</b>. <b>reducer</b> чиста fn принимающая <b>state</b> и{" "}
          <b>action</b> и всегда возвращающая новый объект <b>state</b>.{" "}
          <b>reducer</b> передается в <b>store</b>, а через обёртку{" "}
          <b>Provider</b> этот <b>store</b> передается в компоненты, где
          состояние используется.
        </p>
      </div>
    </div>
  );
}
