import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
// les6. импорт fn()оптимизации
import {
  incrementCreatorSg,
  decrementCreatorSg,
  asyncIncrementCreatorSg,
  asyncDecrementCreatorSg,
} from "../store/countReducerSg";
import { fetchUsers } from "../store/usersReducerSg";

export function Lesson6() {
  // получ. диспетчер ч/з хук. для измен. сост. передавая action в reducer
  const dispatch = useDispatch();

  // les6. redux saga
  const countSg = useSelector((state: any) => state.countRSg.counNumSg);
  const usersSg = useSelector((state: any) => state.usersRSg.userArrSg);

  return (
    <div className="RR_ULBITV--body--lesson6">
      <h2>Lesson6</h2>
      <h3>Redux Saga асинхронные actions</h3>
      {/* les6.  */}
      <div className="les6--saga__content">
        <div>{countSg}</div>
        <div className="saga--button">
          {/* <button type="button" onClick={() => dispatch(incrementCreatorSg())}> */}
          <button
            type="button"
            onClick={() => dispatch(asyncIncrementCreatorSg())}
          >
            ++
          </button>
          {/* <button type="button" onClick={() => dispatch(decrementCreatorSg())}> */}
          <button
            type="button"
            onClick={() => dispatch(asyncDecrementCreatorSg())}
          >
            --
          </button>
          <button type="button" onClick={() => dispatch(fetchUsers())}>
            юзер
          </button>
        </div>
        <div className="saga--count">
          {usersSg.map((user: any) => (
            <div
              style={{ display: "flex" }}
              key={user.id}
              // onClick={() => removeCustom(user)}
            >
              {user.name}
            </div>
          ))}
        </div>
      </div>
      <div className="les6--saga__descript">
        <div>
          <p>
            <span>Redux-Saga - библ., для побочных эффектов приложений</span>{" "}
            (асинхрон извлеч. данных, до ступ к кешу браузера) направленым на
            простоту управления, эффектным выполнением, простыми в тестировании
            и лучше справляющимися со сбоями.
          </p>
          <p>
            устан. <span>npm i redux-saga</span>
          </p>
        </div>
        <div>
          <h2>Основые концепции</h2>
          <p>
            <span>Workers</span> `рабочие` - fn()* выполн. асинхр. логику
            (timeout, асинх. запросы на сервер)
          </p>
          <p>
            <span>Watchers</span> `наблюдатели` - fn()* где с помощью спец.fn()
            указываем тип <b>action</b> и <b>Workers</b> который будет
            отрабатывать когда <b>action</b> с указаным типом, будет
            отрабатывать. <br />
            Наблюдает за отработкой <b>action</b>, е/и есть привязка{" "}
            <b>Workers</b>, то вызов данной fn()
          </p>
          <p>
            <span>Effects</span> - набор встроеных fn(), помощь для запросов,
            dispatch, след. за Workers и т.д.
          </p>
          <p>
            Построен на <span>Генраторах</span>. fn() со (<span>*</span>).
            Возвращ. данные поэтапно. В fn() вызов return, и он возвращ.
            одинаковые данные. Использ. ключ-ое слово <b>yield</b>
          </p>
          <p>
            <span>yield</span> `урожай` наприм. перебор for до 5 и вернуть №
            итерации цикла. К результату + <b>.next()</b>. Тогда на каждый вызов
            получаем счетчик до 5, дойдя до 5 в поле done (указ. в логах
            `выполнено`) будет true
          </p>
        </div>
        <div>
          <p>
            ++ <span>saga/</span> <span>countSaga.ts</span> (асинхр экшны для
            раб. со счётчиком), <span>index.ts</span> (иниц-ция saga),{" "}
            <span>userSaga.ts</span> (экшны польз-лей)
          </p>
        </div>
        <div>
          <p></p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
}
