import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
// import { tokens } from "./../../theme";
import { Box } from "@mui/material";
import { tokens } from "../theme";
import PropTypes from "prop-types";

const PopOver = ({ handleDelete, HandleClosePopOver }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        transitionDuration: "0.7s",
        transitionTimingFunction: "cubic-bezier(0.36, 0.55, 0.19, 1)",
        transitionProperty: "all, margin",
      }}
    >
      <Box
        sx={{
          opacity: "1",
          position: "absolute",
          top: "35%",
          //   position: "relative",
          left: "35%",
          width: "25vw",
          height: "40vh",
          borderTop: "solid 6px #ff5c6c",
          transitionDuration: "0.7s",
          transitionTimingFunction: "cubic-bezier(0.36, 0.55, 0.19, 1)",
          transitionProperty: "all, margin",
          display: "grid",
          justifyContent: "space-around",
          alignItems: "center",
          textAlign: "center",
          bgcolor: colors.blueAccent[900],
          zIndex: "999",
          padding: "1.5rem",
          [theme.breakpoints.down("md")]: {
            width: "50vw",
            height: "30vh",
            padding: "2rem",
          },
        }}
      >
        <Typography
          sx={{ color: "#868e96 ", fontWeight: "900", fontSize: "22px" }}
        >
          Delete Item
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
          }}
        >
          Are you sure?
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1.5rem",
            gap: "1rem",
            [theme.breakpoints.down("md")]: {
              padding: "0.1rem",
            },
          }}
        >
          <Button
            sx={{
              fontWeight: "initial",
              padding: "8px 20px",
              fontSize: "15px",
              border: "solid 1px #dc3545",
              color: "#dc3545",
              textTransform: "none",
            }}
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button
            sx={{
              fontWeight: "initial",
              padding: "8px 20px",
              fontSize: "15px",
              border: "solid 1px #6c757d",
              color: "#6c757d",
              textTransform: "none",
            }}
            onClick={HandleClosePopOver}
          >
            Close
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: colors.grey[300],
          width: "140vw",
          height: "100vh",
          position: "absolute",
          top: "0",
          left: "0",
          opacity: "0.1",
          [theme.breakpoints.down("md")]: {
            width: "100vw",
            height: "100vh",
          },
        }}
      ></Box>
    </Box>
  );
};

PopOver.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  HandleClosePopOver: PropTypes.func.isRequired,
};

export default PopOver;
