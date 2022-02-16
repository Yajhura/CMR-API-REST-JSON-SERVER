import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

function Layout() {
  const [changecolor, setChangeColor] = useState({
    isHovered: false,
  });
  const handleMouseEnter = () => {
    setChangeColor({ isHovered: true });
  };
  const handleMouseLeave = () => {
    setChangeColor({ isHovered: false });
  };
  const location = useLocation();
  
  const urlActual = location.pathname
  
  return (
    <>
      <footer className="w-full flex flex-col items-center md:flex-row md:justify-around  py-10 px-5 bg-1  ">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        className="mb-2 md:mb-0 ">
          <Link
            to="/clientes"
            className={`text-xl flex text-4 font-black hover:text-white`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-users"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke={changecolor.isHovered ? "#fff" : "#FA58B6"}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>{" "}
            CRM-CLIENTES{" "}
          </Link>
        </div>

        <nav className="mr-0 md:mr-20 flex flex-col items-center md:flex-row font-bold text-xl text-4 ">
          <Link
            className={`${urlActual === "/clientes"? "text-white" : null } mb-2 md:mb-0 md:mr-10 hover:text-white transition-colors delay-150 `}
            to="/clientes"
          >
            Clientes
          </Link>
          <Link
            className={`${urlActual === "/clientes/nuevo"? "text-white" : null } md:mr-10 hover:text-white transition-colors delay-150 `}
            to="/clientes/nuevo"
          >
            Nuevo Clientes
          </Link>
        </nav>
      </footer>
      <div className="w-full p-5 md:p-20 bg-white">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
