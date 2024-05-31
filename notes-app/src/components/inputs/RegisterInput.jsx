import PropTypes from "prop-types";
import UseInput from "../../hooks/UseInput";

function RegisterInput({ register }) {
    const [name, onNameChange] = UseInput("");
    const [email, onEmailChange] = UseInput("");
    const [password, onPasswordChange] = UseInput("");

    function onSubmitHandler(event) {
        event.preventDefault();

        register({ 
            name: name,
            email: email,
            password: password
        });
    }

    return (
        <form onSubmit={onSubmitHandler} className="register-input">
            <label>Name</label>
            <input type="text" value={name} onChange={onNameChange} required />
            <label>Email</label>
            <input type="email" value={email} onChange={onEmailChange} required />
            <label>Password</label>
            <input type="password" value={password} onChange={onPasswordChange} required />
            <button>Register</button>
        </form>
    );
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
};

export default RegisterInput;