import * as React from "react";

export function Lesson3() {
  return (
    <div className="RR_ULBITV--body__lesson3">
      <h2>Lesson3</h2>
      <div>
        Делаем <b>декомпозицию</b> (разделение на части). Для поддержки разных
        reducerов.
        <p>Созд. неск-ко файлов под каждый reducer</p>
        <p>
          ++ в store/ <span>cashReducer.ts</span> и{" "}
          <span>customReducer.ts</span>
        </p>
        <p>Перенос перем. defaultState и reducerов в файлы</p>
        <p>
          <span>cashReducer</span> раб с <span>number</span>
        </p>
        <p>
          <span>customReducer</span> раб с <span>array</span>
        </p>
        <p>
          Меняем <b>type</b> <b>action</b>, чтоб не повторялись - ADD_CASH |
          ADD_CUSTOM и т.д.
        </p>
        <p>+ export каждого</p>
      </div>
      <div>
        Делаем <b>рефакторинг</b> (упрощение кода без изменения поведения для
        обслуж.,расшир.,понимания).
        <p>
          ++ <span>store/index.ts</span>. Переносим сюда иниц-цию store + import
          createStore, + export store.
        </p>
        <p>+ import store в файл где Provider</p>
        <p>
          + в index.ts import reducerов из файлов и combineReducers из redux
        </p>
        <p>
          <span>combineReducers</span> - объедин. неск-ко reducerов. Созд. объ.
          rootReducer и вызов fn combineReducers. Fn приним. парам-ом объ., в
          который добавляются все reducerы (названием | ключ-значен.)
        </p>
        <p>+ rootReducer параметром в store</p>
      </div>
      <div>
        <p>
          Правим код в <b>useSelector</b> и где ранее вызыв. <b>payload</b>, от
          ошб. т.к. счас reducerов неск-ко а обращаемся к одному полю. (счас из
          сост. получ. reducer, потом переменную - state.cashR.cash)
        </p>
      </div>
      <div>
        Для удобства разработки необходимо отслеж. измен. сост. В помощь
        инструм. разработчика.
        <p>
          При создан. store вторым парам. передаём <b>middleware</b> |{" "}
          <b>инстр.разраб.</b>
        </p>
        <p>
          + Для совместн. использ. устан. <b>@redux-devtools/extension</b>{" "}
          (нов.) |<b>redux-devtools-extension</b> (стар.)
        </p>
        <p>
          + import fn <span>composeWithDevTools</span> из модуля и передача 2ым
          парам в createStore
        </p>
        <p>
          + устан. расширен. для браузера - <span>Redux DevTools</span>
        </p>
        <p>
          Для присмотра/контроля/наблюдения - откр. в браузере DevTools.Redux
          (счас для просмотра state RR_ULBITV нужно откл. Provider.stete в
          R3TS22_VM. Позже совмещу все reducerы)
        </p>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
}
