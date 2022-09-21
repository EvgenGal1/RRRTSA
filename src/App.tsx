import React from "react";
import { Routes, Route } from "react-router-dom";
// import "./App.css";

import { Header } from "./components/Header";

import { HomePage } from "./pages/HomePage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { RR_Doc } from "./project/RR_Doc/RR_Doc";
import { RR_UlbiTV } from "./project/RR_UlbiTV/RR_UlbiTV.jsx";
import { RRTS_UlbiTV } from "./project/RRTS_UlbiTV/RRTS_UlbiTV.jsx";
import { R3TS22_VM } from "./project/R3TS22_VM/R3TS22_VM";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/RR_Doc" element={<RR_Doc />} />
        <Route path="/RR_UlbiTV" element={<RR_UlbiTV />} />
        <Route path="/RRTS_UlbiTV" element={<RRTS_UlbiTV />} />
        <Route path="/R3TS22_VM" element={<R3TS22_VM />} />
      </Routes>
    </>
  );
}
{
  /* <div className="App">
      <RR_Doc />
      <RR_UlbiTV />
      <RRTS_UlbiTV />
      <R3TS22_VM />
      <Route path="./RR_Doc" element={<RR_Doc />} />
      <Route path="./RR_UlbiTV" element={<RR_UlbiTV />} />
      <Route path="./RRTS_UlbiTV" element={<RRTS_UlbiTV />} />
      <Route path="./R3TS22_VM" element={<R3TS22_VM />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      </div> */
}

export default App;
