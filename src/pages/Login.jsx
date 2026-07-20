import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on",
    };

    console.log(loginData);
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
          maxWidth: 360,
          border: "1px solid",
          borderColor: "#E5E7EB",
          borderRadius: 2,
          p: 4,
        }}
      >
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
            sx={{
              width: "100%",
              textAlign: "center",
              mb: 0.5,
            }}
          >
            Welcome Back
          </Typography>

          <Typography
            variant="body2"
            component="p"
            fontWeight={600}
            color="#6B7280"
            sx={{
              width: "100%",
              textAlign: "center",
              m: 0,
            }}
          >
            Login to continue watching
          </Typography>
        </Box>

        <Stack spacing={2}>
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
              type="password"
              placeholder="Enter your password"
              size="small"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              sx={{ m: 0 }}
              control={
                <Checkbox name="remember" size="small" sx={{ p: 0, mr: 1 }} />
              }
              label={
                <Typography variant="body2" fontWeight={600}>
                  Remember
                </Typography>
              }
            />

            <Link
              component={RouterLink}
              to="/forgot-password"
              underline="hover"
              color="#6D28D9"
              sx={{
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Forgot Password?
            </Link>
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
            Login
          </Button>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              pt: 0.5,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Don&apos;t have an account?
            </Typography>

            <Link
              component={RouterLink}
              to="/register"
              underline="hover"
              color="#6D28D9"
              variant="body2"
              fontWeight="bold"
            >
              Register
            </Link>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Login;
