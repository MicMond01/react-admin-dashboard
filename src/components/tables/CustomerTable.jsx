import * as React from "react";
import PropTypes from "prop-types";
// import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
// import { convertLength } from "@mui/material/styles/cssUtils";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  // console.log(array);
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// console.log(typeof stableSort);

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "cient",
    numeric: false,
    disablePadding: false,
    label: "Company Name",
  },
  {
    id: "Email",
    numeric: false,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "phone",
    numeric: true,
    disablePadding: false,
    label: "Phone",
  },
  {
    id: "city",
    numeric: true,
    disablePadding: false,
    label: "City",
  },
  {
    id: "domain",
    numeric: true,
    disablePadding: false,
    label: "Domain",
  },
  {
    id: "action",
    numeric: false,
    disablePadding: false,
    label: "Action",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number,
};

function EnhancedTableToolbar(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: colors.grey[200],
        }),
        bgcolor: colors.blueAccent[900],
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color={colors.grey[300]}
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Invoice
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          {/* here */}
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function CustomerTable({
  importedArr,
  handleClickOpen,
  HandleOpenPopOver,
  isLoaded,
  error,
  searchFunc,
}) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // console.log(typeof importedArr);
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = importedArr.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - importedArr.length) : 0;

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <Box
        sx={{
          width: "100%",
          mt: "50px",
        }}
      >
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              sx={{ minWidth: 750, bgcolor: colors.blueAccent[900] }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={importedArr.length}
              />
              <TableBody>
                {stableSort(
                  searchFunc(importedArr),
                  getComparator(order, orderBy)
                )
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={index}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              sx={{
                                borderRadius: "50%",
                                bgcolor: colors.grey[200],
                                width: "2rem",
                                height: "2rem",
                                marginRight: "1rem",
                              }}
                            >
                              <img
                                className="img-api"
                                src={row.image}
                                alt="profile"
                              />
                            </Box>
                            {` ${row.firstName} ${row.lastName}`}
                          </Box>
                        </TableCell>

                        {/* <TableCell align="right">{row.id}</TableCell> */}
                        <TableCell align="left">{row?.company?.name}</TableCell>
                        <TableCell align="left">{row?.email}</TableCell>
                        <TableCell align="right">{row?.phone}</TableCell>
                        <TableCell align="right">
                          {row?.address?.city}
                        </TableCell>
                        <TableCell align="right">{row?.domain}</TableCell>
                        <TableCell align="center" display="inline-flex">
                          <Tooltip title="Edit">
                            {/* here */}
                            <IconButton>
                              <NoteAltIcon
                                sx={{ color: colors.greenAccent[300] }}
                              />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete">
                            {/* here */}
                            {/* <IconButton onClick={() => handleDelete(row.id)}> */}
                            {/* () => openPopOver(row.id) */}
                            <IconButton
                              onClick={() => HandleOpenPopOver(row.id)}
                            >
                              <DeleteIcon
                                sx={{ color: colors.redAccent[300] }}
                              />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="send an email">
                            <IconButton
                              onClick={() => handleClickOpen(row.email)}
                            >
                              <EmailIcon />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={importedArr.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
        {/* {popup.show && (
        <PopOver
          handleDelete={handleDelete}
          // handleDeleteFalse={handleDeleteFalse}
        />
      )} */}
      </Box>
    );
  }
}

CustomerTable.propTypes = {
  importedArr: PropTypes.array.isRequired,
  handleClickOpen: PropTypes.func.isRequired,
  HandleOpenPopOver: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  error: PropTypes.object,
  searchFunc: PropTypes.func.isRequired,
};