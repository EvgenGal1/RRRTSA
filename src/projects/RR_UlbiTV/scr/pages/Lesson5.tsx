import * as React from "react";

export function Lesson5() {
  return (
    <div className="RR_ULBITV--body__lesson5">
      <h2>Lesson5</h2>
      <h3>Action creators. Redux thunk и асинхронные действия</h3>
      <div>
        <p>
          Устан <span>npm i redux-thunk</span> для раб. асинхрона
        </p>
        <p>
          В index.ts к createStore в composeWithDevTools передаём{" "}
          <span>applyMiddleware</span> в него подкл <span>thunk</span>
        </p>
      </div>
      <div>
        <p>
          В customReducer + нов.конст. <span>ADD_MANY_CUSTOM</span> для многих
          польз-лей
        </p>
        <p>+ нов. action к thunk для добавл. кучи польз-лей</p>
        <p>
          возвращ.нов.объ.сост.{}, ...разворач.стар.сост.,
          измен/присвой.нов.масс.:[] где ...разворач.стар.масс. + масс. с
          сервера переданый ч/з action
        </p>
        <p>
          <b>
            return &#123; ...state, customArrs: [...state.customArrs,
            action.payload] &#125;;
          </b>
        </p>
        <p>
          + <b>fn()addManyCustomAction</b> для оптимизации передачи action
          (приним. данные и возвращ объ. action)
        </p>
      </div>
      <div>
        <p>
          ++ <span>asyncActions/manyCustom.api.ts</span> для асинхрон запросов
          на внешний API
        </p>
        <p>
          созд. <span>fn()fetchManyCustomApi</span>
        </p>
        <p>
          Для передачи данной fn в dispatch как action, нужно вернуть нов.fn с
          параметром dispatch
        </p>
        <p>Добавляем fetch запрос и подправляем его</p>
        <p>
          Как данные получены, вызов dispatch переданого ч/з параметры. в него
          передать actionCreate addManyCustomAction который вернёт action (+
          много польз-ей), и туда передаём json(массив польз-ей с сервера)
        </p>
      </div>
      <div>
        {/* // ??? не раб - Аргумент типа "(dispatch: any) => void" нельзя назначить параметру типа "AnyAction". */}
        <p style={{ color: "red", backgroundColor: "black" }}>
          <b>
            в RR_ULBITV на onClick fn() dispatch(fetchManyCustomApi()) выдаёт
            ошб - Аргумент типа "(dispatch: any) =&gt; void" нельзя назначить
            параметру типа "AnyAction"
          </b>
        </p>
        <p>
          На кнп. прописываем onClick с вызовом{" "}
          <span>dispatch(fetchManyCustomApi())</span>
        </p>
        <p></p>
      </div>
      <div>
        <p>
          Перевел компоненты manyCustom.api.ts и RR_ULBITV.tsx{" "}
          <b>в JS формат</b>.
        </p>
        <p>
          От отсутстия типизации, ушла ошб.{" "}
          <b>Аргумент типа ... типа "AnyAction"</b>
        </p>
        <p style={{ color: "red", backgroundColor: "black" }}>
          Появила нов.ошб.{" "}
          <b>Warning: Each child in a list should have a unique "key" prop.</b>
        </p>
        <p>
          Куда приписать key и/или как вытащить из fetch json итерированый
          список пока не разобрался
        </p>
        <p>
          кнп с{" "}
          <b>onClick=&#123;() =&gt; dispatch(fetchManyCustomApi())&#125;</b>{" "}
          пока <b>заглушил</b>
        </p>
        <p>При различных попытка исправления получал такие ошибки:</p>
        <ul style={{ color: "red", backgroundColor: "black" }}>
          <li>
            Uncaught (in promise) TypeError: Cannot read properties of undefined
            (reading 'json')
          </li>
          <li>Check the render method of `RR_ULBITV`.</li>
          <li>
            uncaught TypeError: Cannot read properties of undefined (reading
            'map')
          </li>
          <li>
            manyCustom.api.js:28 Uncaught (in promise) TypeError: Cannot read
            properties of undefined (reading 'error')
          </li>
          <li>Cannot read properties of undefined (reading 'now')</li>
          <li>action.payload is not iterable</li>
        </ul>
      </div>
      <p>
        <span>JSONPlaceholder</span> - Бесплатный поддельный API для
        тестирования и прототипирования - https://jsonplaceholder.typicode.com/
      </p>
    </div>
  );
}
