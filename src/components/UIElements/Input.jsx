import React, { useState } from "react";

function Input({ style, type, value, placeholder, ...props }) {
  return (
    <input
      className={`${style}`}
      type={type}
      placeholder={placeholder}
      value={value}
      {...props}
    />
  );
}

export default Input;
