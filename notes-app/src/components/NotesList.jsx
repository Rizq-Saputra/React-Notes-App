import NotesItem from "./NotesItem";
import PropTypes from "prop-types";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";

function NotesList({ notes, onDelete, onArchive }) {
  const { locale } = useContext(LocaleContext);
  if (notes.length === 0) {
    return <div className="notes-list">{locale === "id" ? "Tidak ada catatan" : "Notes Empty"}</div>;
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NotesItem
          key={note.id}
          id={note.id}
          onDelete={() => onDelete(note.id)}
          onArchive={() => onArchive(note.id)}
          {...note}
        />
      ))}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NotesList;
