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
import { Search, ShoppingCart, Login, Menu } from "@mui/icons-material";
import MobileMenuPopup from "./MobileMenuPopup";
import SearchBarPopup from "./SearchBarPopup";

// Demo Data
const pages = [
  { name: "Home", link: "/" },
  { name: "Our Menu", link: "/menu" },
  { name: "Our Locations", link: "/location" },
  { name: "About Us", link: "/about-us" },
  { name: "Contact Us", link: "/contact-us" },
];

const Header = () => {
  const [mblMenuOpen, setMblMenuOpen] = React.useState(false);
  const [isOpenSearch, setIsOpenSearch] = React.useState(false);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "0px 0px 5px #00000025",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Desktop Menu */}
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
                  sx={{ width: { xs: "150px", md: "220px" }, height: "auto" }}
                  src="/assets/Logo.png"
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
                    <ListItem
                      key={item.link}
                      sx={{ width: "auto", padding: 0 }}
                    >
                      <Link
                        to={item.link}
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <ListItemText
                          primary={item.name}
                          primaryTypographyProps={{
                            sx: {
                              fontSize: "12px",
                              textTransform: "uppercase",
                              color: 'primary.main',
                            },
                          }}
                        />
                      </Link>
                    </ListItem>
                  ))}
                </List>

                {/* Icons */}
                <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  {/* Search Icon */}
                  <Button
                    onClick={() => setIsOpenSearch(true)}
                    sx={{ minWidth: { xs: "18px", sm: "25px" } }}
                  >
                    <Search
                      sx={{
                        color: "common.fontColor",
                        fontSize: { xs: "18px", sm: "25px" },
                      }}
                    />
                  </Button>

                  {/* Cart Icon */}
                  <Box sx={{ position: "relative", mb: "-5px" }}>
                    <ShoppingCart
                      sx={{
                        color: "var(--font-color)",
                        fontSize: { xs: "18px", sm: "25px" },
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "6px", md: "8px" },
                        padding: { xs: "2px 5px", md: "2px 6px" },
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

                  {/* Mobile Menu */}
                  <Button
                    sx={{
                      color: "var(--font-color)",
                      padding: 0,
                      margin: 0,
                      minWidth: "20px",
                      display: { xs: "flex", md: "none" },
                    }}
                    onClick={() => setMblMenuOpen(true)}
                  >
                    <Menu
                      sx={{ color: "var(--font-color)", fontSize: "18px" }}
                    />
                  </Button>
                </Box>

                <Button
                  variant="contained"
                  startIcon={<Login />}
                  sx={{
                    backgroundColor: "var(--secondary-color)",
                    borderRadius: "20px",
                    textTransform: "capitalize",
                    display: { xs: "none", sm: "flex" },
                  }}
                >
                  Login
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {isOpenSearch && <SearchBarPopup setIsOpenSearch={setIsOpenSearch} />}
      {mblMenuOpen && (
        <MobileMenuPopup pages={pages} setMblMenuOpen={setMblMenuOpen} />
      )}
    </>
  );
};

export default Header;
