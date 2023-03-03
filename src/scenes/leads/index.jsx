import { Box } from "@mui/material";
import React from "react";
import { mockDataContacts } from "../../data/mockData";
import ContactCard from "./../../components/ContactCard";

const index = () => {
  return (
    <Box m="20px">
      <Box>
        {mockDataContacts.map((item) => (
          <ContactCard
            name={item.name}
            address={item.address}
            telephone={item.phone}
          />
        ))}
      </Box>
    </Box>
  );
};

export default index;
