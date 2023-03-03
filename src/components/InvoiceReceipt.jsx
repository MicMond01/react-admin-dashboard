import * as React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
// import React from "react";
import { Typography } from "@mui/material/";
import { useTheme } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { tokens } from "../theme";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0)];

const InvoiceReceipt = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { params } = useParams()

  console.log(params);

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

      {/*  */}

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

      {/*  */}

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

      {/*  */}

      <TableContainer sx={{ marginTop: "40px" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell align="right">Qty</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Rate</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/*  */}

      <Box
        sx={{
          width: "80%",
          marginTop: "120px",
        }}
        align="right"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <Typography fontWeight={theme.typography.fontWeightBold}>
            Subtotal
          </Typography>
          <Typography>$234565</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid white ",
            marginBottom: "20px",
          }}
        >
          <Typography fontWeight={theme.typography.fontWeightBold}>
            Sales Tax (15.00%)
          </Typography>
          <Box>
            <Typography>$136.80</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ color: colors.redAccent[500] }}
            fontWeight={theme.typography.fontWeightBold}
            variant="h3"
          >
            Total
          </Typography>
          <Box>
            <Typography
              sx={{ color: colors.redAccent[500] }}
              fontWeight={theme.typography.fontWeightBold}
              variant="h3"
            >
              $136.80
            </Typography>
          </Box>
        </Box>
      </Box>

      {/*  */}

      <Box sx={{ color: colors.blueAccent[500], marginTop: "70px" }}>
        <Typography
          sx={{ color: colors.blueAccent[500] }}
          fontWeight={theme.typography.fontWeightBold}
          variant="h4"
        >
          Thank you for your business.
        </Typography>
      </Box>
    </Box>
  );
};

export default InvoiceReceipt;
