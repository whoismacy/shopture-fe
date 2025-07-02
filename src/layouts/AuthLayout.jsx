import { Outlet } from "react-router-dom";
import styles from "../pages/auth/Auth.module.css";

export default function AuthLayout() {
  <div className={styles.authWrapper}>
    <Outlet />
  </div>;
}
