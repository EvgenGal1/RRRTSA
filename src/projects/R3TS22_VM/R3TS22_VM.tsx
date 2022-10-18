import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

// 0.2
// import { BrowserRouter } from "react-router-dom";
// 0.3
import { Provider } from "react-redux";
import { store } from "./src/store";

import { HomePage } from "./src/pages/HomePage";
import { FavoritesPage } from "./src/pages/FavoritesPage";

export function R3TS22_VM() {
  return (
    <>
      {/* 0.3 */}
      <Provider store={store}>
        <div className="R3TS22_VM">
          <div className="R3TS22_VM__body">
            <h1>R3TS22_VM</h1>
            <p>
              По видео "React стек 2022. TypeScript, Redux Toolkit, RTKQuery,
              Tailwind" - https://www.youtube.com/watch?v=lkbm-zlcFvs
            </p>
          </div>
          <hr />
          <div className="R3TS22_VM__nav">
            <nav>
              <NavLink to="HomePage">My HomePage</NavLink>
              <NavLink to="favorites">My favorites</NavLink>
            </nav>
          </div>
          <hr />
          <Routes>
            <Route path="HomePage" element={<HomePage />} />
            <Route path="favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </Provider>
    </>
  );
}
