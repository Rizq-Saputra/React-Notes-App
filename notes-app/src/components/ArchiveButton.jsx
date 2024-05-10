function ArchiveButton({ id, archived, onArchive }) {
  return (
    <button className="notes-item__archive" onClick={() => onArchive(id)}>
      {archived ? <p>Pindahkan</p> : <p>Arsipkan</p>}
    </button>
  );
}

export default ArchiveButton;
