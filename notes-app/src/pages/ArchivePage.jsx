import React from "react";
import NotesList from "../components/NotesList";
// import SearchInput from "../components/SearchInput";
import { getArchivedNotes, deleteNote, unarchiveNote } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";
import ClipLoader from "react-spinners/ClipLoader";

function ArchivePage() {
  const [notesArchive, setNotesArchive] = React.useState([]);
  const { locale } = React.useContext(LocaleContext);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchNotes = async () => {
      try {
        const { error, data } = await getArchivedNotes();
        if (!error && Array.isArray(data)) {
          setNotesArchive(data);
        } else {
          console.error("Error fetching notes or data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching archived notes:", error);
      }
      setTimeout(() => {
        setLoading(false);
      }, 800); 
    };

    fetchNotes();
  }, []);

  async function onDeleteNoteHandler(id) {
    try {
      await deleteNote(id);
      const { data } = await getArchivedNotes();
      setNotesArchive(data);
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  }

  async function onUnarchiveHandler(id) {
    try {
      await unarchiveNote(id);
      const { data } = await getArchivedNotes();
      setNotesArchive(data);
    } catch (error) {
      console.error('Error archiving note:', error);
    }
  }

  return (
    <section className="notes-app">
      <h2>{locale === "id" ? "Daftar Arsip" : "Archived Notes"}</h2>
      {loading ? (
        <div className="loading-container">
          <ClipLoader className="loading" color={"#4caf50"} loading={loading} size={100} />
        </div>
      ) : (
      <NotesList
        notes={notesArchive}
        onDelete={onDeleteNoteHandler}
        onArchive={onUnarchiveHandler}
      />
      )}
    </section>
  );
}

export default ArchivePage;
