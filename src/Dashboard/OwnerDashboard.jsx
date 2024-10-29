import React, { useState } from "react";
import { Box } from "@mui/material";
import { HotelOverview, AttendenceManagement, StockManagement, ProfileOwner, AddInventory, SidebarOwner } from "../components/dashboard/hotel-owner";

const ChefDashboard = () => {
  const [activeTab, setActiveTab] = useState("HotelOverview");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "Stock-Management":
        return <StockManagement />;
      case "Add-Inventory":
        return <AddInventory />;
      case "Attendence-Management":
        return <AttendenceManagement />;
      case "Profile-owner":
        return <ProfileOwner />;
      default:
        return <HotelOverview />;
    }
  };

  return (
    <Box display="flex" sx={{backgroundColor: '#f5f5f5'}}>
      <SidebarOwner setActiveTab={setActiveTab} />
      <Box>
        {renderActiveTab()}
      </Box>
    </Box>
  );
};

export default ChefDashboard;
