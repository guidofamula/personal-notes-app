import React from 'react';
import ButtonArchive from '../4-button/ButtonArchive';
import ButtonDelete from '../4-button/ButtonDelete';

function NoteItemOption({ id, onDelete, onArchive }) {
  return (
    <div className='note-item__action'>
      <ButtonDelete onDelete={onDelete} id={id} />
      <ButtonArchive onArchive={onArchive} id={id} />
    </div>
  );
}

export default NoteItemOption;
