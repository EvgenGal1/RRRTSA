import React from "react";
// import "./App.css";

import { Navigation } from "./components/Navigation";
import { RoutesNav } from "./components/Routes";

export function App() {
  return (
    <>
      <div className={"container-prob "} id={"element"}>
        <Navigation />
        <RoutesNav />
      </div>
    </>
  );
}
