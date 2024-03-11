import "./index.css";
import IconClose from "../../assets/images/icon-close.svg";

function DeletePopupMenu({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup__container">
        <h4 className="popup__title">Delete this document?</h4>

        <button className="popup__close-btn" onClick={onClose}>
          <img src={IconClose} alt="close icon" className="popup__close-btn" />
        </button>

        <p className="popup__subtitle">
          Are you sure you want to delete the '<span>welcome.md</span>' document
          and its contents? This action cannot be reversed.
        </p>

        <button className="popup__confirm-btn">Confirm & Delete</button>
      </div>
      {isOpen && <div className="popup__overlay" onClick={onClose} />}
    </div>
  );
}

export default DeletePopupMenu;
