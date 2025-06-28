import styles from "./Button.module.css";

export default function FormButton({ children, variant = "primary" }) {
  const classes = [styles.btn];
  if (variant === "primary") {
    classes.push(styles.btnPrimary);
  }

  return <button className={classes.join(" ")}>{children}</button>;
}
