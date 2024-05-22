import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./../../redux/reducers/themeSlice";
import axios from "axios";
import MoonLight from "../../assets/images/icon-light-mode.svg";
import MoonDark from "../../assets/images/icon-dark-mode.svg";
import DocumentFile from "../documentFile/DocumentFile";
import "./index.css";

function MenuBar() {
  const [documents, setDocuments] = useState([]);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const selectedDocument = useSelector(
    (state) => state.document.selectedDocument
  );

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = () => {
    axios
      .get("http://127.0.0.1:8000/api/markdown")
      .then((response) => {
        setDocuments(response.data.results);
      })
      .catch((error) => {
        console.log("Some error: ", error);
      });
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };

    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getNextUntitledDocument = () => {
    const untitledDocuments = documents.filter((doc) =>
      doc.title.startsWith("untitled-")
    );

    const existingNumbers = untitledDocuments.map((doc) => {
      const match = doc.title.match(/untitled-(\d+)/);
      return match ? parseInt(match[1], 10) : 0;
    });

    let nextNumber = 1;

    while (existingNumbers.includes(nextNumber)) {
      nextNumber++;
    }
    return `untitled-${nextNumber}.md`;
  };

  const createNewDocument = () => {
    const newDocumentName = getNextUntitledDocument();
    axios
      .post("http://127.0.0.1:8000/api/markdown/add", {
        title: newDocumentName,
        text: "# Create your new markdown here!",
      })
      .then(() => {
        fetchDocuments();
      })
      .catch((error) => {
        console.log("Some error while creating a new document: ", error);
      });
  };

  // const handleDocumentClick = (document) => {
  //   dispatch(selectDocument(document));
  // };

  return (
    <div className="menu">
      <h4 className="menu__title">My documents</h4>

      <button className="menu__create-btn" onClick={createNewDocument}>
        + New Document
      </button>

      {documents.map((item) => (
        <DocumentFile
          key={item.id}
          name={item.title}
          createdAt={formatDate(item.created_at)}
          // onClick={() => handleDocumentClick(item)}
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
