import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/ext-language_tools";

export default function JsEditor() {
  return (
    <div>
      <AceEditor
        width="100%"
        height="850px"
        placeholder="Happy hacking!"
        mode="javascript"
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
