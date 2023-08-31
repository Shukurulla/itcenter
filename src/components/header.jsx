import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { logo, navItems } from "../constants";
import "../styles/header.css";
import { Context } from "../context";

const Header = () => {
  const { active, setActive } = useContext(Context);
  const [show, setShow] = useState(false);

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
