import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
// import { tokens } from "./../../theme";
import { Box } from "@mui/material";
import { tokens } from "../theme";

const PopOver = ({ handleDelete }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //   const theme = useTheme();
  //   const colors = tokens(theme.palette.mode);

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
        }}
      >
        <Typography
          sx={{ color: "#868e96 ", fontWeight: "500", fontSize: "22px" }}
        >
          The content of the Popover.
        </Typography>
        <Typography sx={{}}>Are you sure you wan to delete?</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1.5rem",
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
        }}
      ></Box>
    </Box>
  );
};

export default PopOver;
