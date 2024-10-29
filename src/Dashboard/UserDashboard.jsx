import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import {
  OrderHistory,
  ProfileUser,
  SidebarUser,
} from "../components/dashboard/user";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("OrderHistory");

  return (
    <Box display="flex">
      {/* Sidebar */}
      <SidebarUser activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ marginTop: "32px", flexGrow: 1 }}>
        {activeTab === "OrderHistory" && <OrderHistory />}
        {activeTab === "Profile" && <ProfileUser />}
      </Container>
    </Box>
  );
};

export default UserDashboard;
