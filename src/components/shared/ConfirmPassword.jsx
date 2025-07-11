export default function ConfirmPassword({
  type = "password",
  name = "password",
  value,
  onChange,
}) {
  return (
    <div className="inputGroup">
      <div className="inputGroup">
        <label htmlFor="password" className="label">
          Confirm Password
        </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="inputField"
          required
        />
      </div>
    </div>
  );
}
