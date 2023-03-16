import React, { useContext } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/ext-language_tools";

import { EditorContext } from "../../context/context";

export default function CssEditor() {

  const {css, setCss} = useContext(EditorContext)

  return (
    <div>
      <AceEditor
        value={css}
        onChange={value => setCss(value)}
        width="100%"
        height="850px"
        placeholder="Happy hacking!"
        mode="css"
        theme="solarized_dark"
        name="editor_html"
        fontSize={18}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
}
