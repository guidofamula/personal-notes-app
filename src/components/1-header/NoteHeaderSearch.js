import React from 'react';

function NoteHeaderSearch({ onSearch }) {
  return (
    <div className='note-search'>
      <input type='text' placeholder='Cari catatan...' onChange={(event) => onSearch(event.target.value)} />
    </div>
  );
}

export default NoteHeaderSearch;
