import React from "react";
import { Routes, Route, /* NavLink, */ NavLink } from "react-router-dom";

import { OutletOpt } from "./src/pages/OutletOpt";
import { NavAndLink } from "./src/pages/NavAndLink";
import { BlogParam } from "./src/pages/BlogParam";
import { ThirdPage } from "./src/pages/ThirdPage";
// import { use  } from "react";
import "./RR_MN.scss";

import { Outlet, useLocation } from "react-router-dom";

export function RR_MN() {
  // const [, set] = use();
  return (
    <div className="RR_MN">
      <div className="RR_MN__body">
        <div>
          <h1>RR_MN</h1>
          <p>
            По видео "React Router 6" -
            https://www.youtube.com/watch?v=U7c7k-NBtQg
          </p>
        </div>
      </div>
      <hr />
      <div className="RR_MN__nav">
        <nav>
          <NavLink to="OutletOpt">OutletOpt</NavLink>
          <NavLink to="NavAndLink">NavAndLink</NavLink>
          <NavLink to="BlogParam">BlogParam</NavLink>
          <NavLink to="ThirdPage">ThirdPage</NavLink>
        </nav>
      </div>
      <hr />
      <div className="RR_MN__pages">
        {/* <b>перед Routes в RR_MN 0</b> */}
        {/* для вложенности в Routes. Отражает страницы вместе с данными вверху */}
        {/* <Routes>
            <Route path="Lesson2" element={<Lesson2 />} /> */}
        <Routes>
          <Route path="OutletOpt" element={<OutletOpt />} />
          <Route path="NavAndLink" element={<NavAndLink />} />
          <Route path="BlogParam" element={<BlogParam />} />
          <Route path="ThirdPage" element={<ThirdPage />} />
        </Routes>
        {/* <Outlet /> */}
        {/* <b>после Routes в RR_MN 1</b> */}
      </div>
    </div>
  );
}
