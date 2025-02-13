import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from "@mui/material/styles";
import * as React from 'react';
import { useState } from "react";

// Android 12 Styled Switch (without ✔ and - signs)
const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
  },
  "& .MuiSwitch-thumb": {
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));

const Filters = ({ onSearch, onCategoryChange, onLanguageChange, mode, setMode }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("general");
  const [language, setLanguage] = useState("en");

  // Handle theme switch
  const handleThemeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  // Handle category change
  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setCategory(newCategory);
    onCategoryChange(newCategory);
  };

  // Handle language switch (English <-> Hindi)
  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "hi" : "en"; // Toggle language
    setLanguage(newLanguage);
    onLanguageChange(newLanguage);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: { xs: "center", sm: "center", md: "space-between" },
        alignItems: "center",
        bgcolor: "surface",
        padding: 2,
        m: 2,
        borderRadius: "2vh",
        // width: "100%",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Filters
      </Typography>

      {/* Category Dropdown */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 1,
          mb: 3,
          width: "100%",
        }}
      >
        <Box sx={{ width: "60%" }}>
          <Select
            value={category}
            onChange={handleCategoryChange}
            size="small"
            fullWidth
          >
            <MenuItem value="general">General</MenuItem>
            <MenuItem value="world">World</MenuItem>
            <MenuItem value="nation">Nation</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="technology">Technology</MenuItem>
            <MenuItem value="entertainment">Entertainment</MenuItem>
            <MenuItem value="sports">Sports</MenuItem>
            <MenuItem value="health">Health</MenuItem>
          </Select>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 0, width: "30%", justifyContent: "space-between" }}
        >
          {/* Language Switch */}
          <Typography variant="body2">EN</Typography>
          <Android12Switch
            checked={language === "hi"}
            onChange={handleLanguageChange}
          />
          <Typography variant="body2">HI</Typography>
        </Box>
      </Box>

      {/* Search Box */}
      <Box>
        <form onSubmit={handleSearch}>
          <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              // fullWidth
            />
            <Button type="submit" variant="contained">
              <SearchIcon style={{ fill: "black", marginRight: 2 }} />
              <Typography variant="body2">Search</Typography>
            </Button>
          </Box>
        </form>
      </Box>
      <Box>
        <FormControlLabel
          label="Switch Theme"
          control={
            <MaterialUISwitch 
              sx={{ m: 1 }} 
              checked={mode === "dark"}
              onChange={handleThemeChange}
            />
          }
        />
      </Box>
    </Box>
  );
};

export default Filters;
