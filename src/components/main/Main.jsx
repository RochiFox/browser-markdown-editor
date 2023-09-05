import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import data from "./../../data/data.json";
import "./index.css";
import "./../../assets/markdownStyles/markdown-styles.css";

function Main() {
  const initialMarkdownText = data[0].content;
  const [markdownText, setMarkdownText] = useState(initialMarkdownText);

  const handleTextChange = (event) => {
    setMarkdownText(event.target.value);
  };

  return (
    <div className="main">
      <div className="main__left-side">
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
      <div className="main__right-side">
        <div className="preview">
          <div className="preview__title-block">
            <h2 className="preview__title">Preview</h2>
            <button className="preview__show-btn preview__show-btn_active" />
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
