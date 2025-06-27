import React from "react";

export default function ConfirmPassword({
  type = "password",
  name = "password",
  value,
  onChange,
  className,
  labelClass,
}) {
  return (
    <React.Fragment>
      <label htmlFor="password" className={labelClass}>
        Confirm Password
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
      />
    </React.Fragment>
  );
}
