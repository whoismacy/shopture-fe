import { useState } from "react";
import Password from "../../components/shared/Password";
import ConfirmPassword from "../../components/shared/ConfirmPassword";
import FormButton from "../../components/common/Button";
import styles from "./Auth.module.css";

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
    <div className={styles.authContainer}>
      <div className={styles.authHeader}>
        <h3 className={styles.authHeading}>Reset Password</h3>
        <p className={styles["sub-heading"]}>Input a new unique password</p>
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
