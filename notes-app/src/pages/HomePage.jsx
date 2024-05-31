import React from "react";
import NotesList from "../components/NotesList";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";
import ClipLoader from "react-spinners/ClipLoader";

function HomePage() {
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    const fetchNotes = async () => {
      const { error, data } = await getActiveNotes();
      if (!error && Array.isArray(data)) {
        setNotes(data);
      } else {
        console.error("Error fetching notes or data is not an array:", data);
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
      const { data } = await getActiveNotes();
      setNotes(data);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  }

  async function onArchiveNoteHandler(id) {
    try {
      await archiveNote(id);
      const { data } = await getActiveNotes();
      setNotes(data);
    } catch (error) {
      console.error("Error archiving note:", error);
    }
  }

  return (
    <section className="notes-app">
      <h2>{locale === "id" ? "Daftar Catatan" : "Notes List"}</h2>
      {loading ? (
        <div className="loading-container">
          <ClipLoader className="loading" color={"#4caf50"} loading={loading} size={100} />
        </div>
      ) : (
        <NotesList
          notes={notes}
          onDelete={onDeleteNoteHandler}
          onArchive={onArchiveNoteHandler}
        />
      )}
    </section>
  );
}

export default HomePage;
