import "./index.css";

function Main() {
  return (
    <div className="main">
      <div className="main__left-side">
        <div className="markdown">
          <div className="markdown__title-block">
            <h2 className="markdown__title">Markdown</h2>
          </div>
          <textarea className="markdown__textarea"></textarea>
        </div>
      </div>
      <div className="main__right-side">
        <div className="preview">
          <div className="preview__title-block">
            <h2 className="preview__title">Preview</h2>
            <button className="preview__show-btn preview__show-btn_active" />
          </div>
          <div className="preview__text"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
