import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import customTheme from "./theme/palette.js";

// const theme = createTheme({
//   colorSchemes: {
//     dark: true,
//   },
// });
let mode = "dark";

const theme = customTheme(mode)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  </StrictMode>
);
