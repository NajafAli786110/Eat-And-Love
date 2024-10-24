import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CartReducer, ProductReducer, AdminDashboardReducer, OwnerDashboardReducer, ChefDashboardReducer, UserDashboardReducer } from "./features/reducers";



const rootReducers = combineReducers({
  products: ProductReducer,
  cart: CartReducer,
  // adminDashboard: AdminDashboardReducer,
  // ownerDashboard: OwnerDashboardReducer,
  // chefDashboard: ChefDashboardReducer,
  // userDashboard: UserDashboardReducer,
})


export const store = configureStore({
  reducer: rootReducers,
}) 
