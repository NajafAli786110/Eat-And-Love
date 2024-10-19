import { Box, Typography } from "@mui/material";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
        className="product-image"
      />
      <Box
        sx={{
          padding: { xs: "10px", md: "16px" },
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: { xs: "1.2rem", md: "1.4rem" },
            letterSpacing: "-0.6px",
          }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "0.7rem", md: "0.9rem" },
            letterSpacing: "-0.4px",
          }}
          color="text.secondary"
        >
          {product.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
