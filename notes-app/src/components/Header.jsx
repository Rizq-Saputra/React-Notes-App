import { useContext } from "react";
import Navigation from "./Navigation";
import ThemeContext from "../contexts/ThemeContext";
import LocaleContext from "../contexts/LocaleContext";
import PropTypes from "prop-types";

function Header({ authedUser, onLogout }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { locale, toggleLocale } = useContext(LocaleContext);

  return (
    <header>
      <h1>{locale === "id" ? "Aplikasi Catatan" : "Notes App"}</h1>
      <Navigation />
      <div className="header-actions">
        <button className="btn-locale-toggle" onClick={toggleLocale}>
          {locale === "id" ? "English" : "Bahasa Indonesia"}
        </button>
        <button className="btn-theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
        {authedUser && (
          <button className="btn-logout" onClick={onLogout}>
            Logout
          </button>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  authedUser: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Header;
