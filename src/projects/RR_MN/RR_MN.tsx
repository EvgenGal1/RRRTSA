import React from "react";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";

import { OutletOpt } from "./src/pages/OutletOpt";
import { NavAndLink } from "./src/pages/NavAndLink";
import { BlogParam } from "./src/pages/BlogParam";
import { ThirdPage } from "./src/pages/ThirdPage";

import "./RR_MN.scss";

export function RR_MN() {
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
        <Routes>
          <Route path="OutletOpt" element={<OutletOpt />} />
          <Route path="NavAndLink" element={<NavAndLink />} />
          <Route path="BlogParam" element={<BlogParam />} />
          <Route path="ThirdPage" element={<ThirdPage />} />
        </Routes>
        {/* чёт не раб */}
        {/* <Outlet /> */}
      </div>
    </div>
  );
}
