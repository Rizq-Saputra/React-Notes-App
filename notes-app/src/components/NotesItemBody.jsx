import { showFormattedDate } from '../utils/index';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NotesItemBody({ title, id, body, createdAt }) {
  return (
    <div className="notes-body">
      <h3 className="notes-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="notes-item__body">{body}</p>
      <p className="notes-item__date">{showFormattedDate(createdAt)}</p>
    </div>
  );
}

NotesItemBody.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NotesItemBody;
