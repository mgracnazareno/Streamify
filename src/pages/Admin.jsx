import { useState } from "react";
import { Box, Typography } from "@mui/material";

import Sidebar from "../components/Sidebar";
import SummaryCards from "../components/SummaryCards";
import AdminTabs from "../components/AdminTabs";
import MovieForm from "../components/MovieForm";

const Admin = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "calc(100vh - 86px)",
        backgroundColor: "#F8F9FC",
      }}
    >
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          p: {
            xs: 2,
            md: 4,
          },
        }}
      >
        {/* Dashboard */}
        {activeSection === "Dashboard" && (
          <>
            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              sx={{ mb: 4 }}
            >
              Dashboard
            </Typography>

            <SummaryCards />

            <Typography
              variant="h6"
              component="h2"
              fontWeight="bold"
              sx={{ mb: 2 }}
            >
              Admin Records
            </Typography>

            <AdminTabs />
          </>
        )}

        {/* Movies */}
        {activeSection === "Movies" && <MovieForm />}

        {/* Users */}
        {activeSection === "Users" && (
          <>
            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              sx={{ mb: 2 }}
            >
              Users
            </Typography>

            <Typography color="text.secondary">
              User management will appear here.
            </Typography>
          </>
        )}

        {/* Reports */}
        {activeSection === "Reports" && (
          <>
            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              sx={{ mb: 2 }}
            >
              Reports
            </Typography>

            <Typography color="text.secondary">
              Reports will appear here.
            </Typography>
          </>
        )}

        {/* Settings */}
        {activeSection === "Settings" && (
          <>
            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              sx={{ mb: 2 }}
            >
              Settings
            </Typography>

            <Typography color="text.secondary">
              Admin settings will appear here.
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Admin;
