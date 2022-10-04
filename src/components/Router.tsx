import React from "react";
// import { useTransition, animated } from "react-spring";
import {
  Routes,
  Route /* Link, Outlet, useLocation */,
} from "react-router-dom";
// import "./App.css";

// import { Navigation } from "./Navigation";
import { RRRTS_EG } from "../pages/RRRTS_EG";

//
import { RR_DOC } from "../projects/RR_DOC/RR_Doc";
//
import { R3TS22_VM } from "../projects/R3TS22_VM/R3TS22_VM";
import { HomePage } from "../projects/R3TS22_VM/src/pages/HomePage";
import { FavoritesPage } from "../projects/R3TS22_VM/src/pages/FavoritesPage";
//
import { RR_ULBITV } from "../projects/RR_ULBITV/RR_ULBITV";
//
import { RRTS_ULBITV } from "../projects/RRTS_ULBITV/RRTS_ULBITV";
import { Lesson2 } from "../projects/RR_ULBITV/scr/pages/Lesson2";
import { Lesson3 } from "../projects/RR_ULBITV/scr/pages/Lesson3";
import { Lesson4 } from "../projects/RR_ULBITV/scr/pages/Lesson4";
//
import { RR_MN } from "../projects/RR_MN/RR_MN";
import { FirstPage } from "../projects/RR_MN/src/pages/FirstPage";
import { SecondPage } from "../projects/RR_MN/src/pages/SecondPage";
import { ThirdPage } from "../projects/RR_MN/src/pages/ThirdPage";
//
import { Users } from "../projects/R3TS22_VM/src/pages/Users";

//
import { Layout } from "./Layout";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RRRTS_EG />} />
          <Route path="RR_DOC" element={<RR_DOC />} />
          {/*  */}
          <Route path="R3TS22_VM/*" element={<R3TS22_VM />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="HomePage" element={<HomePage />} />
          {/*  */}
          <Route path="RR_ULBITV/*" element={<RR_ULBITV />} />
          <Route path="Lesson2" element={<Lesson2 />} />
          <Route path="Lesson3" element={<Lesson3 />} />
          <Route path="Lesson4" element={<Lesson4 />} />
          {/*  */}
          <Route path="/RRTS_ULBITV" element={<RRTS_ULBITV />} />
          {/*  */}
          <Route path="RR_MN/*" element={<RR_MN />} />
          <Route path="FirstPage" element={<FirstPage />} />
          <Route path="SecondPage" element={<SecondPage />} />
          <Route path="ThirdPage" element={<ThirdPage />} />
          {/*  */}
          <Route path="Users/*" element={<Users />} />
          {/* <Route path="Users2/*" element={<Users />}>
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="HomePage" element={<HomePage />} />
          </Route> */}
        </Route>
      </Routes>
    </>
  );
}

// залито в отдельн файл
// function Users() {
//   return (
//     <div>
//       <b>перед Link</b>
//       <nav>
//         <Link to="HomePage">My HomePage</Link>
//         <Link to="favorites">My favorites</Link>
//       </nav>
//       <b>после Link</b>
//       <b>перед Router</b>
//       <Routes>
//         222
//         <Route path="HomePage" element={<HomePage />} />
//         <Route path="favorites" element={<FavoritesPage />} />
//         333 444
//         {/* <Route path=":id" element={<UserProfile />} /> */}
//         {/* <Route path="me" element={<OwnUserProfile />} /> */}
//       </Routes>
//       <b>после Router</b>
//     </div>
//   );
// }

// function Users2() {
//   return (
//     <div>
//       <nav>
//         <Link to="HomePage">My HomePage</Link>
//         <Link to="favorites">My favorites</Link>
//       </nav>
//       00000
//       <Outlet />
//       11111
//       {/* <Link to="/HomePage">My HomePage</Link> */}
//       {/* <Link to="/favorites">My favorites</Link> */}
//     </div>
//   );
// }

// export default App;
