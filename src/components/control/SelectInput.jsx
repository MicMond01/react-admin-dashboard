import {
  FormControl,
  FormHelperText,
  InputLabel,
  // MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import React from "react";

function Select({ name, label, value, error, onChange, options, ...other }) {
  return (
    <FormControl fullWidth error={error?.length > 0}>
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

export default Select;
