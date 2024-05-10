import React from "react";
import NotesList from "./NotesList";
import { getData } from "../utils/data";
import NotesInput from "./NotesInput";
import Header from "./Header";
import SearchInput from "./SearchInput";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
      search: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const updatedNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: updatedNotes });
  }

  onAddNoteHandler({ title, body }) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
    }));
  }

  onSearchHandler(value) {
    this.setState({ search: value });
  }

  onArchiveHandler(id) {
    const updateNotes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes: updateNotes });
  }

  render() {
    const { notes, search } = this.state;

    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(search.toLowerCase())
    );

    const activeNotes = filteredNotes.filter((note) => !note.archived);
    const archivedNotes = filteredNotes.filter((note) => note.archived);

    return (
      <div>
        <Header />
        <div className="notes-app">
          <h1>Tambah Catatan</h1>
          <NotesInput addNote={this.onAddNoteHandler} />
          <SearchInput value={search} onSearch={this.onSearchHandler} />
          <h1>Daftar Catatan</h1>
          <NotesList notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
          <h1>Arsip Catatan</h1>
          <NotesList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        </div>
      </div>
    );
  }
}

export default NotesApp;
