import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { PropTypes } from "prop-types";

function handleClick(event) {
  event.preventDefault();
}

export default function Breadcrumb({ id, title, name }) {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="#"
      onClick={handleClick}
    >
      {title}
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="#"
      onClick={handleClick}
    >
      {name}
    </Link>,
    <Typography key="3" color="text.primary">
      {id}
    </Typography>,
  ];

  return (
    <Stack spacing={2} sx={{ marginBottom: "1rem" }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

Breadcrumb.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
