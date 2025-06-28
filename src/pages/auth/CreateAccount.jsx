import { useState } from "react";
import Email from "../../components/shared/Email";
import Password from "../../components/shared/Password";
import ConfirmPassword from "../../components/shared/ConfirmPassword";
import FormButton from "../../components/common/Button";
import styles from "./Auth.module.css";
import styles1 from "../../components/shared/EmailPassword.module.css";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const data = { email, password, confirmPassword, fullName };
    try {
      const response = await fetch("backend/auth/create-account/api", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        await response.json();
      } else {
        console.error("Failed fetching data");
      }
    } catch (networkError) {
      console.error("Ensure you are connected to the Internet", networkError);
    }
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
    <div className={styles.authContainer}>
      <div className={styles.authHeader}>
        <h1 className={styles.authHeading}>Create Account</h1>
        <p className={styles["sub-heading"]}>Provide Your Info</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <div className={styles1.inputGroup}>
            <label htmlFor="flname" className={styles1.label}>
              Full name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              name="flname"
              className={styles1.inputField}
              value={fullName}
              onChange={handleFullName}
            />
          </div>
        </div>
        <Email
          value={email}
          onChange={handleEmail}
          placeholder="johndoe@domain.com"
        />
        <Password value={password} onChange={handlePassword} />

        <ConfirmPassword
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />

        <FormButton variant="primary">Sign Up</FormButton>
      </form>

      <p class="create-login-text">
        Already have an account ?{" "}
        <span>
          <a href="" className="text-forgot">
            Login
          </a>
        </span>
      </p>

      <div className={styles.termsAndConditions}>
        <p>
          By signing up you agree to our{" "}
          <span className="text-terms">Terms of use</span> and{" "}
          <span className="text-privacy">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
