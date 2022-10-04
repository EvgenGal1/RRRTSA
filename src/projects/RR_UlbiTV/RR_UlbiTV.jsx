import React from "react";

import { Provider, useDispatch, useSelector } from "react-redux";

export function RR_UlbiTV() {
  // function RR_UlbiTV() {
  // получ. диспетчер ч/з хук. для измен. сост. передавая action в reducer
  const dispatch = useDispatch();
  // получ сост. ч/з хук useSelector. парам-ом приним. fn, а fn приним. парам-ом state, а из state получ. переменную(счас cash). смотр в логах
  const cash = useSelector((state) => state.cash);
  console.log("cash : " + cash);

  // fn по изменению суммы. указ по умолча. фиксир 5
  // const addCash = () => {
  // передаём парам из клик и указ в payload .измен сумму не фикс, а самостоятельно
  const addCash = (cash) => {
    // вызов fn dispatch. передаём объ. action с типом(указ. в reducer) и данные(здесь сумма)
    // dispatch({ type: "ADD_CASH", payload: 5 });
    // указ. суммы самостоятельно
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };
  return (
    <>
      {/* // В `Провайдер` из react-redux, оборач приложения, для передачи store в компоненты */}
      {/* <Provider store={store}> */}
      <div className="RR_UlbiTV">
        <div
          style={{ display: "flex", padding: "0px 5px", alignItems: "center" }}
        >
          <div
            style={{ fontSize: "20px", fontWeight: "bold", marginRight: "5px" }}
          >
            {cash}
          </div>
          <div style={{ display: "flex" }}>
            <button
              type="button"
              style={{ display: "flex", padding: "5px", marginRight: "5px" }}
              // вызов fn addCash по клик
              // onClick={addCash}
              // передаём парам-ом fn promt, преобразов ввод к числу, т.к. приним. строку
              onClick={() => addCash(Number(prompt()))}
            >
              Пополнить
            </button>
            <button
              type="button"
              style={{ display: "flex", padding: "5px", marginRight: "5px" }}
              // по клик вызов fn getCash
              onClick={() => getCash(Number(prompt()))}
            >
              Снять
            </button>
          </div>
        </div>
        <div className="RR_UlbiTV__body">
          <h1>RR_UlbiTV</h1>
          <p>
            По видео "Redux и React" -
            https://www.youtube.com/watch?v=5Qtqzeh5FeM
          </p>
          <div>
            <span>store</span> - объ. с неск-ми методами.
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
                <b>replaceReducer(nextReducer)</b> - `заменить
                редуктор(следующий редусер)` -
              </li>
            </ul>
          </div>
          <div>
            <b>store</b> создан. с fn <b>createStore</b>. первый парам{" "}
            <b>reducer</b>, второй -{" "}
          </div>
          <div>
            <span>reducer</span> - чистая fn (и простая и стрелочная) приним 2
            парам - <b>state</b> и <b>action</b>.
            <p>
              Логика работы завсит от пришедшего action. В зависимости от type в
              action идёт выбор (ч/з if/else | switch/case). По умолчан возвращ.
              сост.
            </p>
            <p>
              state неизменяемый. для измен. разворач. новый и там изменения
            </p>
            <p>в action в поле payload обращ к парам и их обрабатываем</p>
            <p>reducer передаём первым парам в createStore</p>
          </div>
          <div>
            <span>state</span> - объ./масс./примитив с хранящ. данными. Получ
            сост. от хука <b>useSelector()</b>
            <p>
              <b>useSelector</b> парам-ом приним. fn, а fn приним. парам-ом
              state, а из state получ. переменную(счас cash). смотр в логах
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
      </div>
      {/* </Provider> */}
    </>
  );
}
// export { RR_UlbiTV };
