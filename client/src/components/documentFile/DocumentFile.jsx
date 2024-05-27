import PropTypes from "prop-types";
import "./index.scss";
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

DocumentFile.propTypes = {
  name: PropTypes.string,
  createdAt: PropTypes.instanceOf(Date),
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default DocumentFile;
