export default function Password({
  type = "password",
  name = "password",
  value,
  onChange,
}) {
  return (
    <div className="inputGroup">
      <label htmlFor="password" className="label">
        Password
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className="inputField"
        onChange={onChange}
        required
      />
    </div>
  );
}
