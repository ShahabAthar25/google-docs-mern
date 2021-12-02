import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { convertFromRaw, convertToRaw } from "draft-js";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

function TextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (state) => {
    setEditorState(state);

    console.log(editorState);
  };

  return (
    <div className="bg-[#F8F9FA] h-5/7 overflow-y-scroll">
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="max-w-3xl mx-auto bg-white shadow-lg h-5/6"
      />
    </div>
  );
}

export default TextEditor;
