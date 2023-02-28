// import { Box } from "@mui/material";

// const Invoices = () => {
//   return <Box m="20px">Projects</Box>;
// };

// export default Invoices;

import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material/";
import { useTheme } from "@mui/material";
import { tokens } from "./../../theme";

const InvoiceReceipt = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          borderBottom: "",
        }}
      >
        <Box>
          <Typography variant="h3" fontWeight={theme.typography.fontWeightBold}>
            Invoice
          </Typography>
          <Typography variant="h4">Invoice Number</Typography>
        </Box>
        <Box>
          <Typography variant="h1" sx={{ color: colors.greenAccent[400] }}>
            Paid
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography
            variant="h3"
            sx={{ marginBottom: "5px", color: colors.blueAccent[400] }}
          >
            House of Toliz
          </Typography>
          <Typography sx={{ maxWidth: "125px" }}>
            10, Redcamp Road Kent Mile Milehill Abuja Nigeria
          </Typography>
          <Typography>VAT No. ABC1038492</Typography>
        </Box>
        <Box align="right">
          <Typography>Invoice To</Typography>
          <Typography>EverBright inc</Typography>
          <Typography sx={{ maxWidth: "125px" }}>
            10, Septa Drive Rochester Kent X12 6DT Lagos Nigeria
          </Typography>
          <Typography>VAT: This is custom data field</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <Box>
          <Typography>Invoice Dtate</Typography>
          <Typography>05-20-2022</Typography>
        </Box>
        <Box
          sx={{
            width: "180px",
          }}
          align="right"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography fontWeight={theme.typography.fontWeightBold}>
              Payment
            </Typography>
            <Typography sx={{ color: colors.blueAccent[400] }}>
              $234565
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography fontWeight={theme.typography.fontWeightBold}>
              Balance Due
            </Typography>
            <Box
              sx={{
                background: colors.greenAccent[400],
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                width: "70px",
              }}
            >
              <Typography>$0.000</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InvoiceReceipt;
