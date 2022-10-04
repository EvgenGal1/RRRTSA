import React from "react";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

// 0.2
import { BrowserRouter } from "react-router-dom";
// 0.3
import { Provider } from "react-redux";
// import { store } from "./store/index";

import { App } from "./projects/App";
import "./index.css";
// import reportWebVitals from "./types/reportWebVitals";

// RR_UlbiTV ----------------------------------------------------------------------------------
import { store } from "./projects/RR_UlbiTV/scr/store";
// import { legacy_createStore as createStore } from "redux";

// состояние по умолчанию
// const defaultState = {
//   cash: 0,
// };

// логика обработки сост. по state и action
// const reducer = (state = defaultState, action: any) => {
//   switch (action.type) {
//     case "ADD_CASH":
//       // ч/з спрет разворач стар.сост., обращ. к конкретн. полю и его изменяем
//       return { ...state, cash: state.cash + action.payload };
//     case "GET_CASH":
//       return { ...state, cash: state.cash - action.payload };
//     default:
//       return state;
//   }
// };

// создан. store
// const store = createStore(reducer);

// export { store /* defaultState, cash */ };
// RR_UlbiTV ----------------------------------------------------------------------------------

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render()

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  // 0.3
  <Provider store={store}>
    {/* // 0.2 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// Если вы хотите начать измерять производительность в своем приложении, передайте функцию
// для регистрации результатов (например: ReportWebvitals (console.log)))
// или отправить в конечную точку аналитики.Узнайте больше: https://bit.ly/cra-vitals
// reportWebVitals();
