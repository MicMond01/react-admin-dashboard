import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

//Import Images
import avatar1 from "../../assets/Toyin.png";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "./../../theme";
import { Typography } from "@mui/material/";

function CardUser() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [settingsMenu, setSettingsMenu] = useState(false);
  //Setting Menu
  const toggleSettings = () => {
    setSettingsMenu(settingsMenu);
  };

  return (
    <React.Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <Box sx={{ backgroundColor: colors.blueAccent[800] }}>
              <CardBody>
                <Row>
                  <Col lg="4">
                    <div className="d-flex">
                      <div className="me-3">
                        <img
                          src={avatar1}
                          alt=""
                          className="avatar-md rounded-circle img-thumbnail"
                        />
                      </div>
                      <div className="flex-grow-1 align-self-center ml-3">
                        <div className="text-muted">
                          <Typography
                            sx={{ color: colors.greenAccent[200], mb: "1rem" }}
                            variant="p"
                            className="mb-2"
                          >
                            Welcome to T-Fashion store Dashboard
                          </Typography>
                          <Typography
                            sx={{ color: colors.greenAccent[400], mb: "1rem" }}
                            variant="h5"
                            className="mb-1"
                          >
                            Toyin Owolabi
                          </Typography>
                          <p className="mb-0">Founder/CEO</p>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col lg="4" className="align-self-center">
                    <div className="text-lg-center mt-4 mt-lg-0">
                      <Row>
                        <Col xs="4">
                          <div>
                            <p className="text-muted text-truncate mb-2">
                              Total Projects
                            </p>
                            <Typography
                              sx={{
                                color: colors.greenAccent[600],
                              }}
                              variant="h5"
                              className="mb-0"
                            >
                              48
                            </Typography>
                          </div>
                        </Col>
                        <Col xs="4">
                          <div>
                            <p className="text-muted text-truncate mb-2">
                              Projects
                            </p>
                            <Typography
                              sx={{
                                color: colors.greenAccent[600],
                              }}
                              variant="h5"
                              className="mb-0"
                            >
                              40
                            </Typography>
                          </div>
                        </Col>
                        <Col xs="4">
                          <div>
                            <p className="text-muted text-truncate mb-2">
                              Clients
                            </p>
                            <Typography
                              sx={{
                                color: colors.greenAccent[600],
                              }}
                              variant="h5"
                              className="mb-0"
                            >
                              18
                            </Typography>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>

                  <Col lg="4" className="d-none d-lg-block">
                    <div className="clearfix mt-4 mt-lg-0 d-flex justify-content-end">
                      <Dropdown
                        isOpen={settingsMenu}
                        toggle={toggleSettings}
                        className="float-end"
                      >
                        <DropdownToggle
                          tag="button"
                          className="btn btn-primary"
                        >
                          <i className="bx bxs-cog align-middle me-1" /> Setting
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">Something else</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Box>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default CardUser;
