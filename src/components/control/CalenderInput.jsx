import React from "react";
import PropTypes from "prop-types";
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
          label={label}
          onChange={onChange}
          {...other}
          {...(error && { error: true, helperText: error })}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

CalendarInput.propTypes = {
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  touched: PropTypes.bool,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  error: PropTypes.string,
};

export default CalendarInput;
