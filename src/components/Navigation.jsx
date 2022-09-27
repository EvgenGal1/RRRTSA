import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.scss";

import { useKeyPress } from "../hooks/useKeyPress.js";
import {
  useMultiKeyPress,
  areKeysPressed,
  MultiKeysPressed,
} from "../hooks/useMultiKeyPress.js";

export function Navigation() {
  // function activprob() {

  // }
  // activprob()
  // const [hover, setHover] = useState(false);

  // пробы key ----------------------------------------------------------
  // const pressKeyL: boolean = useKeyPress("l");
  // const pressKeyJ: boolean = useKeyPress("j");
  // const pressKeyG: boolean = useKeyPress("g");
  const pressKeyL = useKeyPress("l");
  const pressKeyJ = useKeyPress("j");
  const pressKeyG = useKeyPress("g");
  // --
  const [hideDopMenu, setHhideDopMenu] = useState(false);
  // --
  const keysPressed = useMultiKeyPress();
  const hsrfPressed = areKeysPressed(["Alt", "Control", "Shift"], keysPressed);
  // const hsrfPressed = areKeysPressed(["c", "v", "b"], keysPressed);
  // --

  // const keysHead = document.querySelector(".header");
  // console.log("keysHead : " + keysHead);
  // document.addEventListener("keydown", function (event) {
  //   if (event.keyCode == 32 && event.ctrlKey) console.log("Продолжаем!")
  //   keysHead.style.background = "violet";;
  // });
  // --
  // document.addEventListener("keydown", function (event) {
  //   if (event.repeat == false) {
  //     console.log("первичное срабатывание");
  //   } else {
  //     console.log("повторное срабатывание");
  //   }
  // });
  // --
  // document.addEventListener("keypress", function (event) {
  //   console.log(String.fromCharCode(event.charCode));
  // });
  // --
  // document.addEventListener("keydown", function (event) {
  //   console.log(
  //     "keydown 1 ",
  //     event.key,
  //     event.keyCode,
  //     event.code,
  //     event.charCode
  //   );
  // });
  // document.addEventListener("keypress", function (event) {
  //   console.log(
  //     "keypress 2 ",
  //     event.key,
  //     event.keyCode,
  //     event.code,
  //     event.charCode
  //   );
  // });
  // document.addEventListener("keyup", function (event) {
  //   console.log(
  //     "keyup 3 ",
  //     event.key,
  //     event.keyCode,
  //     event.code,
  //     event.charCode
  //   );
  // });
  // --
  // пробы key ----------------------------------------------------------
  return (
    <>
      <header className="header shadow-md bg-gray-500">
        <div className="header-container">
          <Link to="/" className="header__logo font-bold">
            <h3>RRRTS++</h3>
          </Link>
          <div className="header__menu">
            <nav className="header__menu-top menu-top flex flex-wrap justify-between items-center    text-white">
              {/* h-[50px] px-5 pr-5 - высота padding margin */}
              {/* <span className="menu-top__span top-span"> */}
              <span className="menu-top__items  m-t-items">
                <NavLink to="/RR_Doc" className="m-t-items__navlink activ-prob">
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
                <NavLink to="/RR_UlbiTV" className="m-t-items__navlink">
                  RR_UlbiTV
                </NavLink>
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
                    <Link to="/SecondPage" className="">
                      SecondPage
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
                <NavLink to="users/*" className="m-t-items__navlink activ-prob">
                  users
                </NavLink>
              </span>
              <span className="menu-top__items m-t-items">
                <NavLink
                  to="R3TS22_VMVlos"
                  className="m-t-items__navlink activ-prob"
                >
                  R3TS22_VMVlos
                </NavLink>
              </span>
              {/* 
                // Либо так можно
                <ul>
                  <li>
                    <Link></Link>
                  </li>
                </ul> 
                */}
              {/* </span> */}
            </nav>
            <nav className="header__menu-bottom">
              <span>
                {pressKeyL && pressKeyJ && pressKeyG && (
                  <span>
                    <a href="#">1</a>
                  </span>
                )}
                <span>
                  <a href="#">2</a>
                </span>
                <span>
                  <a href="#">3</a>
                </span>
                <MultiKeysPressed
                  // keys={["Alt", "Control", "Shift"]}
                  // keys={["Shift", "x", "z"]}
                  keys={["q", "w", "e"]}
                  keysPressed={keysPressed}
                  emoji="WIN"
                />
              </span>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
