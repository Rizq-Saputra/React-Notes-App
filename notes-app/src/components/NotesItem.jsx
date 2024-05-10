import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NotesItem({ title, body, id, onDelete, onArchive, createdAt, archived }) {
  return (
    <div className="note-item">
      <NotesItemBody title={title} body={body} createdAt={createdAt} />
      <div className="button-handler">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive}  archived={archived} />
      </div>
    </div>
  );
}

export default NotesItem;
