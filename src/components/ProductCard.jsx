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
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
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
      />
      <Box sx={{ padding: "16px" }}>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
