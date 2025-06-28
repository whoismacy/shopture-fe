import styles from "./EmailPassword.module.css";

export default function ConfirmPassword({
  type = "password",
  name = "password",
  value,
  onChange,
}) {
  return (
    <div className={styles.inputGroup}>
      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>
          Confirm Password
        </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={styles.inputField}
          required
        />
      </div>
    </div>
  );
}
