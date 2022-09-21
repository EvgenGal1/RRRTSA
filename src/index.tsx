import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./app/store";

import App from "./App";
import "./index.css";
// import reportWebVitals from "./types/reportWebVitals";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render()

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
//     <React.StrictMode>
//   <BrowserRouter>
//    <Provider store={store}>
//   <App />
//    </Provider>
// </BrowserRouter>
//  </React.StrictMode>

// Если вы хотите начать измерять производительность в своем приложении, передайте функцию
// для регистрации результатов (например: ReportWebvitals (console.log)))
// или отправить в конечную точку аналитики.Узнайте больше: https://bit.ly/cra-vitals
// reportWebVitals();
