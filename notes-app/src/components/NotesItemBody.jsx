import { formattedDate } from '../utils/data';

function NotesItemBody({ title, body, createdAt }) {
  return (
    <div className="notes-body">
      <h3 className="notes-item__title">{title}</h3>
      <p className="notes-item__body">{body}</p>
      <p className="notes-item__date">{formattedDate(createdAt)}</p>
    </div>
  );
}

export default NotesItemBody;
