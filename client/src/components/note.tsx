/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

interface NoteProps {
  title: string;
  content: string;
}

const Note: React.FC<NoteProps> = ({ title, content }) => {
  return (
    <div className="note">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Note;
