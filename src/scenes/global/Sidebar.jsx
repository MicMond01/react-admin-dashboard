import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
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
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

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
      backgroundColor={colors.primary[400]}
      sx={
        {
          // "& .sidebar": {
          //   border: "none",
          // },
          // "& .menu-icon": {
          //   backgroundColor: "transparent !important",
          // },
          // "& .menu-item": {
          //   // padding: "5px 35px 5px 20px !important",
          //   backgroundColor: "transparent !important",
          // },
          // "& .menu-anchor": {
          //   color: "inherit !important",
          //   backgroundColor: "transparent !important",
          // },
          // "& .menu-item:hover": {
          //   color: `${colors.blueAccent[500]} !important`,
          //   backgroundColor: "transparent !important",
          // },
          // "& .menu-item.active": {
          //   color: `${colors.greenAccent[500]} !important`,
          //   backgroundColor: "transparent !important",
          // },
        }
      }
    >
      <ProSidebar>
        <Menu>
          <Box backgroundColor={colors.primary[400]}>
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
