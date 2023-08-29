import { useState } from "react";
import "./index.css";
import Logo from "../../assets/images/logo.svg";
import DocumentLogo from "../../assets/images/icon-document.svg";
import SaveLogo from "../../assets/images/icon-save.svg";
import MoonLight from "../../assets/images/icon-light-mode.svg";
import MoonDark from "../../assets/images/icon-dark-mode.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`header ${menuOpen ? "menu-open" : ""}`}>
      <div className="header__left-side">
        <div className="header__menu-btn hamburger">
          <input type="checkbox" id="menu-toggle" onClick={handleMenuToggle} />
          <label className="hamburger__btn" htmlFor="menu-toggle">
            <span></span>
          </label>
        </div>
        <div className="menu">
          <h4 className="menu__title">My documents</h4>
          <button className="menu__create-btn">+ New Document</button>
          <div className="menu__block">
            <img
              src={DocumentLogo}
              alt="document logo"
              className="menu__image"
            />
            <div className="menu__info">
              <p className="menu__date">04 January 2022</p>
              <h5 className="menu__filename">welcome.md</h5>
            </div>
          </div>
          <div className="menu__block">
            <img
              src={DocumentLogo}
              alt="document logo"
              className="menu__image"
            />
            <div className="menu__info">
              <p className="menu__date">04 January 2022</p>
              <h5 className="menu__filename">untitled-document.md</h5>
            </div>
          </div>
          <div className="menu__theme">
            <img
              src={MoonLight}
              alt="light theme logo"
              className="menu__logo-light"
            />
            <input
              type="checkbox"
              id="theme-switch"
              name="theme-switch"
              className="menu__theme-switch"
            />
            <label htmlFor="theme-switch" className="menu__theme-label">
              <span></span>
            </label>
            <img
              src={MoonDark}
              alt="dark theme logo"
              className="menu__logo-dark"
            />
          </div>
        </div>
        <div className="header__block">
          <img src={Logo} alt="logo" className="header__logo" />
          <span className="header__vertical-line" />
          <div className="header__document document">
            <img
              src={DocumentLogo}
              alt="document logo"
              className="document__logo"
            />
            <div className="document__block">
              <p className="document__subtitle">Document Name</p>
              <h4 className="document__title">welcome.md</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="header__right-side">
        <button className="header__delete-btn" />
        <button className="header__save-btn">
          <img src={SaveLogo} alt="save logo" className="header__save-logo" />
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Header;
