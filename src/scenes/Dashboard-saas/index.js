import React from "react";
import { Container, Row, Col } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Components
import CardUser from "./card-user";
import CardWelcome from "./card-welcome";
import MiniWidget from "./mini-widget";
// import Earning from "./earning";
import SalesAnalytics from "./sales-analytics";
import TotalSellingProduct from "./total-selling-product";
import Tasks from "./tasks";
// import ChatBox from "./chat-box";

const DashboardSaas = () => {
  const reports = [
    {
      icon: "bx bx-copy-alt",
      title: "Orders",
      value: "1,452",
      badgeValue: "+ 0.2%",
      color: "success",
      desc: "From previous period",
    },
    {
      icon: "bx bx-archive-in",
      title: "Revenue",
      value: "$ 28,452",
      badgeValue: "+ 0.2%",
      color: "success",
      desc: "From previous period",
    },
    {
      icon: "bx bx-purchase-tag-alt",
      title: "Average Price",
      value: "$ 16.2",
      badgeValue: "0%",
      color: "warning",
      desc: "From previous period",
    },
  ];

  //meta title
  document.title =
    "React Dashboard | T-Store - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div
        style={{
          marginTop: "80px",
        }}
      >
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Dashboards" breadcrumbItem="Home" />

          {/* Card User */}
          <CardUser />

          <Row>
            {/* welcome card */}
            <CardWelcome />

            <Col xl="8">
              <Row>
                {/*mimi widgets */}
                <MiniWidget reports={reports} />
              </Row>
            </Col>
          </Row>

          <Row>
            {/* earning */}
            {/* <Earning /> */}

            {/* sales anytics */}
            <SalesAnalytics />
            {/* total selling product */}
            <TotalSellingProduct />

            {/* tasks */}
            <Tasks />
          </Row>

          <Row>
            {/* chat box */}
            {/* <ChatBox /> */}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardSaas;
