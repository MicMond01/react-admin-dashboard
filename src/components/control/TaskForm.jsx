import * as React from "react";
import Button from "@mui/material/Button";
import * as yup from "yup";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Formik } from "formik";
import { CalenderControls, Controls } from ".";

import { tokens } from "../../theme";

export default function TaskForm({
  open,
  setOpen,
  handleFormSubmit,
  taskStatus,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClose = () => {
    setOpen(false);
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle variant="h3" color={colors.blueAccent[400]}>
        Create A New Task
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
                label="Todo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.todo}
                name="todo"
                error={errors?.todo}
                sx={{ gridColumn: "span 4" }}
              />
              <Controls.TextInput
                label="Project"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.project}
                name="project"
                error={errors?.project}
                sx={{ gridColumn: "span 4" }}
              />
              <Controls.TextInput
                label="Priority"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.priority}
                type="tel"
                name="priority"
                error={errors?.priority}
                sx={{ gridColumn: "span 4" }}
              />
              <Controls.TextInput
                label="Status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={taskStatus}
                name="status"
                error={errors?.status}
                sx={{ gridColumn: "span 4" }}
              />
              <Box
                // m="20px"
                width="40vw"
                display="grid"
                gap="30px"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                  [theme.breakpoints.down("md")]: {
                    width: "70vw",
                  },
                }}
              >
                <CalenderControls.CalendarInput
                  sx={{ width: "100%" }}
                  label="Created"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.created}
                  name="created"
                  error={errors?.created}
                  // sx={{ gridColumn: "span 2" }}
                />
                <CalenderControls.CalendarInput
                  label="deuDate"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.dueDate}
                  name="dueDate"
                  error={errors?.dueDate}
                  sx={{ width: "100%" }}
                />
              </Box>
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
  todo: yup.string().required("required"),
  project: yup.string().required("required"),
  priority: yup.string().required("required"),
  status: yup.string().required("required"),
  created: yup.string().required("required"),
  dueDate: yup.string().required("required"),
});

const initialValues = {
  todo: "",
  project: "",
  priority: "",
  created: "",
  dueDate: "",
};
