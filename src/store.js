import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CartReducer, ProductReducer, UserReducers, AlertPopupReducer } from "./features/reducers";



const rootReducers = combineReducers({
  products: ProductReducer,
  cart: CartReducer,
  users: UserReducers,
  AlertReducer: AlertPopupReducer,
})


export const store = configureStore({
  reducer: rootReducers,
}) 
