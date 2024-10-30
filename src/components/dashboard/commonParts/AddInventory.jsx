import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

const AddInventory = () => {
  const [productData, setProductData] = useState({
    id: "",
    name: "",
    description: "",
    imageUrl: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleAddProduct = () => {
    console.log("Product added:", productData);
  };

  return (
    <Container
      sx={{
        padding: "32px",
        backgroundColor: "#f9f9f9",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        marginTop: "32px",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <TextField
          label="Product ID"
          name="id"
          value={productData.id}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Product Name"
          name="name"
          value={productData.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Description"
          name="description"
          value={productData.description}
          onChange={handleChange}
          variant="outlined"
          multiline
          rows={3}
          fullWidth
        />
        <TextField
          label="Image URL"
          name="imageUrl"
          value={productData.imageUrl}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Category"
          name="category"
          value={productData.category}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={productData.price}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddProduct}
          sx={{
            marginTop: "16px",
            padding: "12px 0",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          Add Product
        </Button>
      </Box>
    </Container>
  );
};

export default AddInventory;
