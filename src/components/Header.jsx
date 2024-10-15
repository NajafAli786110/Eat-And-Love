import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "transparent", padding: "10px 0px" }}
    >
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            maxWidth: 120,
            overflow: "hidden",
          }}
        >
          <Link>
            <img
              src="/src/assets/logo.png"
              alt="Description"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Link>
        </Box>
        <Box
          display={{ xs: "none", sm: "flex" }}
          gap={2}
          width="100%"
          alignItems="end"
          justifyContent="end"
        >
          <Button style={{ color: "var(--primary-color)" }}>Home</Button>
          <Button style={{ color: "var(--primary-color)" }}>Our Menu</Button>
          <Button style={{ color: "var(--primary-color)" }}>About Us</Button>
          <Button style={{ color: "var(--primary-color)" }}>Contact Us</Button>
        </Box>
        <Box display={{ xs: "flex", sm: "none" }} sx={{ flexGrow: 1 }} alignItems={'end'} justifyContent={'end'}>
          <Button style={{ color: "var(--primary-color)" }}>Menu</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
