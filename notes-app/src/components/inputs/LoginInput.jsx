import PropTypes from "prop-types";
import UseInput from "../../hooks/UseInput";

function LoginInput({ login }) {
    const [email, onEmailChange] = UseInput('');
    const [password, onPasswordChange] = UseInput('');

    function onSubmitHandler(event) {
        event.preventDefault();

        login({ email, password });
    }

    return (
        <form onSubmit={onSubmitHandler} className="login-input">
            <label>Email</label>
            <input type="email" value={email} onChange={onEmailChange} required />
            <label>Password</label>
            <input type="password" value={password} onChange={onPasswordChange} required />
            <button>Login</button>
        </form>
    );
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
};

export default LoginInput;