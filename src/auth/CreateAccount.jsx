import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { showErrorToast, showSuccessToast } from "../utils/toast";

import instance from "../provider/axiosConfig";
import Email from "../shared/Email";
import Password from "../shared/Password";
import ConfirmPassword from "../shared/ConfirmPassword";
import FormButton from "../common/Button";

// only returns newUser
export default function CreateAccount() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { setCredentials } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();

    const data = { email, password, fullName };
    try {
      const response = await instance.post("/signup", data);
      if (response.data && response.data.newUser) {
        console.log("Registration Successful");
        navigate("/auth/login", { replace: true });
        showSuccessToast("Account Created Successfully, You can now log in.");
        setCredentials(email, response.data.newUser);
      }
    } catch (error) {
      console.error("Registration Failed. Please try again.", error);
      showErrorToast(`Account Creation Faild: ${error.message}`);
      if (error.response) {
        if (error.response.status === 400) {
          showErrorToast("An Unexpected error Occurred.");
        }
      }
    } finally {
      setEmail("");
      setPassword("");
      setFullName("");
      setConfirmPassword("");
    }
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
    <div className="authContainer">
      <div className="authHeader">
        <h1 className="authHeading">Create Account</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="inputGroup">
          <div className="inputGroup">
            <label htmlFor="full-name" className="label">
              Full name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              name="flname"
              className="inputField"
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

      <p className="confirmPassword">Passwords do not match</p>

      <p class="create-login-text">
        Already have an account ?{" "}
        <span>
          <Link to="/auth/login">
            <span className="textForgot">Login</span>
          </Link>
        </span>
      </p>

      <div className="termsAndConditions">
        <p>
          By signing up you agree to our{" "}
          <span className="text-terms">Terms of use</span> and{" "}
          <span className="text-privacy">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
