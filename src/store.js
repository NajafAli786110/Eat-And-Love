import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CartReducer, ProductReducer, UserReducers } from "./features/reducers";



const rootReducers = combineReducers({
  products: ProductReducer,
  cart: CartReducer,
  users: UserReducers,
})


export const store = configureStore({
  reducer: rootReducers,
}) 
