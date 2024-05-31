import PropTypes from "prop-types";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";

function ArchiveButton({ id, archived, onArchive }) {
  const { locale } = useContext(LocaleContext);

  const archive = () => {
    onArchive(id);
  };

  return (
    <button className="notes-item__archive" onClick={(archive)}>
      {archived ? <p>{locale === "id" ? "Batalkan Arsip" : "Unarchive"}</p> : <p>{locale === "id" ? "Arsipkan" : "Archive"}</p>}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
