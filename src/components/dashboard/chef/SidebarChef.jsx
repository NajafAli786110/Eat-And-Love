import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import RecipeIcon from "@mui/icons-material/Receipt";
import HistoryIcon from "@mui/icons-material/History";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const SidebarChef = ({ onTabChange }) => {
  const menuItems = [
    { text: "Stock Management", icon: <InventoryIcon />, activeComponent: "StockManagement" },
    { text: "Suggest New Recipe", icon: <RecipeIcon />, activeComponent: "SuggestNewRecipe" },
    { text: "Attendance History", icon: <HistoryIcon />, activeComponent: "AttendanceHistory" },
    { text: "Profile", icon: <AccountBoxIcon />, activeComponent: "Profile" },
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
            <Typography sx={{ fontSize: { xs: "15px", md: "18px" } }}>Chef John</Typography>
            <Typography sx={{ fontSize: { xs: "8px", md: "12px" }, color: "#ffffff70" }}>
              chefjohn@example.com
            </Typography>
          </Box>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              onClick={() => { onTabChange(item.activeComponent); }}
              sx={{
                marginBottom: "16px",
                color: "#FFF",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "secondary.main",
                },
              }}
            >
              <ListItemIcon sx={{ color: "#FFF" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SidebarChef;
