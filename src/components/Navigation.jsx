import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.scss";

// hooks для KeyDown/KeyUp
// ч/з хуки Multi и Key
// import { useKeyPress } from "../hooks/vr/useKeyPress.js";
// import {
//   useMultiKeyPress,
//   areKeysPressed,
//   MultiKeysPressed,
// } from "../hooks/vr/useMultiKeyPress.js";
// ч/з хук AllKey
import { useAllKeysPress } from "../hooks/useAllKeysPress";

export function Navigation() {
  // пробы key ч/з хуки Multi и Key ----------------------------------------------------------
  // // const pressKeyL: boolean = useKeyPress("l");
  // // const pressKeyJ: boolean = useKeyPress("j");
  // // const pressKeyG: boolean = useKeyPress("g");
  // const pressKeyL = useKeyPress("l");
  // const pressKeyJ = useKeyPress("j");
  // const pressKeyG = useKeyPress("g");
  // // --
  // const [hideDopMenu, setHhideDopMenu] = useState(false);
  // // --
  // const keysPressed = useMultiKeyPress();
  // const hsrfPressed = areKeysPressed(["Alt", "Control", "Shift"], keysPressed);
  // пробы key ч/з хуки Multi и Key ----------------------------------------------------------

  // пробы key ч/з хук AllKey ----------------------------------------------------------------
  const [provCombinePress, setProvCombinePress] = useState(false);
  // массив букв после хука (возвращ true е/и переданные и нажатые равны)
  const combinePress = useAllKeysPress({
    userKeys: ["d", "o", "p", "m", "n"],
    order: true,
  });
  // console.log("combinePress : " + combinePress);
  // console.log("provCombinePress : " + provCombinePress);
  useEffect(() => {
    if (combinePress === true) {
      setProvCombinePress(true);
    }
  }, [combinePress, provCombinePress]);
  // пробы key ч/з хук AllKey ----------------------------------------------------------------
  return (
    <>
      <header className="header shadow-md bg-gray-500">
        <div className="header-container">
          <Link to="/" className="header__logo font-bold">
            <h3>RRRTSA++</h3>
          </Link>
          <div className="header__menu">
            <nav className="header__menu-top menu-top flex flex-wrap justify-between items-center text-white">
              {/* h-[50px] px-5 pr-5 - высота padding margin */}
              {/* <span className="menu-top__span top-span"> */}
              <span className="menu-top__items m-t-items">
                <NavLink
                  to="/RR_Doc"
                  // className={({ isActive }) => (isActive ? "active-prob" : "")}
                  className="m-t-items__navlink activ-prob"
                >
                  RR_Doc
                </NavLink>
              </span>
              <span className="menu-top__items m-t-items">
                <NavLink
                  to="R3TS22_VM"
                  className="m-t-items__navlink activ-prob"
                >
                  R3TS22_VM
                </NavLink>
                {/* // ^ данная вложеность и переход на стр. возможен е/и сами влож.стр. добав. в общ. Routes, на один уровень с верхним NavLink */}
                <ul className="m-t-items__ul m-t-its-ul">
                  <li className="m-t-its-ul__li">
                    <Link to="/HomePage" className="">
                      HomePage
                    </Link>
                  </li>
                  <li className="m-t-its-ul__li">
                    <Link to="/favorites" className="">
                      favorites
                    </Link>
                  </li>
                </ul>
              </span>
              <span className="menu-top__items m-t-items">
                <NavLink to="RR_UlbiTV" className="m-t-items__navlink">
                  RR_ULBITV
                </NavLink>
                <ul className="m-t-items__ul m-t-its-ul">
                  <li className="m-t-its-ul__li">
                    <Link to="/Lesson2" className="">
                      Lesson2
                    </Link>
                  </li>
                  <li className="m-t-its-ul__li">
                    <Link to="Lesson3" className="">
                      Lesson3
                    </Link>
                  </li>
                  <li className="m-t-its-ul__li">
                    <Link to="Lesson4" className="">
                      Lesson4
                    </Link>
                  </li>
                  <li className="m-t-its-ul__li">
                    <Link to="Lesson5" className="">
                      Lesson5
                    </Link>
                  </li>
                  <li className="m-t-its-ul__li">
                    <Link to="Lesson6" className="">
                      Lesson6
                    </Link>
                  </li>
                </ul>
              </span>
              <span className="menu-top__items m-t-items">
                <NavLink to="/RRTS_UlbiTV" className="m-t-items__navlink">
                  RRTS_UlbiTV
                </NavLink>
              </span>
              <span className="menu-top__items m-t-items">
                <NavLink
                  to="RR_MN"
                  className="m-t-items__navlink"
                  // onMouseEnter={() => {
                  //   setHover(true);
                  // }}
                  // onMouseLeave={() => {
                  //   setHover(false);
                  // }}
                >
                  RR_MN
                </NavLink>
                <ul className="m-t-items__ul m-t-its-ul">
                  <li className="m-t-its-ul__li">
                    <Link to="/FirstPage" className="">
                      FirstPage
                    </Link>
                  </li>
                  <li className="m-t-its-ul__li">
                    <Link to="SecondPage" className="">
                      NavLink
                    </Link>
                  </li>
                  <li className="m-t-its-ul__li">
                    <Link to="/ThirdPage" className="">
                      ThirdPage
                    </Link>
                  </li>
                </ul>
              </span>
              <span className="menu-top__items m-t-items">
                <NavLink to="Users/*" className="m-t-items__navlink activ-prob">
                  Users
                </NavLink>
                <ul className="m-t-items__ul m-t-its-ul">
                  <li className="m-t-its-ul__li">
                    <Link to="/HomePage" className="">
                      HomePage
                    </Link>
                  </li>
                  <li className="m-t-its-ul__li">
                    <Link to="favorites" className="">
                      favorites
                    </Link>
                  </li>
                </ul>
              </span>
              {/* <span className="menu-top__items m-t-items">
                <NavLink
                  to="Users2/*"
                  className="m-t-items__navlink activ-prob"
                >
                  Users2
                </NavLink>
              </span> */}
            </nav>
            {provCombinePress && (
              <nav className="header__menu-bottom menu-bottom flex flex-wrap justify-between items-center mt-4">
                <span
                  className="ml-3"
                  onClick={() => {
                    setProvCombinePress(false);
                  }}
                >
                  <a href="#">1</a>
                </span>
                <span>
                  <a href="#">2</a>
                </span>
                <span>
                  <a href="#">3</a>
                </span>
                {/* <MultiKeysPressed
                  keys={["Alt", "a"]}
                  // keys={["Alt", "Control", "Shift"]}
                  // keys={["Shift", "x", "z"]}
                  // keys={["q", "w", "e"]}
                  keysPressed={keysPressed}
                  emoji="WIN"
                /> */}
              </nav>
            )}
            {/* {pressKeyL && pressKeyJ && pressKeyG && ( */}
          </div>
        </div>
      </header>
    </>
  );
}
