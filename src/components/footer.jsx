import "../styles/footer.css";
import { navItems } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h3>IT Center</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h3>Permalinks</h3>
                <ul>
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <h3>Biz Bilan Bog'lanish</h3>
            <ul>
              <li>
                <a href="tel:+998901234567">
                  <i class="bi bi-phone"></i> Telefon: +998 91 123 45 67
                </a>
              </li>
              <li>
                <a href="mailto:example@gmail.com">
                  <i class="bi bi-envelope"></i> Gmail: example@gmail.com
                </a>
              </li>
              <li>
                <a href="https://goo.gl/maps/Nv1biWyfVKdQWaAr5">
                  <i class="bi bi-geo-alt"></i> Manzil: Pochta Binosi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
