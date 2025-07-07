import { useNavigate } from "react-router-dom";
import styles from "../components/common/Button.module.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 style={{ marginBottom: "48px" }}>404 Error: Page Not Found</h1>
      <button onClick={() => navigate("/")} className={styles.btn}>
        Go Home
      </button>
    </div>
  );
}
