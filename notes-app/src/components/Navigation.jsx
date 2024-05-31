import { Link } from 'react-router-dom';
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";

function Navigation() {
  const { locale } = useContext(LocaleContext);

  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/home">{locale === "id" ? "Catatan" : "Notes"}</Link></li>
        <li><Link to="/add">{locale === "id" ? "Tambah Catatan" : "Add Note"}</Link></li>
        <li><Link to="/archive">{locale === "id" ? "Arsip" : "Archive"}</Link></li>
      </ul>
    </nav>
  );
}
 
export default Navigation;