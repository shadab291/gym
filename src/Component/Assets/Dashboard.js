import React, { useState, useEffect } from 'react';
import {
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';
import {
  Home as HomeIcon,
  Info as InfoIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <Drawer variant="persistent" anchor="left" open={isOpen}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        {/* Add more sidebar items as needed */}
      </List>
    </Drawer>
  );
};

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Add an event listener to close the sidebar when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isSidebarOpen && !e.target.closest('.sidebar')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex">
      <IconButton onClick={toggleSidebar} className="sidebar">
        <MenuIcon />
      </IconButton>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="w-3/4 p-4">
        <Typography variant="h3">Dashboard</Typography>
        <div className="bg-white rounded-lg p-4 mt-4">
          <Typography variant="h5">Dashboard Content</Typography>
          <p>This is your dashboard content section. You can add your content here.</p>
          {/* Add your dashboard content components here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
