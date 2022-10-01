import React from "react";
import { useTransition, animated } from "react-spring";
import { Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
// import "./App.css";

// import { Navigation } from "./Navigation";
import { RRRTS_EG } from "../pages/RRRTS_EG";

import { RR_Doc } from "../projects/RR_Doc/RR_Doc";
import { R3TS22_VM } from "../projects/R3TS22_VM/R3TS22_VM";
import { HomePage } from "../projects/R3TS22_VM/src/pages/HomePage";
import { FavoritesPage } from "../projects/R3TS22_VM/src/pages/FavoritesPage";
import { RR_UlbiTV } from "../projects/RR_UlbiTV/RR_UlbiTV";
import { RRTS_UlbiTV } from "../projects/RRTS_UlbiTV/RRTS_UlbiTV";
import { RR_MN } from "../projects/RR_MN/RR_MN";
import { FirstPage } from "../projects/RR_MN/src/pages/FirstPage";
import { SecondPage } from "../projects/RR_MN/src/pages/SecondPage";
import { ThirdPage } from "../projects/RR_MN/src/pages/ThirdPage";

import { Layout } from "./Layout";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RRRTS_EG />} />
          <Route path="/RR_Doc" element={<RR_Doc />} />
          <Route path="/R3TS22_VM/*" element={<R3TS22_VM />}></Route>
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="HomePage" element={<HomePage />} />
          <Route path="/RR_UlbiTV" element={<RR_UlbiTV />} />
          <Route path="/RRTS_UlbiTV" element={<RRTS_UlbiTV />} />
          <Route path="/RR_MN/*" element={<RR_MN />}></Route>
          <Route path="/FirstPage" element={<FirstPage />} />
          <Route path="/SecondPage" element={<SecondPage />} />
          <Route path="/ThirdPage" element={<ThirdPage />} />
          <Route path="users/*" element={<Users />} />
          <Route path="R3TS22_VMVlos" element={<R3TS22_VMVlos />}>
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="HomePage" element={<HomePage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

function Users() {
  return (
    <div>
      <nav>
        <Link to="HomePage">My HomePage</Link>
        <Link to="favorites">My favorites</Link>
      </nav>
      000
      <Routes>
        222
        <Route path="HomePage" element={<HomePage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        333 444
        {/* <Route path=":id" element={<UserProfile />} /> */}
        {/* <Route path="me" element={<OwnUserProfile />} /> */}
      </Routes>
      111
    </div>
  );
}

function R3TS22_VMVlos() {
  return (
    <div>
      <nav>
        <Link to="HomePage">My HomePage</Link>
        <Link to="favorites">My favorites</Link>
      </nav>
      00000
      <Outlet />
      11111
      {/* <Link to="/HomePage">My HomePage</Link> */}
      {/* <Link to="/favorites">My favorites</Link> */}
    </div>
  );
}

// export default App;
