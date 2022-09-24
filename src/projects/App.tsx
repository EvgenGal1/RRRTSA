import React from "react";
import "../styles/styles.scss";

import { Navigation } from "../components/Navigation";
import { MainRoutes } from "../components/MainRoutes";
// import { RoutesNav } from "../components/Routes"; - перенос всей логики в MainRoutes

export function App() {
  return (
    <>
      {/* <div className={"container-prob "} id={"element"}> */}
      <Navigation />
      <MainRoutes />
      {/* <RoutesNav /> */}
      {/* </div> */}
    </>
  );
}
