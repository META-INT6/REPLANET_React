import React, { useEffect, useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import DOMPurify from "dompurify";
import '../../../assets/css/draft.css';

export function TextEditor({ onContentChange }) {
  const [description, setDescription] = useState(() => EditorState.createEmpty());
  const [previewVisible, setPreviewVisible] = useState(false);

  const [convertedContent, setConvertedContent] = useState(null);

  useEffect(() => {
    const contentState = description.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const html = draftToHtml(rawContentState);

    // Call the callback function to send the HTML content back to the parent component
    onContentChange(html);

    setConvertedContent(html);
  }, [description]);

  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html),
    };
  }

  const togglePreview = (event) => {
    event.preventDefault();
    setPreviewVisible(!previewVisible);
  };

  return (
    <div className="draft">
      <button onClick={togglePreview} className={`bookmark-button ${previewVisible ? "active" : ""}`}>
        {previewVisible ? "Close Preview" : "Show Preview"}
      </button>
      {previewVisible ? (
        <div className="preview">
          <div dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
        </div>
      ) : (
        <div className="editor-container">
          <Editor
            editorState={description}
            onEditorStateChange={setDescription}
            toolbar={{
              options: ['blockType', 'textAlign', 'list', 'fontSize', 'inline', 'colorPicker', 'emoji', 'image', 'remove', 'history'],
              inline: { inDropdown: false },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
            }}
            localization={{
              locale: 'ko',
            }}
          />
        </div>
      )}
    </div>
  );
}
