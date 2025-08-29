export default function Email({
  type = "email",
  name = "email",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="inputGroup">
      <label htmlFor="email" className="label">
        Email:
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="inputField"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
