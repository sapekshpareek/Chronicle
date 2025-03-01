import { createTheme } from "@mui/material";

const lightTheme = {
  palette: {
    mode: "light",
    primary: {
      main: "#005BBB", // Modern Blue
      light: "#337FCC", // Lighter Blue
      dark: "#003F8A", // Darker Blue
    },
    secondary: {
      main: "#FFB703", // Warm Yellow
      light: "#FFD447", // Lighter Yellow
      dark: "#CC9302", // Darker Yellow
    },
    background: {
      default: "#FFFFFF", // Pure White
      paper: "#F4F4F5", // Light Grey
    },
    text: {
      primary: "#1A1A1A", // Deep Black
      secondary: "#4B5563", // Dark Grey
    },
    divider: "#E5E7EB", // Light border color
  },
};

const darkTheme = {
  palette: {
    mode: "dark",
    primary: {
      main: "#90CAF9", // Sky Blue
      light: "#C3E4FF", // Lighter Blue
      dark: "#5A9FDC", // Darker Blue
    },
    secondary: {
      main: "#FFD166", // Warm Yellow
      light: "#FFE599", // Lighter Yellow
      dark: "#CCAA4C", // Darker Yellow
    },
    background: {
      default: "#121212", // Deep Black
      paper: "#1E1E1E", // Dark Grey
    },
    text: {
      primary: "#EDEDED", // Near White
      secondary: "#A0AAB4", // Muted Grey
    },
    divider: "#374151", // Dark border color
  },
};

const customTheme = (mode) => {
  return createTheme(mode === "dark" ? darkTheme : lightTheme);
};

export default customTheme;
