import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Search, ShoppingCart, Login } from "@mui/icons-material";

// Demo Data
const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Our Menu",
    link: "/menu",
  },
  {
    name: "Our Location",
    link: "/location",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "0px 0px 5px #00000025",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Dekstop Menu */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Link to="/">
              <Box
                component="img"
                sx={{
                  width: { xs: "150px", md: "220px" },
                  height: "auto",
                }}
                src="/src/assets/logo.png"
                alt="Eat & Love"
              />
            </Link>

            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {/* Navigation List */}
              <List
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: "16px",
                  ml: "-8rem",
                }}
              >
                {pages.map((item) => (
                  <ListItem key={item.link} sx={{ width: "auto", padding: 0 }}>
                    <Link
                      to={item.link}
                      style={{
                        textDecoration: "none",
                        color: "var(--primary-color)",
                      }}
                    >
                      <ListItemText
                        primary={item.name}
                        primaryTypographyProps={{
                          sx: {
                            fontSize: "12px",
                            textTransform: "uppercase",
                            color: "var(--primary-color)",
                          },
                        }}
                      />
                    </Link>
                  </ListItem>
                ))}
              </List>
              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                {/* Search Icon */}
                <Search
                  sx={{
                    color: "var(--font-color)",
                    fontSize: { xs: "18px", sm: "25px" },
                  }}
                />

                {/* Cart Icon */}
                <Box
                  sx={{
                    position: "relative",
                    mb: "-5px",
                  }}
                >
                  <ShoppingCart
                    sx={{
                      color: "var(--font-color)",
                      fontSize: { xs: "18px", sm: "25px" },
                      zIndex: '10'
                    }}
                  />
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: "8px",
                      padding: "2px 6px",
                      backgroundColor: "var(--secondary-color)",
                      color: "var(--white-full)",
                      borderRadius: "100px",
                      position: "absolute",
                      top: -10,
                      right: -5,
                    }}
                  >
                    2
                  </Typography>
                </Box>
              </Box>
              <Button variant="contained" startIcon={<Login />} sx={{
                backgroundColor: 'var(--secondary-color)',
                borderRadius: '20px',
                textTransform: 'capitalize'
              }}>
                Login
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
