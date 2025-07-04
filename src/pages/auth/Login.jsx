import { useState } from "react";
import Email from "../../components/shared/Email";
import Password from "../../components/shared/Password";
import FormButton from "../../components/common/Button";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";

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

  async function handleSubmit(event) {
    event.preventDefault();
    const data = { email, password, checkbox };

    try {
      const response = await fetch("/backend-api/auth/login/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        await response.json();
        // redirect user.
      } else {
        const errorData = await response.json();
        console.error("Login Failed", errorData);
      }
    } catch (networkError) {
      console.error("Network error during login:", networkError);
    }

    setEmail("");
    setPassword("");
    setCheckbox(false);
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.authHeader}>
        <h1 className={styles.authHeading}>Login</h1>
        <p className={styles["sub-heading"]}>Hi, Welcome back 👋</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Email
          value={email}
          onChange={handleEmail}
          placeholder="johndoe@domain.com"
        />

        <Password value={password} onChange={handlePassword} />

        <div className="forgotPassword">
          <Link to="/auth/confirm-email">
            <a href="" className="forgotPasswordLink">
              Forgot Password?
            </a>
          </Link>
        </div>

        <FormButton variant="primary">Log In</FormButton>
      </form>
      <div className="loginAdditional">
        <p>Not registered ?</p>
        <Link to="/auth/create-account">
          <a href="" className="createAccountLink">
            Create an Account &#x2197;
          </a>
        </Link>
      </div>
    </div>
  );
}
