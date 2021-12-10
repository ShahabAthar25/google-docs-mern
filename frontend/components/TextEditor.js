import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import {
  EditorState,
  ContentState,
  convertToRaw,
  convertFromHTML,
} from "draft-js";
import draftToHtml from "draftjs-to-html";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

function TextEditor({ token, content }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (content !== "") {
      const contentBlock = convertFromHTML(content);
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);

      setEditorState(editorState);
    }
  }, []);

  const onEditorStateChange = async (editorState) => {
    setEditorState(editorState);

    const res = await fetch(
      `https://google-docs-mern.herokuapp.com/api/docs/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
      />
    </div>
  );
}

export default TextEditor;
