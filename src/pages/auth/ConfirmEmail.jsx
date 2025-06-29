import React from "react";
import { useState } from "react";
import Email from "../../components/shared/Email";
import FormButton from "../../components/common/Button";
import styles from "./Auth.module.css";

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
      <div className={styles.authContainer}>
        <div className={styles.authHeader}>
          <h3 className={styles.authHeading}>Reset Account</h3>
          <p>Provide last used email address for account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Email
            value={email}
            onChange={handleEmail}
            placeholder="Enter your email address"
          />
          <FormButton variant="primary">Submit</FormButton>
          {/* // if successful route to create new password (details little blurry) */}
          {/* <Link to="/auth/create-password"></Link> or we could use useNavigate still unsure*/}
        </form>
      </div>
    </React.Fragment>
  );
}
