import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0F1B2D",
        color: "white",
        px: 6,
        py: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="body2">
        © 2026 Streamify. All rights reserved.
      </Typography>

      <Box sx={{ display: "flex", gap: 4 }}>
        <Link
          component={RouterLink}
          to="/privacy-policy"
          color="inherit"
          underline="hover"
        >
          Privacy Policy
        </Link>

        <Link href="#" color="inherit" underline="none">
          Terms of Use
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
