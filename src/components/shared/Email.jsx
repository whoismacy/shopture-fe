import React from "react";

export default function Email({
  type = "email",
  name = "email",
  value,
  onChange,
  className,
  labelClass,
  placeholder,
}) {
  return (
    <React.Fragment>
      <label htmlFor="email" className={labelClass}>
        Email:
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        required
      />
    </React.Fragment>
  );
}
