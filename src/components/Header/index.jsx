import React from "react";
import { FaSearch } from "react-icons/fa";

export default function index() {
  return (
    <header className="flex justify-evenly w-screen items-center flex-col md:flex-row h-32 text-lg">
      <h2>LOGO</h2>

      <nav className="w-5/6 md:w-2/5">
        <ul className="flex justify-between">
          <li>
            <a className="text-cyan-600 cursor-pointer" href="#">
              home
            </a>
          </li>
          <li>
            <a className="text-cyan-600 cursor-pointer" href="#">
              about us
            </a>
          </li>
          <li>
            <a className="text-cyan-600 cursor-pointer" href="#">
              info
            </a>
          </li>
          <li>
            <a className="text-cyan-600 cursor-pointer" href="#">
              shop
            </a>
          </li>
        </ul>
      </nav>

      <FaSearch className="md:flex hidden cursor-pointer" />
    </header>
  );
}
