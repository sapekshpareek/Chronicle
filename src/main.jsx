import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import App from "./App.jsx";
import "./index.css";
import customTheme from "./theme/palette.js";

const Root = () => {
  const [mode, setMode] = useState(() => localStorage.getItem('theme') || 'dark');
  const theme = customTheme(mode);

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <StrictMode>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <BrowserRouter>
              <App mode={mode} setMode={setMode} />
            </BrowserRouter>
          </CssBaseline>
        </ThemeProvider>
      </HelmetProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
