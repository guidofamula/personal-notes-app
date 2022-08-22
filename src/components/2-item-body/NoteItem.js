import React from 'react';
import NoteItemBody from './NoteItemBody';
import NoteItemOption from './NoteItemOption';

function NoteItem({ title, createdAt, body, id, onDelete, onArchive }) {
  return (
    <div className='note-item'>
      <NoteItemBody title={title} createdAt={createdAt} body={body} />
      <NoteItemOption id={id} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export default NoteItem;
