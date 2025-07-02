import { Outlet } from "react-router-dom";
import styles from "../pages/auth/Auth.module.css";

export default function AuthLayout() {
  return (
    <>
      <h2>Auth</h2>
      <div className={styles.authWrapper}>
        <Outlet />
      </div>
    </>
  );
}
