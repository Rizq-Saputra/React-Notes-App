import { useState, useMemo, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AddPage from "../pages/AddPage";
import ArchivePage from "../pages/ArchivePage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import Header from "./Header";
import { getUserLogged, putAccessToken } from "../utils/api";
import { LocaleProvider } from "../contexts/LocaleContext";
import { ThemeProvider } from "../contexts/ThemeContext";

function NotesApp() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const themeContext = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  });

  const toggleLocale = () => {
    setLocale((prev) => {
      const newLocale = prev === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      setLocale(newLocale);
    });
  };

  const localeContext = useMemo(
    () => ({
      locale,
      toggleLocale,
    }),
    [locale]
  );

  const fetchUserLogged = async () => {
    const response = await getUserLogged();
    setAuthedUser(response.data);
  };

  useEffect(() => {
    fetchUserLogged();
    setInitializing(false);
  }, []);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    fetchUserLogged();
    navigate("/home");
  }

  async function onLogout() {
    putAccessToken(null);
    setAuthedUser(null);
    navigate("/");
  }

  if (initializing) {
    return <p>Loading...</p>;
  }

  if (authedUser === null) {
    return (
      <LocaleProvider value={localeContext}>
        <ThemeProvider value={themeContext}>
          <div>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </LocaleProvider>
    );
  }

  return (
    <ThemeProvider value={themeContext}>
      <LocaleProvider value={localeContext}>
        <div>
          <Header authedUser={authedUser} onLogout={onLogout} />
          <main>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/archive" element={<ArchivePage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default NotesApp;
