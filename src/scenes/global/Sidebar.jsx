import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Box,
  Collapse,
  Divider,
  Typography,
  Drawer as MobileDrawer,
  ListItemButton,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import logo from "../../assets/Toyin.png";
import { tokens } from "./../../theme";
import { useLocation } from "react-router-dom";

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
  width: "0px",
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 2),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  backgroundColor: "none",
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

const SidebarItem = ({ title, link, icon: Icon, sub }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();

  if (title === "Divider") {
    return <Divider sx={{ my: "1rem" }} />;
  }

  if (sub) {
    const [open, setOpen] = React.useState(false);

    const handleDropDown = () => {
      setOpen(!open);
    };

    return (
      <React.Fragment>
        <ListItemButton
          onClick={handleDropDown}
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <ListItemIcon>
            <Icon
              style={{
                width: "1.3rem",
                height: "1.3rem",
                marginBottom: "1rem",
                color: colors.grey[100],
              }}
            />
          </ListItemIcon>
          <ListItemText primary={title} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {sub.map((subItem, indexX) => (
              <Link to={subItem.link} key={indexX}>
                <ListItemButton
                  sx={{
                    color:
                      location.pathname === subItem.link
                        ? colors.greenAccent[300]
                        : colors.grey[100],
                    display: "flex",
                    ml: "2rem",
                    gap: "1rem",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <ListItemIcon>
                    <subItem.icon
                      style={{
                        width: "1.3rem",
                        height: "1.3rem",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={subItem.title} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Collapse>
      </React.Fragment>
    );
  }

  return (
    <Link to={link}>
      <ListItemButton
        sx={{
          color:
            location.pathname === link
              ? colors.greenAccent[300]
              : colors.grey[100],
          display: "flex",
          gap: "1rem",
          marginBottom: "1rem",
          alignItems: "center",
        }}
      >
        <ListItemIcon
          sx={{
            color:
              location.pathname === link
                ? colors.greenAccent[300]
                : colors.grey[100],
          }}
        >
          <Icon style={{ width: "1.3rem", height: "1.3rem" }} />
        </ListItemIcon>
        <ListItemText sx={{ fontWeight: "900", fontSize: "3rem" }}>
          {title}
        </ListItemText>
      </ListItemButton>
    </Link>
  );
};

SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  sub: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
    })
  ),
  active: PropTypes.bool,
};

const Sidebar = ({
  openSideBar,
  handleDropDown,
  openChild,
  setMobileDrawer,
  mobileDrawer,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const location = useLocation();

  // Check if the current location pathname matches the sidebar item link
  // const isActive = location.pathname

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const sidebarLinks = [
    {
      title: "Dashboard",
      link: "/dashboard",
      icon: HomeOutlinedIcon,
      permission: ["user", "admin"],
    },
    {
      title: "Customers",
      link: "/customers",
      icon: PeopleOutlinedIcon,
      permission: ["user", "admin"],
    },
    {
      title: "FileManager",
      link: "/file-manager",
      icon: FolderOpenIcon,
      permission: ["user", "admin"],
    },
    {
      title: "Tasks",
      link: "/tasks",
      icon: FormatListBulletedIcon,
      permission: ["user", "admin"],
    },
    {
      title: "Leads",
      link: "/leads",
      icon: PhoneCallbackIcon,
      permission: ["admin"],
    },
    {
      title: "Sales",
      link: "/sales",
      icon: AccountBalanceWalletIcon,
      permission: ["user", "admin"],
    },
    {
      title: "Calendar",
      link: "/calendar",
      icon: CalendarMonthIcon,
      permission: ["user", "admin"],
    },
    {
      title: "Contracts",
      link: "/contracts",
      icon: DriveFileRenameOutlineIcon,
      permission: ["user", "admin"],
    },
    {
      title: "Knowledgebase",
      link: "/knowledgebase",
      icon: PsychologyRoundedIcon,
      permission: ["user", "admin"],
    },
  ];

  const sidebarItem = (
    <Box>
      <DrawerHeader>
        <List
          sx={{ display: "flex", alignItems: "center" }}
          gap="1rem"
          mt="1rem"
          mb="2rem"
        >
          <ListItemIcon>
            <img src={logo} alt="logo" width={openSideBar ? "45px" : "30px"} />
          </ListItemIcon>
          <ListItemText>
            <Typography>T Fashion </Typography>
          </ListItemText>
        </List>
      </DrawerHeader>
      <Divider />
      <List
        sx={{
          button: ({ level, active }) => {
            if (level === 0)
              return {
                fontWeight: "bold !important",
                backgroundColor: active ? "tomato" : undefined,
                margin: "0 3px",
                "&:hover": {
                  backgroundColor: "#335B8C !important",
                  color: "white !important",
                  borderRadius: "8px !important",
                  fontWeight: "bold !important",
                },
              };
          },
          subMenuContent: {
            backgroundColor: "transparent !important",
          },
        }}
      >
        {sidebarLinks.map((item, index) => (
          <SidebarItem
            key={index}
            title={item.title}
            link={item.link}
            icon={item.icon}
            sub={item.sub}
            active={location.pathname === item.link}
            handleDropDown={handleDropDown}
            open={openChild}
          />
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        background: colors.primary[400],
        display: { xs: "none", sm: "block" },
      }}
    >
      <Drawer variant="permanent" open={openSideBar}>
        {sidebarItem}
      </Drawer>
      <MobileDrawer
        container={container}
        variant="temporary"
        open={mobileDrawer}
        onClose={() => setMobileDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {sidebarItem}
      </MobileDrawer>
    </Box>
  );
};

Sidebar.propTypes = {
  openSideBar: PropTypes.bool.isRequired,
  handleDropDown: PropTypes.func.isRequired,
  openChild: PropTypes.bool.isRequired,
  setMobileDrawer: PropTypes.func.isRequired,
  mobileDrawer: PropTypes.bool.isRequired,
};

export default Sidebar;
