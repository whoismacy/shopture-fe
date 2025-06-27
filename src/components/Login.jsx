import { useState } from "react";
import Email from "./Email";
import Password from "./Password";
import FormButton from "./FormButton";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleCheckbox(event) {
    setCheckbox(event.target.checked);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = { email, password, checkbox };
    console.log(data);
  }

  return (
    <div className="account-container">
      <div className="account-header">
        <h1 className="account-h1">Login</h1>
        <p className="sub-heading">Hi, Welcome back 👋</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Email
          value={email}
          onChange={handleEmail}
          className="input-email"
          placeholder="johndoe@domain.com"
          labelClass="account-label"
        />

        <Password
          value={password}
          onChange={handlePassword}
          className="input-password"
          labelClass="account-label"
        />

        <div className="account-container--remember">
          <div>
            <input
              type="checkbox"
              className="input-checkbox"
              value={checkbox}
              onChange={handleCheckbox}
            />
            <p className="text-remember">Remember Me</p>
          </div>
          <a href="" className="text-forgot">
            Forgot Password?
          </a>
        </div>

        <FormButton type="submit" info="Login" />
      </form>
      <div className="login-additional">
        <p>Not registered ?</p>
        <a href="" className="create-account-link">
          Create an Account &#x2197;
        </a>
      </div>
    </div>
  );
}
