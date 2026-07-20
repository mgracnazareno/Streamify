import { useState } from "react";

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import MovieIcon from "@mui/icons-material/Movie";
import SettingsIcon from "@mui/icons-material/Settings";

const tabData = {
  activity: [
    {
      id: 1,
      title: "New user registered",
      description: "Maria created a new Streamify account.",
    },
    {
      id: 2,
      title: "Profile updated",
      description: "James updated his profile information.",
    },
    {
      id: 3,
      title: "Movie added to list",
      description: "Alex added Oppenheimer to their movie list.",
    },
  ],

  access: [
    {
      id: 1,
      title: "Oppenheimer played",
      description: "The movie was accessed at 10:30 AM.",
    },
    {
      id: 2,
      title: "Dune: Part Two played",
      description: "The movie was accessed at 1:15 PM.",
    },
    {
      id: 3,
      title: "Access denied",
      description: "A user attempted to access restricted video content.",
    },
  ],

  errors: [
    {
      id: 1,
      title: "404 – Page not found",
      description: "A broken link was detected on the Movies page.",
    },
    {
      id: 2,
      title: "500 – Internal server error",
      description: "The video service temporarily stopped responding.",
    },
    {
      id: 3,
      title: "Slow response time",
      description: "The Movies page took longer than expected to load.",
    },
  ],
};

const tabIcons = {
  activity: <PeopleIcon />,
  access: <MovieIcon />,
  errors: <SettingsIcon />,
};

const AdminTabs = () => {
  const [activeTab, setActiveTab] = useState("activity");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label="Admin information tabs"
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          px: 2,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Tab
          icon={<PeopleIcon />}
          iconPosition="start"
          label="User Activity"
          value="activity"
          sx={{
            minHeight: 64,
            textTransform: "none",
            fontWeight: 600,
          }}
        />

        <Tab
          icon={<MovieIcon />}
          iconPosition="start"
          label="Video Access"
          value="access"
          sx={{
            minHeight: 64,
            textTransform: "none",
            fontWeight: 600,
          }}
        />

        <Tab
          icon={<SettingsIcon />}
          iconPosition="start"
          label="Site Errors"
          value="errors"
          sx={{
            minHeight: 64,
            textTransform: "none",
            fontWeight: 600,
          }}
        />
      </Tabs>

      <List disablePadding>
        {tabData[activeTab].map((item) => (
          <ListItem
            key={item.id}
            divider
            sx={{
              px: 3,
              py: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 48,
                color: "#6D28D9",
              }}
            >
              {tabIcons[activeTab]}
            </ListItemIcon>

            <ListItemText
              primary={item.title}
              secondary={item.description}
              primaryTypographyProps={{
                fontWeight: 600,
              }}
              secondaryTypographyProps={{
                color: "text.secondary",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AdminTabs;
