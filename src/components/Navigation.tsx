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
          <Link to="/" className="nav-top__logo font-bold">
            <h3>RRRTS++</h3>
          </Link>
          <span className="nav-top__span top-span">
            <span className="top-span__item mr-5 ">
              <NavLink to="/RR_Doc" className="   ">
                RR_Doc
              </NavLink>
            </span>
            <span className="top-span__item top-item mr-5 ">
              <NavLink
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
                to="/R3TS22_VM"
                className="top-item__navl activ-prob"
              >
                R3TS22_VM
              </NavLink>
              <ul className="top-item__ul top-ul">
                <li className="top-ul__li">
                  <Link to="/favorites" className="">
                    favorites
                  </Link>
                </li>
                <li className="top-ul__li">
                  <Link to="/HomePage" className="">
                    HomePage
                  </Link>
                </li>
              </ul>
            </span>
            <Link to="/RR_UlbiTV" className="mr-5">
              RR_UlbiTV
            </Link>
            <Link to="/RRTS_UlbiTV" className="mr-5">
              RRTS_UlbiTV
            </Link>
            <Link to="users/*" className="mr-5">
              users
            </Link>
            <Link to="R3TS22_VMVlos" className="mr-5">
              R3TS22_VMVlos
            </Link>
            <Link to="RR_MN" className="mr-5">
              RR_MN
            </Link>
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
