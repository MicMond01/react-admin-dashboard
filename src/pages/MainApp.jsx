import React from "react";
import { useState } from "react";
import Sidebar from "./../scenes/global/Sidebar";
import Topbar from "./../scenes/global/Topbar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainApp = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <Box className="mainApp">
      <Sidebar isSidebar={isSidebar} />

      <Box className="sideDetails">
        <Topbar setIsSidebar={setIsSidebar} className="topBar" />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainApp;
