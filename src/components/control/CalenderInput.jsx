import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CalendarInput = ({
  variant = "filled",
  fullWidth = true,
  touched,
  onBlur,
  name,
  label,
  type = "calendar",
  onChange,
  value,
  error = null,
  ...other
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]} sx={{ width: "100%" }}>
        <DatePicker
          sx={{ minWidth: "0" }}
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
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default CalendarInput;
