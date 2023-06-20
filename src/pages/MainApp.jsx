import { Outlet } from "react-router-dom";
import * as React from "react";
import { Box } from "@mui/material";
import { useState } from "react";
import SideBar from "./../scenes/global/Sidebar";
import Navbar from "../scenes/global/Navbar";

export default function MainApp() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openChild, setOpenChild] = useState(false);
  const [mobileDrawer, setMobileDrawer] = useState(false);

  const containerRef = React.useRef(null);

  const handleDrawerOpen = () => {
    setOpenSideBar(!openSideBar);

    if (openSideBar) {
      setOpenChild(false);
    }
  };

  const toggleMobileDrawer = () => setMobileDrawer(!mobileDrawer);

  const handleDropDown = () => {
    setOpenChild(!openChild);
  };

  return (
    <Box ref={containerRef} component="div" display="flex" minHeight="100vh">
      <SideBar
        openSideBar={openSideBar}
        handleDropDown={handleDropDown}
        openChild={openChild}
        setMobileDrawer={setMobileDrawer}
        mobileDrawer={mobileDrawer}
      />
      <Box flex="2" component="main">
        <Navbar
          containerRef={containerRef}
          handleDrawerOpen={handleDrawerOpen}
          toggleMobileDrawer={toggleMobileDrawer}
          openSideBar={openSideBar}
        />
        <Box component="section" p="2rem">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
