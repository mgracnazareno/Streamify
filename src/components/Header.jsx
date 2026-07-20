import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

import { Link as RouterLink, useLocation } from "react-router-dom";

const navigationItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Movies",
    path: "/movies",
  },
  {
    label: "Login",
    path: "/login",
  },
  {
    label: "Register",
    path: "/register",
  },
  {
    label: "Admin",
    path: "/admin",
  },
];

const Header = () => {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#0F1B2D",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: "72px !important",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              color: "white",
              textDecoration: "none",
            }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#6D28D9",
                borderRadius: 2,
                boxShadow: "0 6px 16px rgba(109, 40, 217, 0.3)",
              }}
            >
              <PlayArrowRoundedIcon sx={{ fontSize: 28 }} />
            </Box>

            <Typography
              variant="h5"
              component="span"
              fontWeight="bold"
              sx={{
                letterSpacing: "-0.5px",
              }}
            >
              Streamify
            </Typography>
          </Box>

          {/* Navigation */}
          <Box
            component="nav"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Button
                  key={item.label}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    position: "relative",
                    color: isActive ? "white" : "rgba(255, 255, 255, 0.78)",
                    textTransform: "none",
                    fontSize: 16,
                    fontWeight: isActive ? 700 : 500,
                    px: 2,
                    py: 1,
                    borderRadius: 2,

                    backgroundColor: isActive
                      ? "rgba(109, 40, 217, 0.18)"
                      : "transparent",

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 16,
                      right: 16,
                      bottom: 3,
                      height: 2,
                      borderRadius: 2,
                      backgroundColor: isActive ? "#8B5CF6" : "transparent",
                    },

                    "&:hover": {
                      color: "white",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
