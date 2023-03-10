import { Box, useTheme } from "@mui/material";
import SalesTable from "../../components/tables/SalesTable";
import { tokens } from "../../theme";
import InvoiceHeader from "./../../components/headers/InvoiceHeader";
import StatsCard from "./../../components/headers/StatsCard";
import { clients } from "../../data/index";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";

const Sales = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // TO randomly produce unique ID
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 3);

  const [total, setTotal] = useState(0);
  const [paymentTotal, setPaymentTotal] = useState(0);
  const [overdue, setOverdue] = useState(0);
  const [importedArr, setImportedArr] = useState(clients);
  const [statsCard, setStatsCard] = useState(true);
  // let fig = 0;

  const arrItem = clients.map((item) => item);
  const lengt = arrItem.length;

  useEffect(() => {
    const invoiceTotal = clients.reduce(
      (acc, o) => acc + parseFloat(o.amount.replace(/,/g, "")),
      0
    );

    const payment = clients.reduce(
      (acc, o) => acc + parseFloat(o.payment.replace(/,/g, "")),
      0
    );

    const overDue = invoiceTotal - payment;

    setTotal(invoiceTotal);
    setPaymentTotal(payment);
    setOverdue(overDue);
  }, []);

  const handleFormSubmit = (values) => {
    // console.log(values);
    setImportedArr((prev) => [
      ...prev,
      {
        brandName: values.brandName,
        date: values.date,
        supplies: values.supplies,
        amount: values.amount,
        payment: values.payment,
        id: "INV-000" + small_id,
      },
    ]);
  };

  const hideStatCard = () => {
    // ontoggle
    setStatsCard(!statsCard);
  };

  return (
    <Box
      m="20px"
      mt="80px"
      sx={{
        [theme.breakpoints.down("sm")]: {
          m: "5px",
        },
      }}
    >
      <InvoiceHeader
        importedArr={importedArr}
        handleFormSubmit={handleFormSubmit}
        hideStatCard={hideStatCard}

        // setImportedArr={setImportedArr}
      />
      {statsCard && (
        <Box
          justifyContent="space-between"
          gap="10px"
          mt="10px"
          sx={{
            display: "flex",
            [theme.breakpoints.down("md")]: {
              display: "grid",
              gap: "10px",
              width: "100vw",
            },
          }}
        >
          <StatsCard
            top={"$" + total.toLocaleString()}
            span={"Invoices " + lengt}
            colorLine={colors.grey[100]}
          />
          <StatsCard
            top={"$" + paymentTotal.toLocaleString()}
            span={"Payments"}
            colorLine={colors.greenAccent[400]}
          />
          <StatsCard
            top={"$0.00"}
            span={"Due (0)"}
            colorLine={colors.blueAccent[400]}
          />
          <StatsCard
            top={"$" + overdue.toLocaleString()}
            span={"Overdue "}
            colorLine={colors.redAccent[400]}
          />
        </Box>
      )}
      {/* <Box mt="10px"></Box> */}
      <SalesTable importedArr={importedArr} />
    </Box>
  );
};

export default Sales;
