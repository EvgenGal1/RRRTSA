import React from "react";

// стили и лого
import "./App.css";
import logo from "../../logo.svg";

// импорт хранилища
import store from "./src/store/store.js";
// импорт Поставщика для обёртки
import { Provider } from "react-redux";
// import * as serviceWorker from './serviceWorker';

import { Counter } from "./src/features/counter/Counter.js";
import { CounterTS } from "../../features/counter/Counter.tsx";

function RR_DocApp() {
  return (
    <>
      <div className="RR_DOC__desc">
        {/* className="rr-docapp */}
        <div className="RR_DOC">
          <div>RR_Doc</div>
          По документации "React Redux" -
          https://react-redux.js.org/tutorials/quick-start
        </div>
        <div className="RR_DOC__content">
          <div className="RR_DOC__App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              1212
              <Counter />
              1212 3434
              <CounterTS />
              3434
              <p>
                Редактировать <code>src/App.js</code> и сохранить, чтобы
                перезагрузить.
              </p>
              <span>
                <span>Учиться </span>
                <a
                  className="App-link"
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
                <span>, </span>
                <a
                  className="App-link"
                  href="https://redux.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Redux
                </a>
                <span>, </span>
                <a
                  className="App-link"
                  href="https://redux-toolkit.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Redux Toolkit
                </a>
                ,<span> and </span>
                <a
                  className="App-link"
                  href="https://react-redux.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Redux
                </a>
              </span>
            </header>
          </div>
        </div>
      </div>
    </>
  );
}

function RR_Doc() {
  return (
    // обёртка основного Компонента. Хранилище передано как св-во
    <Provider store={store}>
      <RR_DocApp />
    </Provider>
  );
}
export { RR_Doc };
