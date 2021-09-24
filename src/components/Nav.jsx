import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.length <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);

  useEffect(() => {
    showButton();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          {" "}
          Home <i className="fa-solid fa-receipt" onClick={closeMobileMenu} />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/new" onClick={closeMobileMenu}>
              Order
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" onClick={closeMobileMenu}>
              Favorite
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
