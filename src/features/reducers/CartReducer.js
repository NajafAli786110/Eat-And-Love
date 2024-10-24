import { createSlice } from "@reduxjs/toolkit";
import { CartData } from "../../appConstantData/ProductsData";

const initialState = CartData;

const CartReducer = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    add_cart: (state, action) => {
      const newItem = {
        id: Math.random(),
        name: action.payload.name,
        imageUrl: action.payload.imageUrl,
        quantity: 1,
        price: action.payload.price,
      };
      state.push(newItem);
    },
  },
});

export const { add_cart } = CartReducer.actions;
export default CartReducer.reducer;
