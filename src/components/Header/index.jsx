import React from "react";
import { FaSearch } from "react-icons/fa";

export default function index() {
  return (
    <header>
      <h2>LOGO</h2>

      <nav>
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about us</a>
          </li>
          <li>
            <a href="#">info</a>
          </li>
          <li>
            <a href="#">shop</a>
          </li>
        </ul>
      </nav>

      <FaSearch />
    </header>
  );
}
