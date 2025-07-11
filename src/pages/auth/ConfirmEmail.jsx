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
      <div className="authContainer">
        <div className="authHeader">
          <h3 className="authHeading">Reset Account</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <Email
            value={email}
            onChange={handleEmail}
            placeholder="Enter your email address"
          />
          <FormButton variant="primary">Submit</FormButton>
        </form>
      </div>
    </React.Fragment>
  );
}
