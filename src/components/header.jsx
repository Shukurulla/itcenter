import { useState } from "react";
import { Link } from "react-router-dom";
import { logo, navItems } from "../constants";
import "../styles/header.css";

const Header = () => {
  const [active, setActive] = useState(0);
  return (
    <header>
      <nav className="container">
        <div className="logo">
          <Link to={"/"} onClick={() => setActive(0)}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navigation">
          <ul className="navigation__list">
            {navItems.map((item, idx) => (
              <li key={item.label} className="navigation__list-item">
                <Link
                  to={item.path}
                  className={`${active === idx ? "active" : ""}`}
                  onClick={() => setActive(idx)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
