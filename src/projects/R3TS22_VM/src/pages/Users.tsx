import { Routes, Route, NavLink, Link } from "react-router-dom";

import { HomePage } from "./HomePage";
import { FavoritesPage } from "./FavoritesPage";

export function Users() {
  return (
    <div>
      <b>перед Link</b>
      <nav>
        <Link to="HomePage">My HomePage</Link>
        <Link to="favorites">My favorites</Link>
      </nav>
      <b>после Link</b>
      <div>Какието данные/текст/body </div>
      <b>перед Router</b>
      <Routes>
        222
        <Route path="HomePage" element={<HomePage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        333 444
      </Routes>
      <b>после Router</b>
    </div>
  );
}
