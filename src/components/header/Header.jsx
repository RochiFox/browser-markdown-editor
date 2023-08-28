import "./index.css";
import Logo from "../../assets/images/logo.svg";
import DocumentLogo from "../../assets/images/icon-document.svg";
import SaveLogo from "../../assets/images/icon-save.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__left-side">
        <div className="header__menu-btn hamburger">
          <input type="checkbox" id="menu-toggle" />
          <label className="hamburger__btn" htmlFor="menu-toggle">
            <span></span>
          </label>
          <div className="menu__box"></div>
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
