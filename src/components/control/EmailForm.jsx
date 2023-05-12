import * as React from "react";
import Button from "@mui/material/Button";
import * as yup from "yup";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Formik } from "formik";
import { tokens } from "./../../theme";
import { Controls } from ".";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
// import "bootstrap/dist/css/bootstrap.min.css";

var modules = {
  toolbar: [
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
      { align: [] },
    ],
    [
      {
        color: [
          "#000000",
          "#e60000",
          "#ff9900",
          "#ffff00",
          "#008a00",
          "#0066cc",
          "#9933ff",
          "#ffffff",
          "#facccc",
          "#ffebcc",
          "#ffffcc",
          "#cce8cc",
          "#cce0f5",
          "#ebd6ff",
          "#bbbbbb",
          "#f06666",
          "#ffc266",
          "#ffff66",
          "#66b966",
          "#66a3e0",
          "#c285ff",
          "#888888",
          "#a10000",
          "#b26b00",
          "#b2b200",
          "#006100",
          "#0047b2",
          "#6b24b2",
          "#444444",
          "#5c0000",
          "#663d00",
          "#666600",
          "#003700",
          "#002966",
          "#3d1466",
          "custom-color",
        ],
      },
    ],
  ],
};

var formats = [
  "header",
  "height",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "color",
  "bullet",
  "indent",
  "link",
  "image",
  "align",
  "size",
];

// const handleProcedureContentChange = (content) => {
//   console.log("content---->", content);
// };

export default function EmailForm({
  open,
  setOpen,
  handleFormSubmit,
  idValue,
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
        Send Email
      </DialogTitle>
      {/* <DialogContent> */}
      <Formik initialValues={initialValues} validationSchema={checkoutSchema}>
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form>
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
                label="From"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.from}
                name="from"
                error={errors?.from}
                sx={{ gridColumn: "span 4" }}
              />
              <Controls.TextInput
                label="To"
                onBlur={handleBlur}
                onChange={handleChange}
                value={idValue}
                name="to"
                error={errors?.to}
                sx={{ gridColumn: "span 4" }}
              />
              <Controls.TextInput
                label="subject"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.subject}
                type="text"
                name="subject"
                error={errors?.subject}
                sx={{ gridColumn: "span 4" }}
              />
              <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                value={values.message}
                error={errors?.message}
                onChange={handleChange}
                placeholder="write your content ...."
                //   onChange={handleProcedureContentChange}
                style={{
                  height: "180px",
                  gridColumn: "span 4",
                  marginBottom: "4rem",
                  color: "black",
                  backgroundColor: "white",
                }}
              ></ReactQuill>
            </Box>

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                onClick={handleFormSubmit}
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

const checkoutSchema = yup.object().shape({
  from: yup.string().required("required"),
  to: yup.string().required("required"),
  subject: yup.string().required("required"),
  message: yup.string().required("required"),
});

const initialValues = {
  from: "houseOfToliz@imail.com",
  //   to: "",
  subject: "",
  message: "",
};
