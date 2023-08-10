/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Note from "./note";

interface NoteListProps {
  notes: { title: string; content: string }[];
  onDeleteNote: (index: number) => void;
  onEditNote: (index: number, newTitle: string, newContent: string) => void;
}

const NoteList: React.FC<NoteListProps> = ({
  notes,
}) => {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <Note
          key={index}
          title={note.title}
          content={note.content}
        />
      ))}
    </div>
  );
};

export default NoteList;



