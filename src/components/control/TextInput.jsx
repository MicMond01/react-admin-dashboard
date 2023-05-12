import React from "react";
import { TextField } from "@mui/material";

const TextInput = ({
  variant = "filled",
  fullWidth = true,
  touched,
  onBlur,
  name,
  label,
  type = "text",
  onChange,
  value,
  error = null,
  ...other
}) => {
  return (
    <TextField
    
      onBlur={onBlur}
      touched={touched}
      fullWidth={fullWidth}
      variant={variant}
      value={value}
      name={name}
      type={type}
      label={label}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export default TextInput;
