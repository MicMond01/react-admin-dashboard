import { Box, useTheme } from "@mui/material";
import SalesTable from "../../components/tables/SalesTable";
import { tokens } from "../../theme";
import InvoiceHeader from "./../../components/headers/InvoiceHeader";
import StatsCard from "./../../components/headers/StatsCard";
import { clients } from "../../data/index";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import PopOver from "../../components/PopOver";

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
  const [openPopUp, setOpenPopUp] = useState(false);
  const [deleteId, setDeleteId] = useState();
  // let fig = 0;

  // Search State
  const [searchValue, setSearchValue] = useState("");
  const [searchParam] = useState(["brandName", "supplies"]);

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

  const HandleOpenPopOver = (id) => {
    setOpenPopUp(true);
    setDeleteId(id);
  };

  const HandleClosePopOver = () => {
    setOpenPopUp(false);
  };

  const handleDelete = () => {
    // console.log(id);
    const previousData = [...importedArr];
    const index = previousData.findIndex((item) => item.id === deleteId);

    if (index > -1) {
      importedArr.splice(index, 1);
    }
    setOpenPopUp(false);
  };

  // Filter the table
  function searchFunc(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(searchValue.toLowerCase()) > -1
        );
      });
    });
  }

  return (
    <Box
      m="20px"
      mt="80px"
      sx={{
        [theme.breakpoints.down("md")]: {
          m: "5px",
          width: "100vw",
          mr: "55px",
        },
      }}
    >
      <InvoiceHeader
        importedArr={importedArr}
        handleFormSubmit={handleFormSubmit}
        hideStatCard={hideStatCard}
        setSearchValue={setSearchValue}

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
            hValue={"h3"}
          />
          <StatsCard
            top={"$" + paymentTotal.toLocaleString()}
            span={"Payments"}
            colorLine={colors.greenAccent[400]}
            hValue={"h3"}
          />
          <StatsCard
            top={"$0.00"}
            span={"Due (0)"}
            colorLine={colors.blueAccent[400]}
            hValue={"h3"}
          />
          <StatsCard
            top={"$" + overdue.toLocaleString()}
            span={"Overdue "}
            colorLine={colors.redAccent[400]}
            hValue={"h3"}
          />
        </Box>
      )}
      <Box
        mt="10px"
        sx={{
          [theme.breakpoints.down("md")]: {
            width: "75vw",
          },
        }}
      >
        <SalesTable
          HandleOpenPopOver={HandleOpenPopOver}
          importedArr={importedArr}
          searchFunc={searchFunc}
        />
      </Box>
      {openPopUp && (
        <PopOver
          handleDelete={handleDelete}
          HandleClosePopOver={HandleClosePopOver}
        />
      )}
    </Box>
  );
};

export default Sales;
