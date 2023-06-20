import PropTypes from "prop-types";
import React from "react";
import { Col, Card, CardBody } from "reactstrap";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

const MiniWidget = ({ reports }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <React.Fragment>
      {reports.map((report, key) => (
        <Col sm="4" key={key}>
          <Card>
            <Box sx={{ backgroundColor: colors.greenAccent[800] }}>
              <CardBody>
                <div className="d-flex align-items-center mb-3">
                  <div className="avatar-xs mr-3">
                    <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18">
                      <i className={report.icon} />
                    </span>
                  </div>
                  <Typography className="font-size-14 mb-0">
                    {report.title}
                  </Typography>
                </div>
                <div className="text-muted mt-4">
                  <Typography
                    sx={{ color: colors.greenAccent[200], mb: "1rem" }}
                    variant="h4"
                  >
                    {report.value}{" "}
                    <i className="mdi mdi-chevron-up ms-1 text-success" />
                  </Typography>
                  <div className="d-flex">
                    <span
                      className={
                        "badge badge-soft-" + report.color + " font-size-12"
                      }
                    >
                      {" "}
                      {report.badgeValue}{" "}
                    </span>{" "}
                    <span className="ms-2 text-truncate">{report.desc}</span>
                  </div>
                </div>
              </CardBody>
            </Box>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  );
};

MiniWidget.propTypes = {
  reports: PropTypes.array,
};

export default MiniWidget;
