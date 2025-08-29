let style;

export default function FormButton({ children, variant = "primary" }) {
  if (variant === "primary") {
    style = "btn btnPrimary";
  } else {
    style = "btn";
  }

  return <button className={style}>{children}</button>;
}
