import { Box, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../ProductCard";
import { ProductsData } from "../../appConstantData/ProductsData";

const LatestProducts = () => {
  return (
    <Box sx={{ padding: "40px 20px", backgroundColor: "#f9f9f9" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginBottom: "20px" }}
      >
        Our Latest Products
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
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
