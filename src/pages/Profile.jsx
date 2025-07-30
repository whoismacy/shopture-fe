import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuthContext";
import { showSuccessToast } from "../utils/toast";

import styles from "./Profile.module.css";
import instance from "../provider/axiosConfig";

export default function Profile() {
  const navigate = useNavigate();
  const { email, id, dropCredentials } = useAuth();

  async function logOut() {
    //eslint-disable-next-line
    const response = await instance.post("/logout");
    dropCredentials();
    navigate("/", { replace: true });
    showSuccessToast("Successfully logged out.");
  }

  return (
    <div className={styles.container}>
      <h1>Welcome Back {email?.split("@")[0]} 🥳 🥳 🥳</h1>
      <p className={styles.paragraph}>
        Email: <span className={styles.info}>{email}</span>{" "}
      </p>
      <p className={styles.paragraph}>
        id: <span className={styles.info}>{id}</span>
      </p>
      <button className="btn" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
}
