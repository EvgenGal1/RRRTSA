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
      <header className="header">
        <nav className="header__nav-top nav-top flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
          <NavLink to="/" className="nav-top__logo font-bold">
            <h3>RRRTS++</h3>
          </NavLink>
          <span className="nav-top__span top-span">
            <span className="top-span__item mr-5 ">
              <NavLink to="/RR_Doc" className="   ">
                RR_Doc
              </NavLink>
            </span>
            <span className="top-span__item top-item mr-5 ">
              <NavLink to="R3TS22_VM" className="top-item__navl activ-prob">
                R3TS22_VM
              </NavLink>
              {/* // ^ данная вложеность и переход на стр. возможен е/и сами влож.стр. добав. в общ. Routes, на один уровень с верхним NavLink */}
              <ul className="top-item__ul top-ul">
                <li className="top-ul__li">
                  <Link to="/HomePage" className="">
                    HomePage
                  </Link>
                </li>
                <li className="top-ul__li">
                  <Link to="/favorites" className="">
                    favorites
                  </Link>
                </li>
              </ul>
            </span>
            <span className="top-span__item top-item mr-5 ">
              <NavLink to="/RR_UlbiTV" className="top-item__navl activ-prob">
                RR_UlbiTV
              </NavLink>
            </span>
            <span className="top-span__item top-item mr-5 ">
              <NavLink to="/RRTS_UlbiTV" className="top-item__navl activ-prob">
                RRTS_UlbiTV
              </NavLink>
            </span>
            <span className="top-span__item top-item mr-5 ">
              <NavLink
                to="RR_MN"
                className="top-item__navl activ-prob"
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
              >
                RR_MN
              </NavLink>
              <ul className="top-item__ul top-ul">
                <li className="top-ul__li">
                  <Link to="/FirstPage" className="">
                    FirstPage
                  </Link>
                </li>
                <li className="top-ul__li">
                  <Link to="/SecondPage" className="">
                    SecondPage
                  </Link>
                </li>
                <li className="top-ul__li">
                  <Link to="/ThirdPage" className="">
                    ThirdPage
                  </Link>
                </li>
              </ul>
            </span>
            <span className="top-span__item top-item mr-5 ">
              <NavLink to="users/*" className="mr-5">
                users
              </NavLink>
            </span>
            <span className="top-span__item top-item mr-5 ">
              <NavLink to="R3TS22_VMVlos" className="mr-5">
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
          </span>
        </nav>
      </header>
    </>
  );
}
