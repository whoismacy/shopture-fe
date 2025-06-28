import styles from "./EmailPassword.module.css";

export default function Password({
  type = "password",
  name = "password",
  value,
  onChange,
}) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor="password" className={styles.label}>
        Password
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className={styles.inputField}
        onChange={onChange}
        required
      />
    </div>
  );
}
