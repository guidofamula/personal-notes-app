import React from 'react';
import NoteHeaderSearch from './1-header/NoteHeaderSearch';
import NoteHeaderTitle from './1-header/NoteHeaderTitle';
import NoteInputItem from './NoteInputItem';
import { getInitialData } from '../utils/data';
import NoteListItem from './2-item-body/NoteListItem';
import NoteListArchive from './3-item-archive/NoteListArchive';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onUndoHandler = this.onUndoHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        if (note.archived === false) {
          return { ...note, archived: true };
        } else {
          return { ...note, archived: false };
        }
      }
      return note;
    });
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toDateString(),
          },
        ],
      };
    });
  }

  onUndoHandler(id) {
    const notes = this.state.notes.filter((note) => note.id === id);
    const undoNotes = (notes[0].archived = false);
    this.setState({ undoNotes });
  }

  onSearchHandler(title) {
    let notes;
    if (title !== '' && title.length > 0) {
      notes = this.state.notes.filter((note) => {
        return note.title.toLowerCase().includes(title.toLowerCase());
      });
    } else {
      notes = getInitialData();
    }
    this.setState({ notes });
    notes.preventDefault();
  }

  render() {
    const searchNotes = !this.state.search ? this.state.notes : this.state.notes.filter((note) => note.title.toLowerCase().match(this.state.search));

    const enableNotes = searchNotes.filter((note) => {
      return note.archived === false;
    });
    const archivedNotes = searchNotes.filter((note) => {
      return note.archived === true;
    });

    return (
      <>
        <div className='note-app__header'>
          <NoteHeaderTitle />
          <NoteHeaderSearch onSearch={this.onSearchHandler} />
        </div>
        <div className='note-app__body'>
          <NoteInputItem addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          {enableNotes.length !== 0 ? <NoteListItem notes={enableNotes} text='Arsipkan' onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} /> : <p className='notes-list__empty-message'>Tidak ada catatan</p>}
          <h2>Arsip</h2>
          {archivedNotes.length !== 0 ? (
            <NoteListArchive notes={archivedNotes} text='Pindahkan' onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onUndo={this.onUndoHandler} />
          ) : (
            <p className='notes-list__empty-message'>Tidak ada catatan</p>
          )}
        </div>
      </>
    );
  }
}

export default NotesApp;
