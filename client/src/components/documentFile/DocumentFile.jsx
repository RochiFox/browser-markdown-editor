import "./index.css";
import DocumentLogo from "../../assets/images/icon-document.svg";

function DocumentFile({ name, createdAt, onClick, isSelected }) {
  return (
    <div
      className={`menu__block ${isSelected ? "menu__block_active" : ""}`}
      onClick={onClick}
    >
      <img src={DocumentLogo} alt="document logo" className="menu__image" />

      <div className="menu__info">
        <p className="menu__date">{createdAt}</p>

        <h5 className="menu__filename">{name}</h5>
      </div>
    </div>
  );
}

export default DocumentFile;
