import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../provider/axiosConfig";
import Email from "../../components/shared/Email";
import Password from "../../components/shared/Password";
import ConfirmPassword from "../../components/shared/ConfirmPassword";
import FormButton from "../../components/common/Button";
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

export default function CreateAccount() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const data = { email, password, fullName };
    try {
      const response = await instance.post("/signup", data);
      console.log(
        "Registration Successful! Backend response data: ",
        response.data
      );
      navigate("auth/login");
      notify("Account Created Successfully, You can now log in.");
      setEmail("");
      setPassword("");
      setFullName("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Registration Failed. Please try again.", error);
      if (error.response) {
        if (error.response.status === 400) {
          console.error("An unexpected error occurred");
        }
      }
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
