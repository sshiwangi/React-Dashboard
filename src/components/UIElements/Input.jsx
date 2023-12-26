import React from "react";

function Input({ style, type, placeholder, ...props }) {
  return (
    <input
      className={`${style}`}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default Input;
