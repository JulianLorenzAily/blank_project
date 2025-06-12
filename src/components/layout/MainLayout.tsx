import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      backgroundColor: '#000000',
      overflow: 'hidden'
    }}>
      {children}
    </Box>
  );
};

export default MainLayout; 