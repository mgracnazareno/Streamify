import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6D28D9",
      light: "#F5F1FF",
    },

    background: {
      default: "#F8F9FC",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#111827",
      secondary: "#6B7280",
    },

    divider: "#E5E7EB",

    common: {
      white: "#FFFFFF",
    },

    header: {
      main: "#0F1B2D",
    },
  },
});

export default theme;
