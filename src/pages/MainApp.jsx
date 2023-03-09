// import React from "react";
// import { useState } from "react";
import Sidebar from "./../scenes/global/Sidebar";
import Topbar from "./../scenes/global/Topbar";
// import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

// const MainApp = () => {
//   const [isSidebar, setIsSidebar] = useState(true);
//   return (
//     <Box
//       sx={{ height: "100%", display: "flex" }}
//       className="mainApp"
//     >
//       <Sidebar isSidebar={isSidebar} />

//       <Box className="sideDetails">
//         <Topbar setIsSidebar={setIsSidebar} className="topBar" />
//         <Outlet />
//       </Box>
//     </Box>
//   );
// };

// export default MainApp;

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { MenuItem } from "@mui/material";
import { tokens } from "../theme";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MainApp() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const colors = tokens(theme.palette.mode);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex",  }}>
      <CssBaseline />
      <AppBar
        sx={{ backgroundColor: colors.primary[400] }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Topbar className="topBar" />
        </Toolbar>
      </AppBar>
      <Drawer
        // sx={{ backgroundColor: colors.primary[600] }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader sx={{ backgroundColor: colors.primary[400] }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <MenuItem>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    variant="h3"
                    display="grid"
                    justifyItems="center"
                    // color={colors.grey[100]}
                  >
                    <img src="/assets/Toyin.png" alt="logo" width="50px" />
                    House of Toliz
                  </Typography>
                </Box>
                <ChevronLeftIcon />
              </MenuItem>
            )}
          </IconButton>
        </DrawerHeader>
        <Sidebar />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}
        <Outlet />
      </Box>
    </Box>
  );
}
