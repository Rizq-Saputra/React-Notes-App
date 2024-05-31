import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import PropTypes from "prop-types";

function NotesItem({ title, body, id, onDelete, onArchive, createdAt, archived }) {
  return (
    <div className="note-item">
      <NotesItemBody id={id} title={title} body={body} createdAt={createdAt} />
      <div className="button-handler">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive}  archived={archived} />
      </div>
    </div>
  );
}

NotesItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool,
};

export default NotesItem;
