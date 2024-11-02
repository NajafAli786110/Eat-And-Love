import { createSlice } from "@reduxjs/toolkit";

const initialStates = {
  dashboard: {
    totalEarning: 100,
    completedOrders: 10,
    totalCustomer: 10000,
    totalChefs: 20,
  },
};

const AdminReducer = createSlice({
  name: "Admin Reducer",
  initialState: initialStates,
  reducers: {
    addAmount: (state, action) => {
      state.dashboard.totalEarning = state.dashboard.totalEarning + action.payload.totalEarning;
    },
  },
});

export const { addAmount } = AdminReducer.actions;
export default AdminReducer.reducer;
