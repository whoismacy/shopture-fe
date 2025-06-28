import { useState } from "react";
import Password from "../../components/shared/Password";
import ConfirmPassword from "../../components/shared/ConfirmPassword";
import FormButton from "../../components/common/Button";

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
    <div className="account-container">
      <div className="account-header">
        <h3 className="account-h1">Reset Password</h3>
        <p className="sub-heading">Input a new unique password</p>
      </div>
      <form onSubmit={handleSubmit}>
        <Password value={password} onChange={handlePassword} />
        <ConfirmPassword
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />

        <FormButton variant="primary">Submit</FormButton>
      </form>
    </div>
  );
}
