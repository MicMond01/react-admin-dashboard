import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Row, Col, BreadcrumbItem } from "reactstrap";
import { Typography } from "@mui/material/";
import { useTheme } from "@emotion/react";
import { tokens } from "./../../theme";

const Breadcrumb = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Row>
      <Col xs="12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <Typography
            sx={{
              color: colors.blueAccent[600],
              fontSize: "18",
            }}
            variant="h4"
            className="mb-0 font-size-18"
          >
            {props.breadcrumbItem}
          </Typography>
          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <BreadcrumbItem>
                <Typography
                  sx={{
                    color: colors.greenAccent[600],
                  }}
                  variant="p"
                >
                  <Link to="#">{props.title}</Link>
                </Typography>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                <Typography
                  sx={{
                    color: colors.greenAccent[600],
                  }}
                  variant="p"
                >
                  <Link to="#">{props.breadcrumbItem}</Link>
                </Typography>
              </BreadcrumbItem>
            </ol>
          </div>
        </div>
      </Col>
    </Row>
  );
};

Breadcrumb.propTypes = {
  breadcrumbItem: PropTypes.string,
  title: PropTypes.string,
};

export default Breadcrumb;
