import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./Profile.module.css";
import instance from "../provider/axiosConfig";
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

export default function Profile({ data }) {
  const navigate = useNavigate();
  async function logOut() {
    const response = await instance.post("/logout");
    console.log("Logout response: ", response.data);
    navigate("/", { replace: true });
    notify("Successfully logged out.");
  }

  useEffect(
    function () {
      if (!data || Object.keys(data).length < 1) {
        navigate("/auth/login", { replace: true });
      }
    },
    [data, navigate]
  );

  return (
    <div className={styles.container}>
      <h1>Welcome Back {data?.email} 🥳🥳</h1>
      <p className={styles.paragraph}>
        Email: <span className={styles.info}>{data?.email}</span>{" "}
      </p>
      <p className={styles.paragraph}>
        id: <span className={styles.info}>{data?.id}</span>
      </p>
      <button className="btn" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
}
