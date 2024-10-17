import { CallMade, HeatPumpRounded } from "@mui/icons-material";
import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        justifyContent: "center",
        padding: "30px 0px",
      }}
    >
      <Toolbar disableGutters>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: "32px",
            alignItems: "center",
            justifyContent: "center",
            padding: "0px 0px",
          }}
        >
          {/* Left Side */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              maxWidth: "50%",
            }}
          >
            {/* Subheading */}
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.05rem" },
                color: "var(--primary-color)",
                backgroundColor: "#FEE9DE",
                borderRadius: "100px",
                padding: "5px 20px",
                fontFamily: "Ahsing",
                letterSpacing: "2px",
                display: "flex",
                gap: "8px",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: "0px",
              }}
            >
              More than Faster
              <HeatPumpRounded
                sx={{
                  color: "var(--secondary-color)",
                }}
              />
            </Typography>

            {/* Main Heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "4.5rem" },
                fontWeight: "700",
                fontFamily: "Poppins",
                letterSpacing: "-4px",
              }}
            >
              Claim Best Offer on
              <span style={{ color: "var(--secondary-color)" }}>
                {" "}
                Fast Food
              </span>{" "}
              &{" "}
              <span style={{ color: "var(--secondary-color)" }}>
                {" "}
                Restaurants
              </span>
              .
            </Typography>

            {/* Subheading */}
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: { xs: "1rem", sm: "1rem" },
                color: "var(--font-color)",
                fontFamily: "Poppins",
                letterSpacing: "-0.7px",
                textTransform: "capitalize",
              }}
            >
              Enjoy delicious meals from top restaurants with exclusive
              discounts.
            </Typography>

            {/* Call-to-Action Button */}
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<CallMade />}
              sx={{
                padding: "10px 20px",
                borderRadius: "8px",
                backgroundColor: "black",
                display: "flex",
                gap: "0px",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              Get Offer Now
            </Button>
          </Box>

          {/* Right Side */}
          <Box
            sx={{
              width: { xs: "100%", sm: "50%" },
            }}
          >
            <img
              src="/src/assets/Hero Left.png"
              alt="Fast Food Promo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </Container>
  );
};

export default HeroSection;
