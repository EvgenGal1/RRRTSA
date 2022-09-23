import React from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";

import { firstPage } from "./src/pages/ferstPage.tsx";
// import { use  } from "react";
export function RR_MN() {
  // const [, set] = use();
  return (
    <>
      <header>
        {/* <Link to="firstPage">1</Link> */}
        <ul>
          <li>
            <Link to="prob1">1</Link>
          </li>
          <li>
            <Link to="prob2">2</Link>
          </li>
          <li>
            <Link to="prob3">3</Link>
          </li>
        </ul>
      </header>
      <div>
        <h1>RR_MN</h1>
        <p>
          По видео "React Router 6" -
          https://www.youtube.com/watch?v=U7c7k-NBtQg
        </p>
      </div>
      <Routes>
        <Route
          path="prob1"
          element={<p>prob1</p>}
          // style={{'margin: 10px'}}
        />
        <Route path="prob2" element={<p>prob2</p>} />
        <Route path="prob3" element={<p>prob3</p>} />
      </Routes>
    </>
  );
}
