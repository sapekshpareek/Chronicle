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
    accent: {
      main: "#00A676", // Emerald Green
      light: "#33C092", // Lighter Green
      dark: "#007A57", // Darker Green
    },
    background: "#FFFFFF", // Pure White
    surface: "#F4F4F5", // Light Grey
    textPrimary: "#1A1A1A", // Deep Black
    textSecondary: "#4B5563", // Dark Grey
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
    accent: {
      main: "#52D17A", // Emerald Green
      light: "#85E5A3", // Lighter Green
      dark: "#2A9254", // Darker Green
    },
    background: "#121212", // Deep Black
    surface: "#1E1E1E", // Dark Grey
    textPrimary: "#EDEDED", // Near White
    textSecondary: "#A0AAB4", // Muted Grey
  },
};

const customTheme = (mode) => {
  return createTheme(mode === "dark" ? darkTheme : lightTheme);
};

export default customTheme;
