import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

// 0.2
import { BrowserRouter } from "react-router-dom";
// 0.3
import { Provider } from "react-redux";
import { store } from "./src/store";

import { HomePage } from "./src/pages/HomePage";
import { FavoritesPage } from "./src/pages/FavoritesPage";

// import { useSearchUsersQuery } from "./src/store/github/github.api";

export function R3TS22_VM() {
  return (
    <>
      {/* 0.3 */}
      <Provider store={store}>
        <div className="R3TS22_VM">
          <div className="R3TS22_VM__nav">
            <b>перед NavLink</b>
            <nav>
              <NavLink to="HomePage">My HomePage</NavLink>
              <NavLink to="favorites">My favorites</NavLink>
            </nav>
            <b>после NavLink</b>
          </div>
          <div className="R3TS22_VM__body">
            <h1>R3TS22_VM</h1>
            <div>
              По видео "React стек 2022. TypeScript, Redux Toolkit, RTKQuery,
              Tailwind" - https://www.youtube.com/watch?v=lkbm-zlcFvs
            </div>
          </div>
          <div className="R3TS22_VM__pages">
            <b>перед Router</b>
            <Routes>
              222
              <Route path="HomePage" element={<HomePage />} />
              <Route path="favorites" element={<FavoritesPage />} />
              333 444
            </Routes>
            <b>после Router</b>
          </div>
        </div>
      </Provider>
    </>
  );
}
