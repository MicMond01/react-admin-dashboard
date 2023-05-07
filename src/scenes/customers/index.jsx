import { Box, useTheme } from "@mui/material";
import SalesTable from "../../components/tables/SalesTable";
import { tokens } from "../../theme";
import InvoiceHeader from "./../../components/headers/InvoiceHeader";
import { clients } from "../../data/index";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // TO randomly produce unique ID
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 3);

  const [importedArr, setImportedArr] = useState(clients);
  const [statsCard, setStatsCard] = useState(true);
  // let fig = 0;

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

        // setImportedArr={setImportedArr}
      />
      <Box
        mt="10px"
        sx={{
          [theme.breakpoints.down("md")]: {
            width: "75vw",
          },
        }}
      >
        <SalesTable importedArr={importedArr} />
      </Box>
    </Box>
  );
};

export default Team;
