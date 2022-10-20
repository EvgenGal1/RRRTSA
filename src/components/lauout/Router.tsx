import React from "react";
import { Routes, Route } from "react-router-dom";

//
import { Layout } from "./Layout.jsx";
import "./Router.scss";

// Главная Страница
import { RRRTS_EG } from "../pages/RRRTS_EG";
//
import { RR_DOC } from "../../projects/RR_DOC/RR_Doc";
//
import { R3TS22_VM } from "../../projects/R3TS22_VM/R3TS22_VM";
import { HomePage } from "../../projects/R3TS22_VM/src/pages/HomePage";
import { FavoritesPage } from "../../projects/R3TS22_VM/src/pages/FavoritesPage";
//
import { RR_ULBITV } from "../../projects/RR_ULBITV/RR_ULBITV";
//
import { RRTS_ULBITV } from "../../projects/RRTS_ULBITV/RRTS_ULBITV";
import { Lesson2 } from "../../projects/RR_ULBITV/scr/pages/Lesson2";
import { Lesson3 } from "../../projects/RR_ULBITV/scr/pages/Lesson3";
import { Lesson4 } from "../../projects/RR_ULBITV/scr/pages/Lesson4";
import { Lesson5 } from "../../projects/RR_ULBITV/scr/pages/Lesson5";
import { Lesson6 } from "../../projects/RR_ULBITV/scr/pages/Lesson6";
//
import { RR_MN } from "../../projects/RR_MN/RR_MN";
import { OutletOpt } from "../../projects/RR_MN/src/pages/OutletOpt";
import { NavAndLink } from "../../projects/RR_MN/src/pages/NavAndLink";
import { BlogParam } from "../../projects/RR_MN/src/pages/BlogParam";
// отдельн. динам. страница.
import { SinglePage } from "../../projects/RR_MN/src/pages/SinglePage";
import { CreatePost } from "../../projects/RR_MN/src/pages/CreatePost";
import { EditPost } from "../../projects/RR_MN/src/pages/EditPost";
import { ColLocPriv } from "../../projects/RR_MN/src/pages/ColLocPriv";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RRRTS_EG />} />
          <Route path="RR_DOC/" element={<RR_DOC />} />
          {/*  */}
          <Route path="R3TS22_VM/*" element={<R3TS22_VM />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="HomePage" element={<HomePage />} />
          {/*  */}
          <Route path="RR_ULBITV/*" element={<RR_ULBITV />}></Route>
          <Route path="Lesson2" element={<Lesson2 />} />
          <Route path="Lesson3" element={<Lesson3 />} />
          <Route path="Lesson4" element={<Lesson4 />} />
          <Route path="Lesson5" element={<Lesson5 />} />
          <Route path="Lesson6" element={<Lesson6 />} />
          {/*  */}
          <Route path="/RRTS_ULBITV" element={<RRTS_ULBITV />} />
          {/*  */}
          <Route path="RR_MN/*" element={<RR_MN />}></Route>
          <Route path="OutletOpt" element={<OutletOpt />} />
          <Route path="NavAndLink" element={<NavAndLink />} />
          <Route path="BlogParam" element={<BlogParam />} />
          {/* отдельн. динам. страница. в path + /: для парам.(любое кол-во, здесь id), в element отдельн. приложение */}
          {/* раб. только в стр. дочки BlogParam. На родителе RR_MN/BlogParam не раб */}
          <Route path="BlogParam/:id" element={<SinglePage />} />
          {/* комп. для редактирования поста. завязан на id но c доп.адр. edit */}
          <Route path="BlogParam/:id/edit" element={<EditPost />} />
          {/* комп. для создания поста. использ не парам. переход при наборе любого адреса после слэша */}
          <Route path="BlogParam/new" element={<CreatePost />} />
          <Route path="ColLocPriv" element={<ColLocPriv />} />
          {/*  */}
          {/* <Route path="Users2/*" element={<Users />}>
              <Route path="favorites" element={<FavoritesPage />} />
              <Route path="HomePage" element={<HomePage />} />
            </Route> */}
        </Route>
      </Routes>
    </>
  );
}

// пример вложенных файлов. залито в отдельн файл
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
