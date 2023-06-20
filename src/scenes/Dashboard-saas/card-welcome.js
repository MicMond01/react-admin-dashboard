import React from "react";
import { Row, Col, Card } from "reactstrap";

//Import Images
import profileImg from "../../assets/images/profile-img.png";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Typography } from "@mui/material/";

function CardWelcome() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <React.Fragment>
      <Col xl="4">
        <Card>
          <Box sx={{ backgroundColor: colors.primary[400] }}>
            <div>
              <Row>
                <Col xs="7">
                  <div className="text-primary p-3">
                    <Typography
                      variant="h3"
                      sx={{ color: colors.primary[100] }}
                    >
                      Welcome Back !
                    </Typography>
                    <p>Your Dashboard</p>

                    <ul className="ps-3 mb-0">
                      <li className="py-1">8 + Scenes</li>
                      <li className="py-1">Multiple apps</li>
                    </ul>
                  </div>
                </Col>
                <Col xs="5" className="align-self-end">
                  <img src={profileImg} alt="" className="img-fluid" />
                </Col>
              </Row>
            </div>
          </Box>
        </Card>
      </Col>
    </React.Fragment>
  );
}

export default CardWelcome;
