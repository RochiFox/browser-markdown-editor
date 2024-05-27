import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  selectDocumentId,
  selectDocument,
} from "../../redux/reducers/documentSlice";
import PropTypes from "prop-types";
import "./index.scss";
import IconClose from "../../assets/images/icon-close.svg";

function DeletePopupMenu({ isOpen, onClose }) {
  const selectedDocumentId = useSelector(selectDocumentId);
  const dispatch = useDispatch();
  const [fileName, setFileName] = useState("");

  // Set current/default document title on popup
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

  if (!isOpen) {
    return null;
  }

  // Delete the current document and return to the first one
  const handleDelete = () => {
    if (selectedDocumentId) {
      axios
        .delete(
          `http://127.0.0.1:8000/api/markdown/delete/${selectedDocumentId}`
        )
        .then((response) => {
          console.log(response.data.message);
          axios
            .get(`http://127.0.0.1:8000/api/markdown`)
            .then((response) => {
              if (response.data.results.length > 0) {
                const firstDocumentId = response.data.results[0].id;
                dispatch(selectDocument(firstDocumentId));
              } else {
                dispatch(selectDocument(null));
              }
            })
            .catch((error) => {
              console.log("Error fetching documents after deletion: ", error);
            });
          onClose();
        })
        .catch((error) => {
          console.log("Error deleting document: ", error);
        });
    }
  };

  return (
    <div className="popup">
      <div className="popup__container">
        <h4 className="popup__title">Delete this document?</h4>

        <button className="popup__close-btn" onClick={onClose}>
          <img src={IconClose} alt="close icon" className="popup__close-btn" />
        </button>

        <p className="popup__subtitle">
          Are you sure you want to delete the &apos;<span>{fileName}</span>
          &apos; document and its contents? This action cannot be reversed.
        </p>

        <button className="popup__confirm-btn" onClick={handleDelete}>
          Confirm & Delete
        </button>
      </div>
      {isOpen && <div className="popup__overlay" onClick={onClose} />}
    </div>
  );
}

DeletePopupMenu.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default DeletePopupMenu;
