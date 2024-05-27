import { useState } from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";

function Home() {
  const [markdownText, setMarkdownText] = useState("");
  const [fileName, setFileName] = useState("");

  return (
    <>
      <Header
        markdownText={markdownText}
        fileName={fileName}
        setFileName={setFileName}
      />
      <Main
        markdownText={markdownText}
        setMarkdownText={setMarkdownText}
        setFileName={setFileName}
      />
    </>
  );
}

export default Home;
