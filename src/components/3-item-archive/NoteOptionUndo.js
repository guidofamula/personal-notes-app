import React from 'react';
import ButtonDelete from '../4-button/ButtonDelete';
import ButtonUndo from '../4-button/ButtonUndo';

function NoteOptionUndo({ id, onDelete, onUndo }) {
  return (
    <div className='note-item__action'>
      <ButtonDelete onDelete={onDelete} id={id} />
      <ButtonUndo onUndo={onUndo} id={id} />
    </div>
  );
}

export default NoteOptionUndo;
