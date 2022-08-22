import React from 'react';
import NoteItemUndo from './NoteItemUndo';

function NoteListArchive({ notes, onDelete, onUndo }) {
  return (
    <div className='notes-list'>
      {notes.map((note) => (
        <NoteItemUndo key={note.id} id={note.id} onDelete={onDelete} onUndo={onUndo} {...note} />
      ))}
    </div>
  );
}

export default NoteListArchive;
