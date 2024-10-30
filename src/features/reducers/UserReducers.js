import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../appConstantData/UserData";

const initialStates = UserData;

const UserReducers = createSlice({
  name: "userReducers",
  initialState: initialStates,
  reducers: {
    add_user: (state, action) => {
      const newUser = {
        id: Math.random(),
        name: action.payload.name,
        email: action.payload.email,
        role: action.payload.role,
        username: action.payload.username,
        password: action.payload.password,
      };
      state.push(newUser);
    },
  },
});

export const { add_user } = UserReducers.actions;
export default UserReducers.reducer;
