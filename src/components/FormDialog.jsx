import * as React from "react";
import Button from "@mui/material/Button";
import * as yup from "yup";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Formik } from "formik";
import { Controls } from "./control";
import PropTypes from "prop-types";

export default function FormDialog({ open, setOpen, handleFormSubmit }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClose = () => {
    setOpen(false);
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");

  // const handleFormSubmit = (values) => {
  //   console.log(clients.push(values))
  // };

  // const handleChange = (event) => {
  //   setPick(event.target.value);
  // };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle variant="h3" color={colors.blueAccent[400]}>
        Create A New Invoice
      </DialogTitle>
      {/* <DialogContent> */}
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({ values, errors, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              m="20px"
              width="40vw"
              height="100%"
              alignItems="center"
              justifyContent="center"
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                [theme.breakpoints.down("md")]: {
                  width: "70vw",
                },
              }}
            >
              <Controls.TextInput
                label="Client"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.brandName}
                name="brandName"
                error={errors?.brandName}
                sx={{ gridColumn: "span 4" }}
              />
              <Controls.TextInput
                label="Service"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.supplies}
                name="supplies"
                error={errors?.supplies}
                sx={{ gridColumn: "span 4" }}
              />
              <Controls.TextInput
                label="Amount"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.amount}
                type="tel"
                name="amount"
                error={errors?.amount}
                sx={{ gridColumn: "span 4" }}
              />
              <Controls.TextInput
                label="Payment"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.payment}
                type="tel"
                name="payment"
                error={errors?.payment}
                sx={{ gridColumn: "span 4" }}
              />
              <Controls.TextInput
                label="Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date}
                type="date"
                name="date"
                error={errors?.date}
                sx={{ gridColumn: "span 2" }}
              />
              <Controls.TextInput
                label="Quantity"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.quantity}
                type="number"
                name="quantity"
                error={errors?.quantity}
                sx={{ gridColumn: "span 2" }}
              />
              <Controls.TextInput
                label="Rate"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.rate}
                type="number"
                name="rate"
                error={errors?.rate}
                sx={{ gridColumn: "span 2" }}
              />
              <Controls.TextInput
                label="Unit"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.unit}
                name="unit"
                error={errors?.unit}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                onClick={handleClose}
              >
                Submit
              </Button>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Dialog>
  );
}

FormDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

const checkoutSchema = yup.object().shape({
  brandName: yup.string().required("required"),
  supplies: yup.string().required("required"),
  amount: yup.string().required("required"),
  payment: yup.string().required("required"),
  quantity: yup.string().required("required"),
  rate: yup.string().required("required"),
  unit: yup.string().required("required"),
});

const initialValues = {
  brandName: "",
  supplies: "",
  date: "",
  id: "",
  amount: "",
  payment: "",
  quantity: "",
  rate: "",
  unit: "Item",
};
