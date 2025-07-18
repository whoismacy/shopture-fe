import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Email from "../../components/shared/Email";
import Password from "../../components/shared/Password";
import FormButton from "../../components/common/Button";
import instance from "../../provider/axiosConfig";

export default function LoginForm({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
      if (response.data) {
        const user_id = response.data.id;
        console.log("Login Successful!:", response.data);
        setUser({ id: user_id, name: email });
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.error("Login Failed. Invalid Credentials");
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
