import React from "react";
import "./App.css";

import { RR_Doc } from "./RR_Doc/RR_Doc.jsx";
import { RR_UlbiTV } from "./RR_UlbiTV/RR_UlbiTV.jsx";
import { RRTS_UlbiTV } from "./RRTS_UlbiTV/RRTS_UlbiTV.jsx";
import { R3TS22_VM } from "./R3TS22_VM/R3TS22_VM.jsx";

function App() {
  return (
    <div className="App">
      <RR_Doc />
      <RR_UlbiTV />
      <RRTS_UlbiTV />
      <R3TS22_VM />
    </div>
  );
}

export default App;
