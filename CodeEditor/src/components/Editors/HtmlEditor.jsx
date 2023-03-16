import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/ext-language_tools";

export default function HtmlEditor() {
  return (
    <div>
      <AceEditor
        width="100%"
        height="850px"
        placeholder="Happy hacking!"
        mode="html"
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
