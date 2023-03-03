import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material/";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

const ContactCard = ({ type, name, telephone, email, address, city, id }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      maxWidth="300px"
      sx={{
        bgcolor: colors.redAccent[800],
        paddingTop: "5px",
        borderRadius: "10px 10px 0 0",
      }}
    >
      <Box
        sx={{
          bgcolor: colors.grey[800],
          padding: "15px",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}
        >
          <Typography variant="h4" fontWeight={theme.typography.fontWeightBold}>
            {type}
          </Typography>
          <Box>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              bgcolor: colors.grey[700],
              width: "100px",
              borderRadius: "7px",
              marginBottom: "10px",
            }}
          >
            <Typography sx={{ color: colors.grey[200], textAlign: "center" }}>
              {name}
            </Typography>
          </Box>
          <Box display="flex" marginBottom="5px">
            <Typography sx={{ color: colors.grey[400], marginRight: "5px" }}>
              Telephone:
            </Typography>
            <Typography sx={{ color: colors.grey[200] }}>
              {telephone}
            </Typography>
          </Box>
          <Box display="flex" marginBottom="5px">
            <Typography sx={{ color: colors.grey[400], marginRight: "5px" }}>
              Email:
            </Typography>
            <Typography sx={{ color: colors.grey[200] }}>{email}</Typography>
          </Box>
          <Box display="flex" marginBottom="5px">
            <Typography sx={{ color: colors.grey[400], marginRight: "5px" }}>
              Address:
            </Typography>
            <Typography sx={{ color: colors.grey[200] }}>{address}</Typography>
          </Box>
          <Box display="flex" marginBottom="5px">
            <Typography sx={{ color: colors.grey[400], marginRight: "5px" }}>
              City:
            </Typography>
            <Typography sx={{ color: colors.grey[200] }}>{city}</Typography>
          </Box>
          <Box display="flex" marginBottom="5px">
            <Typography sx={{ color: colors.grey[400], marginRight: "5px" }}>
              Register Id:
            </Typography>
            <Typography sx={{ color: colors.grey[200] }}>{id}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactCard;
