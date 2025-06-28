import styles from "./EmailPassword.module.css";

export default function Email({
  type = "email",
  name = "email",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor="email" className={styles.label}>
        Email:
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.inputField}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
