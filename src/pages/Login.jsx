import { Box, Button, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../../components/Header";
// import { useState } from "react";
import { Controls } from "../components/control";
import { Link } from "react-router-dom";
import React from "react";

const Form = () => {
  // const [password, setPassword] = useState({
  //   password: "",
  // });
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box
      m="20px"
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* <Header title="CREATE USER" subtitle="Create a New User Profile" /> */}

      <Box width="40vw">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({ values, errors, handleBlur, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <Controls.TextInput
                  label="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={errors?.email}
                  sx={{ gridColumn: "span 4" }}
                />

                <Controls.TextInput
                  label="password"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={errors?.password}
                  sx={{ gridColumn: "span 4" }}
                />

                {/* <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={(event) => {
                    handleChange(event);
                    setPassword((prev) => ({
                      ...prev,
                      password: event.target.value,
                    }));
                  }}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  sx={{ gridColumn: "span 4" }}
                /> */}
              </Box>
              <Box display="grid" mt="20px" width="100%">
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  width="100%"
                >
                  Login
                </Button>
                <Typography display="center" justifyContent="center" mt="20px">
                  New user? <Link to="/register">Sign Up</Link>
                </Typography>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

const passwordRegExg =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

const checkoutSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup
    .string()
    .matches(
      passwordRegExg,
      "Password must be 8 to 15 characters long, at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
    )
    .required("required"),
});
const initialValues = {
  email: "",
  password: "",
};

export default Form;

/* <Controls.TextInput
                  label="Confirm Password"
                  type="password"
                  onBlur={handleBlur}
                  onChange={(event) =>
                    setPassword((prev) => ({
                      ...prev,
                      confirmPassword: event.target.value,
                    }))
                  }
                  value={values.confirmPassword}
                  name="confirmPassword"
                  error={errors?.confirmPassword}
                  sx={{ gridColumn: "span 4" }}
                /> */
