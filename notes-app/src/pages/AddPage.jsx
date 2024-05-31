import { addNote } from "../utils/api";
import NotesInput from "../components/inputs/NotesInput";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";

function AddPage() {
 const { locale } = useContext(LocaleContext);

  const navigate = useNavigate();
  function onaddNotesHandler(notes) {
    addNote(notes);
    navigate("/home");
  }

  return (
    <section className="notes-app">
      <h2>{locale === "id" ? "Tambah Catatan" : "Add Note"}</h2>
      <NotesInput addNote={onaddNotesHandler} />
    </section>
  );
}

export default AddPage;
