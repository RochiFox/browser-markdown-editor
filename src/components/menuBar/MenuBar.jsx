import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./../../redux/reducers/themeSlice";
import { selectDocument } from "../../redux/reducers/documentSlice";
import data from "../../data/data.json";
import MoonLight from "../../assets/images/icon-light-mode.svg";
import MoonDark from "../../assets/images/icon-dark-mode.svg";
import DocumentFile from "../documentFile/DocumentFile";
import "./index.css";

function MenuBar() {
  const [documents, setDocuments] = useState(data);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const selectedDocument = useSelector((state) => state.document.selectedDocument)

  const createNewDocument = () => {
    const newDocument = {
      id: documents.length + 1,
      name: `untitled-${documents.length + 1}.md`,
      createdAt: new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };

    const updatedDocuments = [...documents, newDocument];

    setDocuments(updatedDocuments);
  };

  const handleDocumentClick = (document) => {
    dispatch(selectDocument(document));
  }

  return (
    <div className="menu">
      <h4 className="menu__title">My documents</h4>
      <button className="menu__create-btn" onClick={createNewDocument}>
        + New Document
      </button>

      {documents.map((item) => (
        <DocumentFile
          key={item.id}
          name={item.name}
          createdAt={item.createdAt}
          onClick={() => handleDocumentClick(item)}
          isSelected={item === selectedDocument}
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
          checked={isDarkMode}
          onChange={() => dispatch(toggleTheme())}
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
