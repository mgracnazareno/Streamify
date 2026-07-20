import { useState } from "react";

import { Box, Button, IconButton, Tooltip } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import MovieIcon from "@mui/icons-material/Movie";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

const menuItems = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    label: "Movies",
    icon: <MovieIcon />,
  },
  {
    label: "Users",
    icon: <PeopleIcon />,
  },
  {
    label: "Reports",
    icon: <BarChartIcon />,
  },
  {
    label: "Settings",
    icon: <SettingsIcon />,
  },
];

const Sidebar = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((currentValue) => !currentValue);
  };

  return (
    <Box
      component="aside"
      sx={{
        width: isOpen ? 220 : 72,
        minWidth: isOpen ? 220 : 72,
        flexShrink: 0,
        backgroundColor: "#0F1B2D",
        color: "white",
        px: isOpen ? 3 : 1,
        py: 2,
        transition:
          "width 0.25s ease, min-width 0.25s ease, padding 0.25s ease",

        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      {/* Toggle button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: isOpen ? "flex-end" : "center",
          mb: 2,
        }}
      >
        <Tooltip title={isOpen ? "Collapse sidebar" : "Expand sidebar"}>
          <IconButton
            onClick={handleToggle}
            aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
            sx={{
              width: 40,
              height: 40,
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.08)",

              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.16)",
              },
            }}
          >
            <Box
              component="span"
              sx={{
                fontSize: 25,
                lineHeight: 1,
              }}
            >
              {isOpen ? "‹" : "›"}
            </Box>
          </IconButton>
        </Tooltip>
      </Box>

      {/* Menu */}
      <Box
        component="nav"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        {menuItems.map((item) => (
          <Tooltip
            key={item.label}
            title={isOpen ? "" : item.label}
            placement="right"
          >
            <Button
              startIcon={item.icon}
              onClick={() => onSectionChange(item.label)}
              aria-label={item.label}
              sx={{
                width: "100%",
                minWidth: 0,
                justifyContent: isOpen ? "flex-start" : "center",
                color: "white",
                textTransform: "none",
                fontWeight: 600,
                px: isOpen ? 2 : 0,
                py: 1.25,
                borderRadius: 1,

                backgroundColor:
                  activeSection === item.label
                    ? "rgba(255, 255, 255, 0.14)"
                    : "transparent",

                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                },

                "& .MuiButton-startIcon": {
                  m: isOpen ? undefined : 0,
                  mr: isOpen ? 1.5 : 0,
                },
              }}
            >
              {isOpen && item.label}
            </Button>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
