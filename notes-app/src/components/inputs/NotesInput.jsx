import React from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import LocaleContext from "../../contexts/LocaleContext";

function NotesInput ({ addNote }) {
  const { locale } = useContext(LocaleContext);
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [limit, setLimit] = React.useState(50);

  const onTitleChangeEventHandler = (event) => {
    const title = event.target.value;
    if (title.length <= 50) {
      setTitle(title);
      setLimit(50 - title.length);
    }
  };

  const onBodyChangeEventHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addNote({
      title,
      body,
    });

    setTitle("");
    setBody("");
    setLimit(50);
  };

  return (
    <form className="contact-input" onSubmit={onSubmitEventHandler}>
      <p>
      {locale === "id" ? "Sisa Karakter " : "Limit Character "}<strong>{limit}</strong>
      </p>
      <input
        type="text"
        placeholder={locale === "id" ? "Judul" : "Title"}
        value={title}
        onChange={onTitleChangeEventHandler}
      />
      <textarea
        name="content"
        rows="4"
        cols="50"
        className="note-input__content"
        placeholder={locale === "id" ? "Tulis Catatan" : "Write Note"}
        value={body}
        onChange={onBodyChangeEventHandler}
      />
      <button type="submit">{locale === "id" ? "Tambah Catatan" : "Add Note"}</button>
    </form>
  );

}

NotesInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NotesInput;
