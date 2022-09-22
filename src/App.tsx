import React from "react";
import { Routes, Route } from "react-router-dom";
// import "./App.css";

import { Header } from "./components/Header";

import { RRRTS_EG } from "./pages/RRRTS_EG";

import { RR_Doc } from "./projects/RR_Doc/RR_Doc";
import { R3TS22_VM } from "./projects/R3TS22_VM/R3TS22_VM";
// import { HomePage } from "./projects/R3TS22_VM/src/pages/HomePage";
import { FavoritesPage } from "./projects/R3TS22_VM/src/pages/FavoritesPage";
import { RR_UlbiTV } from "./projects/RR_UlbiTV/RR_UlbiTV";
import { RRTS_UlbiTV } from "./projects/RRTS_UlbiTV//RRTS_UlbiTV";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RRRTS_EG />} />
        <Route path="/RR_Doc" element={<RR_Doc />} />
        <Route path="/R3TS22_VM" element={<R3TS22_VM />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/RR_UlbiTV" element={<RR_UlbiTV />} />
        <Route path="/RRTS_UlbiTV" element={<RRTS_UlbiTV />} />
        {/* <Route path="/" element={<HomePage />} /> */}
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
