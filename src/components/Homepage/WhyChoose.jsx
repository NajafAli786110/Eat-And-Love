import { Box, Container, Typography } from "@mui/material";
import React from "react";

// Sample data for the features
const features = [
  {
    icon: "🍽️",
    title: "Diverse menu",
    description: "Sed ut perspiciatis unde omnis iste natus.",
  },
  {
    icon: "🛍️",
    title: "Easy ordering",
    description: "At vero eos et accusamus et odio ducimus.",
  },
  {
    icon: "📞",
    title: "Customer support",
    description: "Et harum quidem rerum facilis est expedita.",
  },
  {
    icon: "🚚",
    title: "Fast delivery",
    description: "Nam libero tempore, cum soluta nobis est.",
  },
];

const WhyChoose = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: '16px',
        padding: "40px 0px",
        backgroundColor: "var(--light-grey)",
        borderRadius: "18px",
      }}
    >
      {features.map((feature, index) => (
        <Box
          key={index}
          sx={{
            flex: "1",
            textAlign: "center",
            width: "25%",
            padding: "20px",
            border: "1px solid transparent",
            backgroundColor: 'white',
            borderRadius: '12px',
            transition: "background-color 0.3s, color 0.3s",
            "&:hover": {
              backgroundColor: "var(--secondary-color)",
              color: "white",
            },
          }}
        >
          <Box sx={{ fontSize: "3rem" }}>{feature.icon}</Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
          >
            {feature.title}
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "Poppins" }}>
            {feature.description}
          </Typography>
        </Box>
      ))}
    </Container>
  );
};

export default WhyChoose;
