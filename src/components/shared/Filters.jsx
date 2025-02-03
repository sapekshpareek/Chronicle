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
import { styled } from "@mui/material/styles";
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

const Filters = ({ onSearch, onCategoryChange, onLanguageChange }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("general");
  const [language, setLanguage] = useState("en");

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
    </Box>
  );
};

export default Filters;
