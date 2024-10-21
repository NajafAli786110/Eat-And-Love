import { Box, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../ProductCard";
import { ProductsData } from "../../appConstantData/ProductsData";

const LatestProducts = () => {
  const styleGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(4, auto)",
    gap: "16px",
    "@media (max-width: 1200px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "6px",
    },
    "@media (max-width: 600px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "6px",
    },
  };
  return (
    <Box
      sx={{ padding: { xs: "40px 0px 100px 0px", md: "60px 20px 100px 20px" } }}
    >
      <Typography
        variant="h2"
        sx={{ textAlign: "center", marginBottom: "20px" }}
      >
        Our Latest Products
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: styleGrid,
          gap: "20px",
        }}
      >
        {ProductsData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Box>
    </Box>
  );
};

export default LatestProducts;
