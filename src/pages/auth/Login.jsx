import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/useAuthContext";

import Email from "../../components/shared/Email";
import Password from "../../components/shared/Password";
import FormButton from "../../components/common/Button";
import instance from "../../provider/axiosConfig";

import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function notify(message) {
  toast(message, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Zoom,
  });
}

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
        notify("Successfully logged in.");
      }
    } catch (error) {
      console.error("Login failed", error);
      if (error.response && error.response.status === 400) {
        console.error("Login Failed. Invalid Credentials");
      } else if (error.response.status === 409) {
        console.error("Registration failed. Email already in Use.");
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

        <FormButton variant="primary">Log In</FormButton>
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
