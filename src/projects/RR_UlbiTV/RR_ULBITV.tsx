import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { store } from "./src/store";
import { Provider, useDispatch, useSelector } from "react-redux";

import { Lesson2 } from "./src/pages/Lesson2";
import { Lesson3 } from "./src/pages/Lesson3";
import { Lesson4 } from "./src/pages/Lesson4";
import { Lesson5 } from "./src/pages/Lesson5";
import { Lesson6 } from "./src/pages/Lesson6";

// les4. импорт fn()оптимизации `Добавьте/удалите пользовательское действие`
import { addCustomAction, removeCustomAction } from "./src/store/customReducer";
// les5. fn асинхроного запроса
import { fetchManyCustomApi } from "./src/asyncActions/manyCustom.api";
import { defStNum } from "./src/store/cashReducer";

// export function RR_UlbiTV() {
export const RR_ULBITV: React.FC = () => {
  // export function RR_ULBITV() {
  // function RR_UlbiTV() {
  // получ. диспетчер ч/з хук. для измен. сост. передавая action в reducer
  const dispatch = useDispatch();
  // получ сост. ч/з хук useSelector. парам-ом приним. fn, а fn приним. парам-ом state, а из state получ. переменную(счас cash). смотр в логах
  // const cash = useSelector((state: any) => state.cash);
  // после неск-их reducerов, из сост. получ. reducer, потом переменную
  // const cashNum = useSelector((state: any) => state.cashR.cashNum);
  // const cashNum = useSelector((state) => state.cashR.cashNum);
  const cashNum = useSelector((state: defStNum) => state.cashR.cashNum);
  // console.log("cash : " + cash);

  // les4. получ массив клиентов. обращ. к ключу reducerа и затем к перем.
  // const customArrs = useSelector((state: any) => state.customR.customArrs);
  const customArrs = useSelector((state: any) => state.customR.customArrs);

  // les5. доп. отд. перем. fetch.
  const customArrsMany = useSelector(
    (state: any) => state.customR.customArrsMany
  );

  // fn для string по изменению суммы. указ по умолча. фиксир 5
  // const addCash = () => {
  // передаём парам из клик и указ в payload .измен сумму не фикс, а самостоятельно
  // const addCash = (cash: number) => {
  const addCash = (cash: number) => {
    // вызов fn dispatch. передаём объ. action с типом(указ. в reducer) и данные(здесь сумма)
    // dispatch({ type: "ADD_CASH", payload: 5 });
    // указ. суммы самостоятельно
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  // const getCash = (cash: number) => {
  const getCash = (cash: number) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  // les4. fn для массива/строки?  добавл. польз-ля по клик. приним имя
  // const addCustom = (name: string | number | null) => {
  const addCustom = (name: string | null) => {
    // данные action - объ.полъз-ля. Парам. - имя и id.текущ.время
    const customer = {
      name,
      id: Date.now(),
      // key: Date.now(),
    };
    // в dispatch передаём action(объ. с типом и данными)
    // dispatch({ type: "ADD_CUSTOM", payload: customer });
    // рефактор. в dispatch вызов fn()addCustomAction(оптимизация передачи action) который возвращ.объ. куда передаём данные
    dispatch(addCustomAction(customer));
  };
  // fn удален польз-ля из списка
  // const removeCustom = (customer: any) => {
  const removeCustom = (customer: { id: any }) => {
    // передаем тип и перебраный id customer
    // dispatch({ type: "REMOVE_CUSTOM", payload: customer.id });
    // рефактор. передача action ч/з removeCustomAction
    dispatch(removeCustomAction(customer.id));
  };

  //  ----------------------------------------------------------------------------------
  return (
    <>
      {/* // В `Провайдер` из react-redux, оборач приложения, для передачи store в компоненты */}
      {/* <Provider store={store}> */}
      <div className="RR_ULBITV">
        <div className="RR_ULBITV__body">
          <div className="RR_ULBITV__descript">
            <h1>RR_ULBITV</h1>
            <p>
              По видео "Redux и React" -
              https://www.youtube.com/watch?v=5Qtqzeh5FeM
            </p>
          </div>
          <div className="body__content">
            {/* cashNum" */}
            <div className="content__cashNum">
              <div className="cashNum--button">
                <button
                  type="button"
                  // вызов fn addCash по клик
                  // onClick={addCash}
                  // передаём парам-ом fn promt, преобразов ввод к числу, т.к. приним. строку
                  onClick={() => addCash(Number(prompt()))}
                >
                  Пополнить
                </button>
                <button
                  type="button"
                  // по клик вызов fn getCash
                  onClick={() => getCash(Number(prompt()))}
                >
                  Снять
                </button>
              </div>
              <div className="cashNum--count">
                <p>cashNum {cashNum}</p>
              </div>
            </div>
            {/* customArrs */}
            <div className="content__customArrs">
              <div className="customArrs--button">
                {/* les4. вызов fn addCustom добавл.кл. */}
                <button
                  type="button"
                  // по клик вызов fn getCash
                  onClick={() => addCustom(prompt())}
                >
                  Добавить клиента
                </button>
              </div>
              {/* les4. вывод блока по условию длины массива */}
              <div className="customArrs--count">
                {customArrs.length > 0 ? (
                  <>
                    {/* е/и массив не пусто - ч\з map итерируем мас.customArrs и el.mame разворач в div */}
                    {customArrs.map(
                      (customArr: {
                        id: React.Key | null | undefined;
                        name:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | React.ReactFragment
                          | React.ReactPortal
                          | null
                          | undefined;
                      }) => (
                        // + слушатель клик на каждого для удаления из списка
                        <li
                          onClick={() => removeCustom(customArr)}
                          key={customArr.id}
                          style={{ listStyle: "none" }}
                        >
                          {customArr.name}
                        </li>
                      )
                    )}
                  </>
                ) : (
                  <>customArrs пуст...</>
                )}
              </div>
            </div>
            {/* les5. доп. отд.блок.код fetch. */}
            <div className="content__fetch">
              <div className="fetch--button">
                <button
                  type="button"
                  onClick={() => dispatch(fetchManyCustomApi())}
                >
                  + Клиенты с базы
                </button>
              </div>
              <div className="fetch--count">
                {customArrsMany.length > 0 ? (
                  <>
                    {customArrsMany.map(
                      (customArrM: {
                        id: React.Key | null | undefined;
                        name:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | React.ReactFragment
                          | React.ReactPortal
                          | null
                          | undefined;
                        username:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | React.ReactFragment
                          | React.ReactPortal
                          | null
                          | undefined;
                        phone:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | React.ReactFragment
                          | React.ReactPortal
                          | null
                          | undefined;
                      }) => (
                        <p
                          style={{ display: "flex" }}
                          key={customArrM.id}
                          onClick={() => removeCustom(customArrM)}
                        >
                          {customArrM.name} - {customArrM.username}. Тел.:{" "}
                          {customArrM.phone}
                        </p>
                      )
                    )}
                  </>
                ) : (
                  <>customArrsMany пуст...</>
                )}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="RR_ULBITV__nav">
          <nav>
            <NavLink to="Lesson2">Lesson2</NavLink>
            <NavLink to="Lesson3">Lesson3</NavLink>
            <NavLink to="Lesson4">Lesson4</NavLink>
            <NavLink to="Lesson5">Lesson5</NavLink>
            <NavLink to="Lesson6">Lesson6</NavLink>
            {/* <li>
            <NavLink to="/ThirdPage">Lesson4</NavLink>
          </li> */}
          </nav>
        </div>
        <hr />
        <div className="RR_ULBITV__lessons">
          <Routes>
            <Route path="Lesson2" element={<Lesson2 />} />
            <Route path="Lesson3" element={<Lesson3 />} />
            <Route path="Lesson4" element={<Lesson4 />} />
            <Route path="Lesson5" element={<Lesson5 />} />
            <Route path="Lesson6" element={<Lesson6 />} />
          </Routes>
        </div>
      </div>
      {/* </Provider> */}
    </>
  );
};
// export { RR_UlbiTV };
