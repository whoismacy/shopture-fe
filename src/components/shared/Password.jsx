import React from "react";

export default function Password({
  type = "password",
  name = "password",
  className,
  value,
  onChange,
  labelClass,
}) {
  return (
    <React.Fragment>
      <label htmlFor="password" className={labelClass}>
        Password
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className={className}
        onChange={onChange}
        required
      />
    </React.Fragment>
  );
}
