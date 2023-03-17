import React, { useState } from "react";
import HtmlEditor from "../Editors/HtmlEditor";
import CssEditor from '../Editors/CssEditor'
import JsEditor from '../Editors/JsEditor'
import styles from "./CodeBar.module.css";

export default function CodeBar() {
  const [activeTab, setActiveTab] = useState("html");

  return (
    <div className={styles.codebar}>
      <nav className={styles.tab}>
        <button
          onClick={() => setActiveTab("html")}
          className={`${styles.item} ${
            activeTab == "html" ? styles.active : ""
          }`}
        >
          HTML
        </button>
        <button
          onClick={() => setActiveTab("css")}
          className={`${styles.item} ${
            activeTab == "css" ? styles.active : ""
          }`}
        >
          CSS
        </button>
        <button
          onClick={() => setActiveTab("js")}
          className={`${styles.item} ${activeTab == "js" ? styles.active : ""}`}
        >
          JS
        </button>
      </nav>
      <div className={styles.editor}>
          {activeTab == "html" ? <HtmlEditor /> : activeTab == "css" ? <CssEditor /> : <JsEditor />}
      </div>
    </div>
  );
}
