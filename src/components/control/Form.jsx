import * as React from "react";
import Button from "@mui/material/Button";
import * as yup from "yup";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Formik } from "formik";
import { Controls } from ".";

import { tokens } from "../../theme";

export default function FormDialog({ open, setOpen, handleFormSubmit }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClose = () => {
    setOpen(false);
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle variant="h3" color={colors.blueAccent[400]}>
        Create A New Contact
      </DialogTitle>
      {/* <DialogContent> */}
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
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
                label="Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.type}
                name="type"
                error={errors?.type}
                sx={{ gridColumn: "span 4" }}
              />
              <Controls.TextInput
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={errors?.name}
                sx={{ gridColumn: "span 4" }}
              />
              <Controls.TextInput
                label="Phone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                type="tel"
                name="phone"
                error={errors?.phone}
                sx={{ gridColumn: "span 4" }}
              />
              <Controls.TextInput
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={errors?.email}
                sx={{ gridColumn: "span 4" }}
              />
              <Controls.TextInput
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={errors?.address}
                sx={{ gridColumn: "span 4" }}
              />
              <Controls.TextInput
                label="City"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.city}
                name="city"
                error={errors?.city}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" color="secondary" variant="contained">
                Submit
              </Button>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Dialog>
  );
}

const checkoutSchema = yup.object().shape({
  type: yup.string().required("required"),
  name: yup.string().required("required"),
  email: yup.string().required("required"),
  address: yup.string().required("required"),
  city: yup.string().required("required"),
});

const initialValues = {
  type: "",
  name: "",
  phone: "",
  email: "",
  address: "",
  city: "",
};
