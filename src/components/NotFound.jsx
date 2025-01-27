// src/pages/NotFound.js
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const NotFound = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "84vh",
          textAlign: "center",
          bgcolor: 'background'
        }}
      >
        <Typography variant="h1" color="error" gutterBottom>
          404
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Oops! The page you are looking for does not exist.
        </Typography>
        <Button
          variant="contained"
        //   color="error"
          component={Link}
          to="/"
          sx={{ mt: 2,
          borderRadius:"1vh",
            bgcolor: 'textPrimary'
           }}
        >
          Go Back to Home
        </Button>
      </Box>

      <Footer />
    </Box>
  );
};

export default NotFound;
