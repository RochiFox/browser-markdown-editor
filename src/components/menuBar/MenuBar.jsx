import data from "../../data/data.json";
import MoonLight from "../../assets/images/icon-light-mode.svg";
import MoonDark from "../../assets/images/icon-dark-mode.svg";
import DocumentFile from "../documentFile/DocumentFIle";
import "./index.css";

function MenuBar() {
  return (
    <div className="menu">
      <h4 className="menu__title">My documents</h4>
      <button className="menu__create-btn">+ New Document</button>

      {data.map((item) => (
        <DocumentFile
          key={item.id}
          name={item.name}
          createdAt={item.createdAt}
        />
      ))}

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
        <img src={MoonDark} alt="dark theme logo" className="menu__logo-dark" />
      </div>
    </div>
  );
}

export default MenuBar;
