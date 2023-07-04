import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select as MuiSelect,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

function Select({ name, label, value, error, onChange, options, ...other }) {
  return (
    <FormControl fullWidth error={error && error.length > 0}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <MuiSelect
        name={name}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        variant="filled"
        value={value}
        label={label}
        onChange={onChange}
        options={options}
        {...other}
      >
        {/* {options?.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.title}
          </MenuItem>
        ))} */}
      </MuiSelect>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default Select;
