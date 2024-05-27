import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { selectDocumentId } from "../../redux/reducers/documentSlice";
import axios from "axios";
import PropTypes from "prop-types";
import "./index.scss";
import "./../../assets/markdownStyles/markdown-styles.scss";

function Main({ markdownText, setMarkdownText, setFileName }) {
  const selectedDocumentId = useSelector(selectDocumentId);
  const [previewHideButton, setPreviewHideButton] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  // Set current/default document text and title
  useEffect(() => {
    if (selectedDocumentId) {
      axios
        .get(`http://127.0.0.1:8000/api/markdown/${selectedDocumentId}`)
        .then((response) => {
          setMarkdownText(response.data.results.text);
          setFileName(response.data.results.title);
        })
        .catch((error) => {
          console.log("Error fetching document content: ", error);
          setMarkdownText("");
          setFileName("");
        });
    } else {
      axios
        .get(`http://127.0.0.1:8000/api/markdown`)
        .then((response) => {
          if (response.data.results.length > 0) {
            setMarkdownText(response.data.results[0].text);
            setFileName(response.data.results[0].title);
          } else {
            setMarkdownText("");
            setFileName("");
          }
        })
        .catch((error) => {
          console.log("Error fetching default document content: ", error);
          setMarkdownText("");
          setFileName("");
        });
    }
  }, [selectedDocumentId, setMarkdownText, setFileName]);

  const handleTextChange = (event) => {
    setMarkdownText(event.target.value);
  };

  const handleHideButton = () => {
    setPreviewHideButton(!previewHideButton);
  };

  return (
    <div className="main">
      <div
        className={`main__left-side ${
          previewHideButton ? "main__left-side_short" : ""
        }`}
      >
        <div className="markdown">
          <div
            className={`markdown__title-block ${
              isDarkMode
                ? "markdown__title-block_light"
                : "markdown__title-block_dark"
            }`}
          >
            <h2 className="markdown__title">Markdown</h2>
          </div>

          <textarea
            className={`markdown__textarea ${
              isDarkMode
                ? "markdown__textarea_light"
                : "markdown__textarea_dark"
            }`}
            onChange={handleTextChange}
            value={markdownText}
          ></textarea>
        </div>
      </div>

      <div
        className={`main__right-side ${
          previewHideButton ? "main__right-side_long" : ""
        }`}
      >
        <div className="preview">
          <div
            className={`preview__title-block ${
              isDarkMode
                ? "preview__title-block_light"
                : "preview__title-block_dark"
            }`}
          >
            <h2 className="preview__title">Preview</h2>

            <button
              className={`preview__show-btn ${
                previewHideButton ? "" : "preview__show-btn_active"
              }`}
              onClick={handleHideButton}
            />
          </div>

          <div
            className={`preview__text ${
              isDarkMode ? "preview__text_light" : "preview__text_dark"
            }`}
          >
            <div className="preview__content">
              <ReactMarkdown
                className={`markdown-content ${
                  isDarkMode
                    ? "markdown-content_light"
                    : "markdown-content_dark"
                }`}
              >
                {markdownText}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {
  markdownText: PropTypes.string,
  setMarkdownText: PropTypes.func.isRequired,
  setFileName: PropTypes.func.isRequired,
};

export default Main;
