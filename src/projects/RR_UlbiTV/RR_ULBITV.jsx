import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { store } from "./scr/store";
import { Provider, useDispatch, useSelector } from "react-redux";

import { Lesson2 } from "./scr/pages/Lesson2";
import { Lesson3 } from "./scr/pages/Lesson3";
import { Lesson4 } from "./scr/pages/Lesson4";
import { Lesson5 } from "./scr/pages/Lesson5";

import { addCustomAction, removeCustomAction } from "./scr/store/customReducer";
// les5. fn асинхроного запроса
import { fetchManyCustomApi } from "./scr/asyncActions/manyCustom.api.js";

// export function RR_UlbiTV() {
export function RR_ULBITV() {
  // function RR_UlbiTV() {
  // получ. диспетчер ч/з хук. для измен. сост. передавая action в reducer
  const dispatch = useDispatch();
  // получ сост. ч/з хук useSelector. парам-ом приним. fn, а fn приним. парам-ом state, а из state получ. переменную(счас cash). смотр в логах
  // const cash = useSelector((state: any) => state.cash);
  // после неск-их reducerов, из сост. получ. reducer, потом переменную
  // const cashNum = useSelector((state: any) => state.cashR.cashNum);
  const cashNum = useSelector((state) => state.cashR.cashNum);
  // console.log("cash : " + cash);

  // les4. получ массив клиентов. обращ. к ключу reducerа и затем к перем.
  // const customArrs = useSelector((state: any) => state.customR.customArrs);
  const customArrs = useSelector((state) => state.customR.customArrs);

  // fn для string по изменению суммы. указ по умолча. фиксир 5
  // const addCash = () => {
  // передаём парам из клик и указ в payload .измен сумму не фикс, а самостоятельно
  // const addCash = (cash: number) => {
  const addCash = (cash) => {
    // вызов fn dispatch. передаём объ. action с типом(указ. в reducer) и данные(здесь сумма)
    // dispatch({ type: "ADD_CASH", payload: 5 });
    // указ. суммы самостоятельно
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  // const getCash = (cash: number) => {
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  // les4. fn для массива/строки?  добавл. польз-ля по клик. приним имя
  // const addCustom = (name: string | number | null) => {
  const addCustom = (name) => {
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
  const removeCustom = (customer) => {
    // передаем тип и перебраный id customer
    // dispatch({ type: "REMOVE_CUSTOM", payload: customer.id });
    // рефактор. передача action ч/з removeCustomAction
    dispatch(removeCustomAction(customer.id));
  };
  //  ----------------------------------------------------------------------------------
  // useEffect(() => {
  //   dispatch(fetchManyCustomApi());
  // }, []);
  // https://questu.ru/articles/168283/ ----------------------------------------------------------------------------------
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetchManyCustomApi.getUsers();
  //       const json = await response.json();

  //       setData(json);
  //     } catch (e) {
  //       setError(e.message || "Unexpected error");
  //     }

  //     setLoading(false);
  //   }

  //   fetchData();
  // }, []);
  // if (loading) {
  //   return <div>Loading</div>;
  // }
  // if (error) {
  //   return <div style={{ color: "red" }}>ERROR: {error}</div>;
  // }
  // VM ----------------------------------------------------------------------------------
  const {
    isLoading2,
    isError2,
    data2: users2,
    Date2,
    json2,
  } = fetchManyCustomApi();
  //  ----------------------------------------------------------------------------------
  return (
    <>
      {/* // В `Провайдер` из react-redux, оборач приложения, для передачи store в компоненты */}
      {/* <Provider store={store}> */}
      <div className="RR_ULBITV">
        <div className="RR_ULBITV__body">
          <h1>RR_ULBITV</h1>
          <p>
            По видео "Redux и React" -
            https://www.youtube.com/watch?v=5Qtqzeh5FeM
          </p>
          <div className="body--content">
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
                    {customArrs.map((customArr) => (
                      // + слушатель клик на каждого для удаления из списка
                      <li
                        onClick={() => removeCustom(customArr)}
                        key={customArr.id}
                        style={{ listStyle: "none" }}
                      >
                        {customArr.name}
                      </li>
                    ))}
                  </>
                ) : (
                  <>customArrs пуст...</>
                )}
              </div>
            </div>
            <div className="content__fetch">
              <div className="fetch--button">
                {/* при клик деспатчим fn асинхр action */}
                <button
                  type="button"
                  // по клик вызов fn getCash
                  key={users2?.id}
                  // onClick={() => dispatch(fetchManyCustomApi())}
                >
                  + Клиенты с базы {/* butt */}
                </button>
                {/* <div
                  key={users2?.id}
                  onClick={() => dispatch(fetchManyCustomApi())}
                >
                  {" "}
                  + Клиенты с базы div
                </div> */}
              </div>
              <div className="fetch--count">
                {/* <ul> */}
                {/* {items.map((item) => (
                    <li key={item.id}>{item.label}</li>
                  ))} */}
                {/* //  ---------------------------------------------------------------------------------- */}
                {users2}
                {json2}
                {users2?.map((u) => (
                  <div key={u.id}>
                    <p key={u.name}>{u.name}</p>
                    <p>{u}</p>
                    {/* <li>{u.firstName}</li>
                    <li>{u.lastName}</li>
                    <li>{u.active ? "Yes" : "No"}</li>
                    <li>{u.posts}</li>
                    <li>{u.messages}</li> */}
                  </div>
                ))}
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
          </Routes>
        </div>
      </div>
      {/* </Provider> */}
    </>
  );
}
// export { RR_UlbiTV };
