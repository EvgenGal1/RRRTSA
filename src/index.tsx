import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

// 0.2
import { BrowserRouter } from "react-router-dom";
// 0.3
import { Provider } from "react-redux";
import { store } from "./projects/R3TS22_VM/src/store";

import { App } from "./App";
import "./index.css";
// import reportWebVitals from "./types/reportWebVitals";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render()

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  // 0.3
  <Provider store={store}>
    {/* 0.2 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// Если вы хотите начать измерять производительность в своем приложении, передайте функцию
// для регистрации результатов (например: ReportWebvitals (console.log)))
// или отправить в конечную точку аналитики.Узнайте больше: https://bit.ly/cra-vitals
// reportWebVitals();
