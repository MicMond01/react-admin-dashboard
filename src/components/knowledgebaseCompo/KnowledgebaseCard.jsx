import { Box, Button, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import { Typography } from "@mui/material/";
import PropTypes from "prop-types";

const KnowledgebaseCard = ({ icon, head, body, link, linkBody }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        flex: "0 0 22%",
        maxWidth: "25%",
        borderRadius: "4px",
        mt: "2rem",
        ml: "15px",
        mr: "15px",
        bgcolor: colors.blueAccent[800],
        [theme.breakpoints.down("md")]: {
          flex: "0 0 33.333333%",
          maxWidth: "33.333333%",
        },
        [theme.breakpoints.down("sm")]: {
          flex: "0 0 100%",
          maxWidth: "100%",
        },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          minHeight: "255px",
          //   paddingLeft: "25px",
          //   paddingRight: "25px",
          flex: "1 1 auto",
          padding: "1.25rem",
        }}
      >
        <Box>
          <Typography
            variant="body1"
            sx={{
              display: "inline-block",
              fontSize: "30px",
              borderRadius: "50%",
              backgroundColor: colors.primary[100],
              padding: "15px",
              width: "70px",
              height: "70px",
              color: "#20aee3",
              marginBottom: "18px",
              textAlign: "center",
            }}
          >
            {icon}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              lineHeight: "18px",
              fontSize: "16px",
              fontWeight: "400",
              mb: "0.75rem",
            }}
          >
            {head}
          </Typography>
          <Box sx={{ minHeight: "38px", mb: "1rem", mt: "0" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "13px",
                fontWeight: "300",
              }}
            >
              {body}
            </Typography>
          </Box>
          <Button
            sx={{
              pr: "25px",
              pl: "25px",
              color: colors.blueAccent[400],
              backgroundColor: "transparent",
              border: "1px solid" + colors.blueAccent[400],
              transition: "0.2s ease-in",
            }}
            component="a"
            href={link}
            target="_blank"
          >
            {linkBody}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

KnowledgebaseCard.propTypes = {
  icon: PropTypes.node.isRequired,
  head: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkBody: PropTypes.string.isRequired,
};

export default KnowledgebaseCard;
