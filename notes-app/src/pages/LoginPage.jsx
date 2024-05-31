import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/inputs/LoginInput";
import LocaleContext from "../contexts/LocaleContext";
import { login } from "../utils/api";

function LoginPage({ loginSuccess }) {
  const { locale } = React.useContext(LocaleContext);

  async function onLoginHandler({ email, password }) {
    const { error, data } = await login({ email, password });
    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <div className="notes-app">
      <section className="login-page">
        <h2>
          {locale === "id"
            ? "Login"
            : "Masuk"}
        </h2>
        <LoginInput login={onLoginHandler} />
        <p className="text-link">
          {locale === "id" ? "Belum Punya akun?" : "Don't have an account? "}{" "}
          <Link to="/register">
            {locale === "id" ? "Daftar" : "Register"}
          </Link>
        </p>
      </section>
    </div>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
