import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

// доп меню ч/з хук AllKey
import { useAllKeysPress } from "../../hooks/useAllKeysPress";

export function Header() {
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
  useEffect(() => {
    if (combinePress === true) {
      setProvCombinePress(true);
    }
  }, [combinePress, provCombinePress]);

  return (
    <>
      <header className="header shadow-md bg-gray-500">
        <div className="header-container">
          <div className="header__logo">
            <Link to="/" className="header__link">
              {/* <img
                className="header__img"
                src={require("../../img/vr/logo/ЕжеСветRedBlackWhiteEff.png")}
                alt=""
              /> */}
              <h3>RRRTSA++</h3>
            </Link>
          </div>
          <div className="header__menu">
            {/* MENU_TOP */}
            <nav className="header__menu-top menu-top flex flex-wrap justify-between items-center text-white">
              {/* RR_Doc */}
              <span className="menu-top__items m-t-items">
                <NavLink
                  to="/RR_Doc"
                  // задать свой класс в Link ч/з тернарн.опер.
                  // className={({ isActive }) => (isActive ? "active-prob" : "")}
                  className="m-t-items__navlink activ-prob"
                >
                  RR_Doc
                </NavLink>
              </span>
              {/* R3TS22_VM */}
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
              {/* RR_ULBITV */}
              <span className="menu-top__items m-t-items">
                <NavLink to="RR_UlbiTV" className="m-t-items__navlink">
                  RR_ULBITV
                </NavLink>
                <ul className="m-t-items__ul m-t-its-ul">
                  <li className="m-t-its-ul__li">
                    <Link to="Lesson2" className="">
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
              {/* RRTS_UlbiTV */}
              <span className="menu-top__items m-t-items">
                <NavLink to="/RRTS_UlbiTV" className="m-t-items__navlink">
                  RRTS_UlbiTV
                </NavLink>
              </span>
              {/* RR_MN */}
              <span className="menu-top__items m-t-items">
                <NavLink to="RR_MN" className="m-t-items__navlink">
                  RR_MN
                </NavLink>
                <ul className="m-t-items__ul m-t-its-ul">
                  <li className="m-t-its-ul__li">
                    <Link to="OutletOpt" className="">
                      OutletOpt
                    </Link>
                  </li>
                  <li className="m-t-its-ul__li">
                    <Link to="NavAndLink" className="">
                      NavAndLink
                    </Link>
                  </li>
                  <li className="m-t-its-ul__li">
                    <Link to="/BlogParam" className="">
                      BlogParam
                    </Link>
                  </li>
                  <li className="m-t-its-ul__li">
                    <Link to="/ThirdPage" className="">
                      ThirdPage
                    </Link>
                  </li>
                </ul>
              </span>
            </nav>
            {/* MENU_BOTTOM */}
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
