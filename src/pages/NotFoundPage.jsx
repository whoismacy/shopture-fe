import { useNavigate } from "react-router-dom";
import styles from "../components/common/Button.module.css";

export default function NotFound() {
  const navigate = useNavigate();
  const style = [styles.btn, styles.btnPrimary].join(" ");

  return (
    <div>
      <h1>404 Error: Page Not Found</h1>
      <button onClick={navigate("/")} className={style}>
        Go Home
      </button>
    </div>
  );
}
