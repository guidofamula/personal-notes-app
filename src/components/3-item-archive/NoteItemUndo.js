import React from 'react';
import NoteItemBody from '../2-item-body/NoteItemBody';
import NoteOptionUndo from './NoteOptionUndo';

function NoteItemUndo({ id, title, createdAt, body, onDelete, onUndo }) {
  return (
    <div className='note-item'>
      <NoteItemBody title={title} createdAt={createdAt} body={body} />
      <NoteOptionUndo id={id} onDelete={onDelete} onUndo={onUndo} />
    </div>
  );
}

export default NoteItemUndo;
