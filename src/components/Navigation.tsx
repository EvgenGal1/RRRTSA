import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export function Navigation() {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
          <Link to="/" className="font-bold">
            <h3>RRRTS++</h3>
          </Link>
          <span>
            <Link to="/RR_Doc" className="mr-5">
              RR_Doc
            </Link>
            <Link to="/R3TS22_VM" className="mr-5 --asd--">
              R3TS22_VM
            </Link>
            {/* // ??? не раб - Warning: validateDOMNesting(...): <a> не может быть потомком <a>.  */}
            {/* // * узнать о вложенностях ссылок в react для многоуровневых раскрывающихся списках-ссылках */}
            <Link to="/favorites" className="mr-5 --asd2--">
              favorites
            </Link>
            <Link to="/HomePage" className="mr-5 --asd2--">
              HomePage
            </Link>
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
