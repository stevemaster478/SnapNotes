/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

interface NoteEditorProps {
  onSave: (note: { title: string; content: string }) => void;
}

const NoteEditor: React.FC<NoteEditorProps> = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    onSave({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div className="note-editor">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default NoteEditor;

