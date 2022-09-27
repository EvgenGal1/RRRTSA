import React from "react";
import "../styles/styles.scss";

// import { Navigation } from "../components/Navigation";
import { Router } from "../components/Router";
// import { RoutesNav } from "../components/Routes"; - перенос всей логики в MainRoutes

export function App() {
  return (
    <>
      {/* <div className={"container-prob "} id={"element"}> */}
      {/* <Navigation /> */}
      <Router />
      {/* <RoutesNav /> */}
      {/* </div> */}
    </>
  );
}
