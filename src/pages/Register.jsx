import { useState } from "react";

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { Link as RouterLink } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const registrationData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log(registrationData);
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 136px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F1FF",
        px: 2,
        py: 5,
      }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 380,
          border: "1px solid",
          borderColor: "#E5E7EB",
          borderRadius: 2,
          p: 4,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            mb: 3,
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            fontWeight="bold"
            color="#111827"
            sx={{ mb: 0.5 }}
          >
            Create an Account
          </Typography>

          <Typography
            variant="body2"
            component="p"
            fontWeight={600}
            color="#6B7280"
            sx={{ m: 0 }}
          >
            Join Streamify and start watching
          </Typography>
        </Box>

        <Stack spacing={2}>
          {/* First name and last name */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
              },
              gap: 1.5,
            }}
          >
            <Box>
              <Typography
                component="label"
                htmlFor="firstName"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: "block",
                  mb: 1,
                }}
              >
                First Name
              </Typography>

              <TextField
                required
                fullWidth
                id="firstName"
                name="firstName"
                placeholder="Enter firstname"
                size="small"
              />
            </Box>

            <Box>
              <Typography
                component="label"
                htmlFor="lastName"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: "block",
                  mb: 1,
                }}
              >
                Last Name
              </Typography>

              <TextField
                required
                fullWidth
                id="lastName"
                name="lastName"
                placeholder="Enter lastname"
                size="small"
              />
            </Box>
          </Box>

          {/* Email */}
          <Box>
            <Typography
              component="label"
              htmlFor="email"
              variant="body2"
              fontWeight="bold"
              sx={{
                display: "block",
                mb: 1,
              }}
            >
              Email Address
            </Typography>

            <TextField
              required
              fullWidth
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              size="small"
            />
          </Box>

          {/* Password */}
          <Box>
            <Typography
              component="label"
              htmlFor="password"
              variant="body2"
              fontWeight="bold"
              sx={{
                display: "block",
                mb: 1,
              }}
            >
              Password
            </Typography>

            <TextField
              required
              fullWidth
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              size="small"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        type="button"
                        edge="end"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        onClick={() => setShowPassword((current) => !current)}
                      >
                        {showPassword ? (
                          <VisibilityOffIcon fontSize="small" />
                        ) : (
                          <VisibilityIcon fontSize="small" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#6D28D9",
              textTransform: "none",
              fontWeight: "bold",
              py: 1.2,

              "&:hover": {
                backgroundColor: "#5B21B6",
              },
            }}
          >
            Register
          </Button>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Already have an account?
            </Typography>

            <Link
              component={RouterLink}
              to="/login"
              underline="hover"
              color="#6D28D9"
              variant="body2"
              fontWeight="bold"
            >
              Login
            </Link>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Register;
