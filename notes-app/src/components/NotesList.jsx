import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, onArchive }) {
  if (notes.length === 0) {
    return <div className="notes-list">Tidak ada catatan.</div>;
  }
  return (
    <div className="notes-list">
      {notes.map((notes) => (
        <NotesItem
          key={notes.id}
          id={notes.id}
          onDelete={onDelete}
          onArchive={onArchive}
          {...notes}
        />
      ))}
    </div>
  );
}

export default NotesList;
