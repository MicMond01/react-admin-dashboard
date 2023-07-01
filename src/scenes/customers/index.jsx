import { Box, useTheme } from "@mui/material";
import CustomerTable from "../../components/tables/CustomerTable";
import React, { useEffect, useState } from "react";
import EmailForm from "../../components/control/EmailForm";
import PopOver from "../../components/PopOver";
import CustomersHeader from "../../components/headers/CustomersHeader";

const Team = () => {
  const theme = useTheme();

  // State to render and show error
  const [importedArr, setImportedArr] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [open, setOpen] = useState(false);
  // Delete State
  const [idValue, setIdValue] = useState("");
  const [openPopUp, setOpenPopUp] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  // Search State
  const [searchValue, setSearchValue] = useState("");
  const [searchParam] = useState([
    "firstName",
    "lastName",
    "email",
    "phone",
    "domain",
  ]);

  const handleClickOpen = (email) => {
    setOpen(true);

    if (email) {
      setIdValue(email);
    }
  };
  // let fig = 0;
  console.log(importedArr);

  const fetchData = async () => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(json?.users);
          setIsLoaded(true);
          setImportedArr(result.users);
        },

        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
    setOpen(false);
  };

  // Show POP for delete

  const HandleOpenPopOver = (id) => {
    setOpenPopUp(true);
    setDeleteId(id);
  };

  const HandleClosePopOver = () => {
    setOpenPopUp(false);
  };

  // Delete an item from the table

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
      <CustomersHeader
        importedArr={importedArr}
        handleFormSubmit={handleFormSubmit}
        searchValue={searchValue}
        setSearchValue={setSearchValue}

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
        <CustomerTable
          error={error}
          isLoaded={isLoaded}
          open={open}
          setIdValue={setIdValue}
          setOpen={setOpen}
          handleClickOpen={handleClickOpen}
          searchFunc={searchFunc}
          importedArr={importedArr}
          HandleOpenPopOver={HandleOpenPopOver}
        />
        <Box open={open} position="absolute">
          <EmailForm
            open={open}
            setOpen={setOpen}
            idValue={idValue}
            importedArr={importedArr}
            handleFormSubmit={handleFormSubmit}
          />
        </Box>

        {openPopUp && (
          <PopOver
            handleDelete={handleDelete}
            HandleClosePopOver={HandleClosePopOver}
          />
        )}
      </Box>
    </Box>
  );
};

export default Team;
