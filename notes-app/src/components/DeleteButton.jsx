import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
import { useContext } from "react";

function DeleteButton({ id, onDelete }) {
  const { locale } = useContext(LocaleContext);

  const Delete = () => {
    onDelete(id);
  };

  return (
    <button className="notes-item__delete" onClick={Delete}>
      {locale === "id" ? "Hapus" : "Delete"}
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
