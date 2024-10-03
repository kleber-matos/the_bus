import React from "react";
import { FaSearch, FaBus } from "react-icons/fa";

export default function index() {
  return (
    <header className="bg-cyan-600 flex justify-evenly w-screen items-center flex-col md:flex-row h-32 text-lg">
      <FaBus className="text-white hover:text-zinc-300 cursor-pointer" />

      <nav className="w-5/6 md:w-2/5">
        <ul className="flex justify-between flex-wrap">
          <li>
            <a
              className="text-white cursor-pointer hover:text-zinc-300"
              href="#"
            >
              home
            </a>
          </li>
          <li>
            <a
              className="text-white cursor-pointer hover:text-zinc-300"
              href="#"
            >
              about us
            </a>
          </li>
          <li>
            <a
              className="text-white cursor-pointer hover:text-zinc-300"
              href="#"
            >
              info
            </a>
          </li>
          <li>
            <a
              className="text-white cursor-pointer hover:text-zinc-300"
              href="#"
            >
              shop
            </a>
          </li>
        </ul>
      </nav>

      <FaSearch className="md:flex hidden cursor-pointer hover:text-zinc-300 text-white" />
    </header>
  );
}
