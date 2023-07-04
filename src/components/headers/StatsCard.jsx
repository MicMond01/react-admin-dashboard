import { Box, useTheme } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material/";
import { tokens } from "../../theme";
import PropTypes from "prop-types";

const StatsCard = ({ top, span, colorLine, hValue }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        display: "grid",
        alignItems: "center",
        p: "15px",
        width: 1,
        height: 95,
        backgroundColor: colors.grey[800],

        [theme.breakpoints.down("md")]: {
          width: "72vw",
        },
      }}
    >
      <Typography variant={hValue}>{top}</Typography>
      <Typography mt="5px" color={colors.grey[200]}>
        {span}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "15px",
        }}
      >
        <Box
          sx={{
            borderRadius: "5px",
            width: 1,
            height: 4,
            backgroundColor: colorLine,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

StatsCard.propTypes = {
  top: PropTypes.string.isRequired,
  span: PropTypes.string.isRequired,
  colorLine: PropTypes.string.isRequired,
  hValue: PropTypes.string.isRequired,
};

export default StatsCard;
