import React, { useState } from "react";
import { Box } from "@mui/material";
import { SideBarAdmin, ContentAdmin } from "../components/dashboard";
import { DashboardAdmin } from "../components/dashboard/admin/content/AdminContent";

const AdminDashboard = () => {
  const [currentTab, setCurrentTab] = useState(<DashboardAdmin />);

  return (
    <Box sx={{ display: "flex", flexDirection: {xs: 'column', md: 'row'} }}>
      <SideBarAdmin onTabChange={setCurrentTab} />
      <ContentAdmin currentTab={currentTab} />
    </Box>
  );
};

export default AdminDashboard;
