import { useState } from "react";
import Email from "../../components/shared/Email";
import Password from "../../components/shared/Password";
import FormButton from "../../components/common/Button";

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
    <div className="account-container">
      <div className="account-header">
        <h1 className="account-h1">Login</h1>
        <p className="sub-heading">Hi, Welcome back 👋</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Email
          value={email}
          onChange={handleEmail}
          placeholder="johndoe@domain.com"
        />

        <Password value={password} onChange={handlePassword} />

        <div className="account-container--remember">
          <a href="" className="text-forgot">
            Forgot Password?
          </a>
        </div>

        <FormButton variant="primary">Log In</FormButton>
      </form>
      <div className="login-additional">
        <p>Not registered ?</p>
        <a href="" className="create-account-link">
          Create an Account &#x2197;
        </a>
      </div>
    </div>
  );
}
