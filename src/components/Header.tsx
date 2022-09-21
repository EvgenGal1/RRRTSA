import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  // const [, set] = use();
  return (
    <>
      <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
        <Link to="/">
          <h3>RRRTS++</h3>
        </Link>
        <span>
          <Link to="/RR_Doc" className="mr-5">
            RR_Doc
          </Link>
          <Link to="/R3TS22_VM" className="mr-5">
            R3TS22_VM
          </Link>
          <Link to="/favorites" className="mr-5">
            favorites
          </Link>
          <Link to="/RR_UlbiTV" className="mr-5">
            RR_UlbiTV
          </Link>
          <Link to="/RRTS_UlbiTV" className="mr-5">
            RRTS_UlbiTV
          </Link>
        </span>
      </nav>
    </>
  );
}
