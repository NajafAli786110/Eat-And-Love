import { Box, Container, Typography } from "@mui/material";
import React from "react";

// Sample data for the features
const features = [
  {
    icon: "/assets/icons/fast-food.png",
    title: "Diverse menu",
    description:
      "Our menu offers a wide range of delicious options, ensuring there's something for everyone to enjoy.",
  },
  {
    icon: "/assets/icons/order.png",
    title: "Easy ordering",
    description:
      "Experience a seamless and hassle-free ordering process that makes dining with us simple and convenient.",
  },
  {
    icon: "/assets/icons/help-desk.png",
    title: "Customer support",
    description:
      "We provide efficient and friendly customer support, making sure your needs are met every step of the way.",
  },
  {
    icon: "/assets/icons/quick.png",
    title: "Fast delivery",
    description:
      "Enjoy your meals quickly with our fast and reliable delivery service, ensuring your food arrives fresh and on time.",
  },
];

const WhyChoose = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "16px",
        padding: { xs: "40px 20px", md: "40px 30px" },
        backgroundColor: "var(--light-grey)",
        borderRadius: "18px",
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      {features.map((feature, index) => (
        <Box
          key={index}
          sx={{
            flex: "1",
            textAlign: "center",
            minWidth: {xs: "23%", md: "10%"},
            padding: "20px",
            border: "1px solid transparent",
            backgroundColor: "white",
            borderRadius: "12px",
            transition: "background-color 0.3s, color 0.3s",
            "&:hover": {
              backgroundColor: "var(--secondary-color)",
              color: "white",
            },
          }}
        >
          <Box
            component="img"
            sx={{ width: { xs: "40px", md: "50px" }, height: "auto" }}
            src={feature.icon}
            alt="Eat & Love"
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
          >
            {feature.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: "Poppins", fontSize: "12px", fontWeight: "300" }}
          >
            {feature.description}
          </Typography>
        </Box>
      ))}
    </Container>
  );
};

export default WhyChoose;
