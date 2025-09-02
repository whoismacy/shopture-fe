import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuthContext";
import { showErrorToast, showSuccessToast } from "../utils/toast";

import Email from "../shared/Email";
import Password from "../shared/Password";
import Button from "../common/Button";
import instance from "../provider/axiosConfig";

// only returns user
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setCredentials } = useAuth();

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
      const response = await instance.post("/login", data);
      if (response.data && response.data.user) {
        const user_id = response.data.user;
        console.log("Login Successful!");
        setCredentials(email, user_id);
        navigate("/", { replace: true });
        showSuccessToast("Successfully logged in.");
      }
    } catch (error) {
      console.error("Login failed", error);
      showErrorToast(`Login failed ${error.message}`);
      if (error.response && error.response.status === 400) {
        showErrorToast("Login Failed. Invalid Credentials");
      }
    }

    setEmail("");
    setPassword("");
  }

  return (
    <div className="authContainer">
      <div className="authHeader">
        <h1 className="authHeading">Login</h1>
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

        <Button type="primary">Log In</Button>
      </form>
      <div className="loginAdditional">
        <p>Not registered ?</p>
        <Link to="/auth/create-account">
          <p className="createAccountLink">Create an Account &#x2197;</p>
        </Link>
      </div>
    </div>
  );
}
