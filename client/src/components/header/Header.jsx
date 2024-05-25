import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectDocumentId } from "../../redux/reducers/documentSlice";
import axios from "axios";
import "./index.css";
import Logo from "../../assets/images/logo.svg";
import DocumentLogo from "../../assets/images/icon-document.svg";
import SaveLogo from "../../assets/images/icon-save.svg";
import MenuBar from "../menuBar/MenuBar";
import DeletePopupMenu from "../deletePopupMenu/DeletePopupMenu";

function Header() {
  const selectedDocumentId = useSelector(selectDocumentId);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [isSaveMessageVisible, setSaveMessageVisible] = useState(false);

  // Set current/default document title
  useEffect(() => {
    if (selectedDocumentId) {
      axios
        .get(`http://127.0.0.1:8000/api/markdown/${selectedDocumentId}`)
        .then((response) => {
          setFileName(response.data.results.title);
        })
        .catch((error) => {
          console.log("Error fetching document content: ", error);
          setFileName("");
        });
    } else {
      axios
        .get(`http://127.0.0.1:8000/api/markdown`)
        .then((response) => {
          if (response.data.results.length > 0) {
            setFileName(response.data.results[0].title);
          } else {
            setFileName("");
          }
        })
        .catch((error) => {
          console.log("Error fetching default document content: ", error);
          setFileName("");
        });
    }
  }, [selectedDocumentId]);

  const showSaveMessage = () => {
    setSaveMessageVisible(true);

    setTimeout(() => {
      setSaveMessageVisible(false);
    }, 3000);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

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

        <MenuBar />
      </div>

      <div className="header__nav">
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

              <input
                type="text"
                className="document__title"
                value={fileName}
                onChange={(event) => setFileName(event.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="header__right-side">
          <button className="header__delete-btn" onClick={openPopup} />

          <DeletePopupMenu isOpen={isPopupOpen} onClose={closePopup} />

          <button className="header__save-btn" onClick={showSaveMessage}>
            <img src={SaveLogo} alt="save logo" className="header__save-logo" />

            <span className="header__save-text">Save Changes</span>
          </button>
        </div>
      </div>
      {isSaveMessageVisible && (
        <div className="save-message">Changed saves</div>
      )}
    </div>
  );
}

export default Header;
