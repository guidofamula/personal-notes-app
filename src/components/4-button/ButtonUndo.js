import React from 'react';

function ButtonUndo({ id, onUndo }) {
  return (
    <button className='note-item__archive-button' onClick={() => onUndo(id)}>
      Pindahkan
    </button>
  );
}

export default ButtonUndo;
