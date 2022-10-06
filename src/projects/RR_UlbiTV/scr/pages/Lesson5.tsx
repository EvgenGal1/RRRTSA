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
            ошб
          </b>
        </p>
        <p>
          На кнп. прописываем onClick с вызовом{" "}
          <span>dispatch(fetchManyCustomApi())</span>
        </p>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
      <p>
        <span>JSONPlaceholder</span> - Бесплатный поддельный API для
        тестирования и прототипирования - https://jsonplaceholder.typicode.com/
      </p>
    </div>
  );
}
