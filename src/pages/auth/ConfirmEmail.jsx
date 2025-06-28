import React from "react";
import { useState } from "react";
import Email from "../../components/shared/Email";
import FormButton from "../../components/common/Button";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setEmail("");
    const data = { email };
    console.log(data);
  }

  return (
    <React.Fragment>
      <div className="account-container">
        <div className="account-header">
          <h3 className="account-h1">Reset Account</h3>
          <p>Provide last used email address for account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Email
            value={email}
            onChange={handleEmail}
            className="input-email"
            labelClass="account-label"
            placeholder="Enter your email address"
            required
          />

          <FormButton info="Submit" />
        </form>
      </div>
    </React.Fragment>
  );
}
