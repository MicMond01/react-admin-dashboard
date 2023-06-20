import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Box } from "@mui/material";

const Error404 = () => {
  return (
    <Box textAlign="center" py={5}>
      <Typography variant="h1" component="h1" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" paragraph>
        The page you are looking for does not exist.
      </Typography>
      <Button variant="contained" component={Link} to="/" color="primary">
        Go back home
      </Button>
    </Box>
  );
};

export default Error404;
