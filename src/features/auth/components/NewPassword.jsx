import { useState } from "react";
import Password from "../shared/Password";
import ConfirmPassword from "./ConfirmPassword";
import FormButton from "../common/Button";

export default function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setNewPassword] = useState("");

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPassword(event) {
    setNewPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="authContainer">
      <div className="authHeader">
        <h3 className="authHeading">Reset Password</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <Password value={password} onChange={handlePassword}>
          New Password:
        </Password>
        <ConfirmPassword
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />

        <FormButton variant="primary">Submit</FormButton>
      </form>
    </div>
  );
}
