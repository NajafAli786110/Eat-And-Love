import React from 'react';
import { Box } from '@mui/material';

const ContentAdmin = ({ currentTab }) => {
  return (
    <Box
      sx={{
        flex: 1,
        padding: {xs: '20px 40px 100px 40px', md: '40px 40px 100px 40px'},
        backgroundColor: '#F5F5F5',
        minHeight: '100vh',
      }}
    >
      {currentTab}
    </Box>
  );
};

export default ContentAdmin;
