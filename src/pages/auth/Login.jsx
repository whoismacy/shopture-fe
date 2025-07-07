import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Email from "../../components/shared/Email";
import Password from "../../components/shared/Password";
import FormButton from "../../components/common/Button";
import styles from "./Auth.module.css";

export default function LoginForm({ onCreation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        data
      );
      const token = response.data.token;
      onCreation(token);
    } catch (networkError) {
      console.error("Network error during login:", networkError);
    }

    setEmail("");
    setPassword("");
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
            <p className="forgotPasswordLink">Forgot Password?</p>
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
