import React from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";

import { FirstPage } from "./src/pages/FirstPage.tsx";
import { SecondPage } from "./src/pages/SecondPage";
import { ThirdPage } from "./src/pages/ThirdPage";
// import { use  } from "react";
export function RR_MN() {
  // const [, set] = use();
  return (
    <>
      000
      <div>
        {/* <Link to="firstPage">1</Link> */}
        <ul>
          <li>
            <Link to="/FirstPage">FirstPage link</Link>
          </li>
          <li>
            <Link to="/SecondPage">SecondPage link</Link>
          </li>
          <li>
            <Link to="/ThirdPage">ThirdPage link</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1>RR_MN</h1>
        <p>
          По видео "React Router 6" -
          https://www.youtube.com/watch?v=U7c7k-NBtQg
        </p>
      </div>
      111
      <Routes>
        <Route path="/FirstPage" element={<FirstPage />}>
          FirstPage 000
        </Route>
        <Route path="/SecondPage" element={<SecondPage />} />
        <Route path="/ThirdPage" element={<ThirdPage />} />
      </Routes>
      222
    </>
  );
}
