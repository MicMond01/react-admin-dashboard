import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainApp from "./../pages/MainApp";
import Register from "./../pages/Register";
import Login from "./../pages/Login";

const Error404 = React.lazy(() => import("./../scenes/Error/Error404"));
const Dashboard = React.lazy(() => import("./../scenes/Dashboard-saas/index"));
const Customers = React.lazy(() => import("../scenes/customers/index"));
const FileManager = React.lazy(() => import("./../scenes/FileManager/index"));
const Tasks = React.lazy(() => import("./../scenes/tasks/index"));
const Leads = React.lazy(() => import("./../scenes/leads/index"));
const Sales = React.lazy(() => import("./../scenes/sales/index"));
const Calendar = React.lazy(() => import("./../scenes/calendar/Calendar"));
const Contracts = React.lazy(() => import("./../scenes/contracts/index"));
const Knowledgebase = React.lazy(() =>
  import("./../scenes/knowledgebase/index")
);
const InvoiceReceipt = React.lazy(() =>
  import("./../components/InvoiceReceipt")
);

const type = "admin";
const _route = [
  {
    path: "/",
    component: Dashboard,
    permission: ["user", "admin"],
  },
  {
    path: "/dashboard",
    component: Dashboard,
    permission: ["user", "admin"],
  },
  {
    path: "/customers",
    component: Customers,
    permission: ["user", "admin"],
  },
  {
    path: "/file-manager",
    component: FileManager,
    permission: ["user", "admin"],
  },
  {
    path: "/tasks",
    component: Tasks,
    permission: ["user", "admin"],
  },
  {
    path: "/leads",
    component: Leads,
    permission: ["user", "admin"],
  },
  {
    path: "/sales",
    component: Sales,
    permission: ["user", "admin"],
  },
  {
    path: "/calendar",
    component: Calendar,
    permission: ["user", "admin"],
  },
  {
    path: "/contracts",
    component: Contracts,
    permission: ["user", "admin"],
  },
  {
    path: "/knowledgebase",
    component: Knowledgebase,
    permission: ["user", "admin"],
  },
  {
    path: "/sales/InvoiceReceipt/:id",
    component: InvoiceReceipt,
    permission: ["user", "admin"],
  },
];

const AppRoute = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<MainApp />}>
          {_route.map(
            (item, index) =>
              item.permission.includes(type) && (
                <Route
                  key={index}
                  path={item.path}
                  element={<item.component />}
                />
              )
          )}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </React.Suspense>
  );
};

export default AppRoute;

const Loader = () => {
  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress color="inherit" />
    </Box>
  );
};
