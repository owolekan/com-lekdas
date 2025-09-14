import { Link } from "react-router-dom";

import { useState } from "react";
import "../index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="header">
      <div className="header__bar container">
        <h1 className="brand__logo">
        LEKDAS GLOBAL<span>VENTURES</span>
        </h1>

       
        <ul className={`nav ${open ? "show" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>

         
          <li className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => setDropdown(!dropdown)}
            >
              More ▾
            </button>
            <div className={`dropdown-menu ${dropdown ? "show" : ""}`}>
              <a href="/more#bookings">More</a>
              <Link to="/more/blog">Blog</Link> 
              <a href="#contact">Contact</a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
