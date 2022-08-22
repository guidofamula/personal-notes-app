import React from 'react';
import NoteItem from './NoteItem';

function NoteListItem({ notes, onDelete, onArchive }) {
  return (
    <div className='notes-list'>
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
      ))}
    </div>
  );
}

export default NoteListItem;
