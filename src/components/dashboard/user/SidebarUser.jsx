import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { BiHistory } from "react-icons/bi";
import { AiFillProfile } from "react-icons/ai";

const SidebarUser = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    {
      text: "Order History",
      icon: <BiHistory />,
      activeComponent: "OrderHistory",
    },
    {
      text: "Profile",
      icon: <AiFillProfile />,
      activeComponent: "Profile",
    },
  ];
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "250px" },
        backgroundColor: "primary.main",
        color: "#FFF",
        padding: "20px",
        boxShadow: "2px 0 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        minHeight: '100vh'
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >

        {/* User Profile Short */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "8px",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              width: { xs: "30px", md: "70px" },
              height: { xs: "30px", md: "70px" },
              borderRadius: "100px",
              objectFit: "cover",
            }}
            src="https://i.ytimg.com/vi/3TLEfOMBbMw/sddefault.jpg"
            alt="Profile"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "15px", md: "18px" },
              }}
            >
              Lila
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "8px", md: "12px" },
                color: "#ffffff70",
              }}
            >
              Lila@gmail.com
            </Typography>
          </Box>
        </Box>

        {/* SideBar */}
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              onClick={() => {
                setActiveTab(item.activeComponent);
              }}
              sx={{
                marginBottom: "16px",
                color: "#FFF",
                borderRadius: "8px",
                display: 'flex',
                gap: '4px',
                "&:hover": {
                  backgroundColor: "secondary.main",
                },
              }}
            >
              <ListItemIcon sx={{ color: "#FFF", minWidth: '20px', fontSize: '20px' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SidebarUser;
