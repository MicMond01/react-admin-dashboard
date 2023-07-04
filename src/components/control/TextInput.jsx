import React from "react";
import { TextField } from "@mui/material";
import { PropTypes } from 'prop-types';

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


TextInput.propTypes = {
  variant: PropTypes.string, // Add prop validation for 'variant'
  fullWidth: PropTypes.bool, // Add prop validation for 'fullWidth'
  touched: PropTypes.bool, // Add prop validation for 'touched'
  onBlur: PropTypes.func, // Add prop validation for 'onBlur'
  name: PropTypes.string, // Add prop validation for 'name'
  label: PropTypes.string, // Add prop validation for 'label'
  type: PropTypes.string, // Add prop validation for 'type'
  onChange: PropTypes.func, // Add prop validation for 'onChange'
  value: PropTypes.string, // Add prop validation for 'value'
  error: PropTypes.string, // Add prop validation for 'error'
};
export default TextInput;
