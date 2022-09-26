import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.scss";

export function Navigation() {
  // function activprob() {

  // }
  // activprob()
  const [hover, setHover] = useState(false);

  return (
    <>
      <header className="header shadow-md bg-gray-500">
        <div className="header-container">
          <Link to="/" className="header__logo font-bold">
            <h3>RRRTS++</h3>
          </Link>
          <div className="header__menu">
            <nav className="header__menu-top menu-top flex justify-between items-center h-[50px] px-5   text-white">
              {/* <span className="menu-top__span top-span"> */}
              <span className="menu-top__items  m-t-items mr-5 ">
                <NavLink to="/RR_Doc" className="m-t-items__navlink activ-prob">
                  RR_Doc
                </NavLink>
              </span>
              <span className="menu-top__items m-t-items mr-5 ">
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
              <span className="menu-top__items m-t-items mr-5 ">
                <NavLink to="/RR_UlbiTV" className="m-t-items__navlink">
                  RR_UlbiTV
                </NavLink>
              </span>
              <span className="menu-top__items m-t-items mr-5 ">
                <NavLink to="/RRTS_UlbiTV" className="m-t-items__navlink">
                  RRTS_UlbiTV
                </NavLink>
              </span>
              <span className="menu-top__items m-t-items mr-5 ">
                <NavLink
                  to="RR_MN"
                  className="m-t-items__navlink"
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
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
              <span className="menu-top__items m-t-items mr-5 ">
                <NavLink to="users/*" className="m-t-items__navlink activ-prob">
                  users
                </NavLink>
              </span>
              <span className="menu-top__items m-t-items mr-5 ">
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
                <span>{/* <a href="#">1</a> */}</span>
                <span>{/* <a href="#">2</a> */}</span>
                <span>{/* <a href="#">3</a> */}</span>
              </span>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
