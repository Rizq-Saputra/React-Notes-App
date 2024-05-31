import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/inputs/RegisterInput";
import { register } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";

function RegisterPage() {
  const navigate = useNavigate();
  const { locale } = React.useContext(LocaleContext);

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <div className="notes-app">
      <section className="register-page">
        <h2>
          {locale === "id"
            ? "Daftar"
            : "Register"}
        </h2>
        <RegisterInput register={onRegisterHandler} />
        <p className="text-link">
          {locale === "id" ? "Sudah punya akun? " : "Already have an account? "}
          <Link to="/">{locale === "id" ? "Login" : "Masuk"}</Link>
        </p>
      </section>
    </div>
  );
}

export default RegisterPage;
