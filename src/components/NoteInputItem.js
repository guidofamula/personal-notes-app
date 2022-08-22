import React from 'react';

class NoteInputItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      maxChar: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (this.state.maxChar > 0) {
      this.setState((karakter) => {
        return {
          title: event.target.value,
          maxChar: karakter.maxChar - 1,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: '',
        body: '',
        maxChar: 50,
      };
    });
  }

  render() {
    return (
      <form className='note-input' onSubmit={this.onSubmitEventHandler}>
        <br />
        <h2>Buat Catatan</h2>
        <p className='note-input__title__char-limit'>Sisa karakter: {this.state.maxChar}</p>
        <input type='text' className='note-input__title' placeholder='Tuliskan judul catatan...' value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
        <textarea className='note-input__body' placeholder='Tuliskan catatanmu disini....' value={this.state.body} onChange={this.onBodyChangeEventHandler} required></textarea>
        <button type='submit'>Simpan Catatan</button>
      </form>
    );
  }
}

export default NoteInputItem;
