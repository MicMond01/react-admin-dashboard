import { Box, IconButton, useTheme } from "@mui/material";
import { Typography } from "@mui/material/";
import { tokens } from "./../../theme";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import TimelineIcon from "@mui/icons-material/Timeline";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddIcon from "@mui/icons-material/Add";
import FormDialog from "../FormDialog";
import PropTypes from 'prop-types';
// import StatsCard from "./StatsCard";
// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

const InvoiceHeader = ({
  handleFormSubmit,
  hideStatCard,
  searchValue,
  setSearchValue,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          [theme.breakpoints.down("md")]: {
            display: "grid",
          },
        }}
      >
        <Box
          sx={{
            [theme.breakpoints.down("md")]: {
              pb: 4,
              mt: "50px",
            },
          }}
        >
          <Typography variant="h3" color={colors.blueAccent[400]}>
            Invoices
          </Typography>
          <Box>
            <Breadcrumbs
              aria-label="breadcrumb"
              separator={<NavigateNextIcon fontSize="small" />}
            >
              <Link underline="hover" color="inherit" href="#">
                HOME
              </Link>
              <Link underline="hover" color="inherit" href="#">
                SALES
              </Link>
              <Link
                underline="hover"
                color="text.primary"
                href="#"
                aria-current="page"
              >
                INVOICES
              </Link>
            </Breadcrumbs>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box
            display="flex"
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
          >
            <InputBase
              sx={{ ml: 2, width: 80 }}
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
          </Box>
          <Box
            width="40px"
            hieght="30px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor={colors.grey[800]}
            ml="10px"
            borderRadius="3px"
          >
            <IconButton onClick={hideStatCard}>
              <TimelineIcon />
            </IconButton>
          </Box>
          <Box
            width="40px"
            hieght="30px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor={colors.grey[800]}
            ml="10px"
            borderRadius="3px"
          >
            <IconButton>
              <FilterAltIcon />
            </IconButton>
          </Box>
          <Box
            width="40px"
            hieght="40px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor={colors.redAccent[500]}
            ml="10px"
            borderRadius="50%"
          >
            <IconButton onClick={handleClickOpen}>
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
        <Box open={open} position="absolute">
          <FormDialog
            open={open}
            setOpen={setOpen}
            handleFormSubmit={handleFormSubmit}
          />
        </Box>
      </Box>
      <Box>{/* <StatsCard /> */}</Box>
    </Box>
  );
};

InvoiceHeader.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  hideStatCard: PropTypes.bool.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default InvoiceHeader;
