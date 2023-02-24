import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BookIcon from "@mui/icons-material/Book";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const type = "admin";

  const _sideBarLinks = [
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
      title: "Projects",
      link: "/projects",
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
      title: "Proposal",
      link: "/proposal",
      icon: BookIcon,
      permission: ["user", "admin"],
    },
    {
      title: "Contracts",
      link: "/contracts",
      icon: DriveFileRenameOutlineIcon,
      permission: ["user", "admin"],
    },
    {
      title: "Messages",
      link: "/messages",
      icon: ForumRoundedIcon,
      permission: ["user", "admin"],
    },
    {
      title: "Knowledgebase",
      link: "/knowledgebase",
      icon: PsychologyRoundedIcon,
      permission: ["user", "admin"],
    },
  ];

  return (
    <Box
      // overflow-x="scroll"
      height="100vh"
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        top: 0,
        left: 0,
        // position: "fixed",
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography
                  variant="h3"
                  display="grid"
                  justifyItems="center"
                  color={colors.grey[100]}
                >
                  <img src="/assets/Toyin.png" alt="logo" width="50px" />
                  House of Toliz
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {_sideBarLinks.map((item, index) => {
              if (item.permission?.includes(type)) {
                if (item.link) {
                  return (
                    <Item
                      key={index}
                      title={item.title}
                      to={item.link}
                      icon={<item.icon />}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  );
                } else {
                  return (
                    <Typography
                      key={index}
                      variant="h6"
                      color={colors.grey[300]}
                      sx={{ m: "15px 0 5px 20px" }}
                    >
                      {item.title}
                    </Typography>
                  );
                }
              }
            })}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
