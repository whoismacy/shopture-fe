import { useState } from "react";
import Email from "./Email";
import Password from "./Password";
import ConfirmPassword from "./ConfirmPassword";
import FormButton from "./FormButton";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = { email, password, confirmPassword, fullName };
    console.log(data);
    setEmail("");
    setPassword("");
    setFullName("");
    setConfirmPassword("");
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleFullName(event) {
    setFullName(event.target.value);
  }

  function handleConfirmPassword(event) {
    setConfirmPassword(event.target.value);
  }

  return (
    <div className="account-container">
      <div className="account-header">
        <h1 className="account-h1 create">Create Account</h1>
        <p className="sub-heading create">Provide Your Info</p>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="flname" className="account-label">
          Full name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          name="flname"
          className="input-email"
          value={fullName}
          onChange={handleFullName}
        />

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

        <ConfirmPassword
          value={confirmPassword}
          onChange={handleConfirmPassword}
          className="input-password"
          labelClass="account-label"
        />

        <FormButton type="submit" info="Sign up" />
      </form>

      <div className="account-container--termsc">
        <p>
          By signing up you agree to our{" "}
          <span className="text-terms">Terms of use</span> and{" "}
          <span className="text-privacy">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
