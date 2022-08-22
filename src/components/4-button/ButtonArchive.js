import React from 'react';

function ButtonArchive({ id, onArchive }) {
  return (
    <button className='note-item__archive-button' onClick={() => onArchive(id)}>
      Arsipkan
    </button>
  );
}

export default ButtonArchive;
