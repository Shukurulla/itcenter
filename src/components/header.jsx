import { useState } from "react";
import { Link } from "react-router-dom";
import { logo, navItems } from "../constants";
import "../styles/header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const [show, setShow] = useState(false);
  const { active } = useSelector((state) => state.ui);
  return (
    <header>
      <nav className="container">
        <div className="logo">
          <Link to={"/"} onClick={() => setActive(0)}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <i className="bi bi-list" onClick={() => setShow(true)}></i>
        <div className={`navigation ${show ? "show" : ""}`}>
          <ul className="navigation__list">
            <i className="bi bi-x-lg" onClick={() => setShow(false)}></i>
            {navItems.map((item, idx) => (
              <li
                key={item.label}
                onClick={() => setShow(false)}
                className="navigation__list-item"
              >
                <Link
                  to={item.path}
                  className={`${item.active === active ? "active" : ""}`}
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
