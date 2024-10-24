import { createSlice } from "@reduxjs/toolkit";
import { ProductsData } from "../../appConstantData/ProductsData";

const initialState = ProductsData;

const ProductReducer = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    add_product: (state, action) => {
      const newItem = {
        id: Math.random(),
        name: action.payload.name,
        description: action.payload.description,
        imageUrl: action.payload.imageUrl,
        category: action.payload.category,
      };
      state.push(newItem);
    },
  },
});

export const { add_product } = ProductReducer.actions;
export default ProductReducer.reducer;
