import React, { useState } from "react";
import { Box } from "@mui/material";
import {
  SidebarChef,
  StockManagement,
  SuggestRecipe,
  AttendenceReport,
  ProfileChef,
} from "../components/dashboard/chef";

const ChefDashboard = () => {
  const [activeTab, setActiveTab] = useState("StockManagement");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "StockManagement":
        return <StockManagement />;
      case "SuggestNewRecipe":
        return <SuggestRecipe />;
      case "AttendanceHistory":
        return <AttendenceReport />;
      case "Profile":
        return <ProfileChef />;
      default:
        return <StockManagement />;
    }
  };

  return (
    <Box display="flex">
      <SidebarChef onTabChange={setActiveTab} />
      <Box flexGrow={1} p={3}>
        {renderActiveTab()}
      </Box>
    </Box>
  );
};

export default ChefDashboard;
