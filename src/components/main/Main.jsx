import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import data from "./../../data/data.json";
import "./index.css";
import "./../../assets/markdownStyles/markdown-styles.css";

function Main() {
  const initialMarkdownText = data[0].content;
  const [markdownText, setMarkdownText] = useState(initialMarkdownText);
  const [previewHideButton, setPreviewHideButton] = useState(false);

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
          <div className="markdown__title-block">
            <h2 className="markdown__title">Markdown</h2>
          </div>
          <textarea
            className="markdown__textarea"
            onChange={handleTextChange}
            defaultValue={initialMarkdownText}
          ></textarea>
        </div>
      </div>
      <div
        className={`main__right-side ${
          previewHideButton ? "main__right-side_long" : ""
        }`}
      >
        <div className="preview">
          <div className="preview__title-block">
            <h2 className="preview__title">Preview</h2>
            <button
              className={`preview__show-btn ${
                previewHideButton ? "" : "preview__show-btn_active"
              }`}
              onClick={handleHideButton}
            />
          </div>
          <div className="preview__text">
            <div className="preview__content">
              <ReactMarkdown className="markdown-content">
                {markdownText}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
