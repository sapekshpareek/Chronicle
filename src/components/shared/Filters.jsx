import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
  Fab,
  Modal,
  IconButton,
  Slide,
} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from "@mui/material/styles";
import * as React from 'react';
import { useState, useEffect } from "react";

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
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"20\" width=\"20\" viewBox=\"0 0 20 20\"><path fill=\"${encodeURIComponent(
          '#fff',
        )}\" d=\"M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z\"/></svg>')`,
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
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"20\" width=\"20\" viewBox=\"0 0 20 20\"><path fill=\"${encodeURIComponent(
        '#fff',
      )}\" d=\"M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z\"/></svg>')`,
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

// Styled Select to fix transparency issue
const StyledSelect = styled(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    backgroundColor: theme.palette.mode === 'dark' ? '#232323' : '#fff',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.mode === 'dark' ? '#424242' : '#E0E0E0',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
  },
  '& .MuiMenu-paper': {
    backgroundColor: theme.palette.mode === 'dark' ? '#232323' : '#fff',
    boxShadow: theme.shadows[8],
    zIndex: 2000,
  },
}));

// Bottom sheet modal for mobile
const FiltersModal = ({ open, onClose, onSearch, onCategoryChange, onLanguageChange, mode, setMode }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(() => localStorage.getItem('newsCategory') || "general");
  const [language, setLanguage] = useState(() => localStorage.getItem('newsLanguage') || "en");

  useEffect(() => {
    localStorage.setItem('newsCategory', category);
  }, [category]);
  useEffect(() => {
    localStorage.setItem('newsLanguage', language);
  }, [language]);

  const handleThemeChange = () => setMode(mode === "light" ? "dark" : "light");
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    onClose();
  };
  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setCategory(newCategory);
    onCategoryChange(newCategory);
  };
  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "hi" : "en";
    setLanguage(newLanguage);
    onLanguageChange(newLanguage);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="filters-modal"
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        p: 0,
        m: 0,
        zIndex: 1500,
      }}
      slotProps={{ backdrop: { style: { background: 'rgba(0,0,0,0.35)' } } }}
    >
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Box
          sx={{
            // bgcolor: mode === 'dark' ? '#181818' : '#fff',
            bgcolor: "background.paper",
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
            boxShadow: 24,
            p: 3,
            width: '100vw',
            maxWidth: 480,
            minHeight: 320,
            maxHeight: '80vh',
            overflowY: 'auto',
            position: 'relative',
            mx: 'auto',
            pb: 5,
          }}
        >
          {/* Close button */}
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'text.secondary',
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Title */}
          <Typography variant="h6" sx={{ mb: 3, pr: 4, textAlign: 'center' }}>
            Filters
          </Typography>

          {/* Filters content - Reorganized layout */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 8 }}>
            {/* 1. Search Box - At the top */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                Search
              </Typography>
              <form onSubmit={handleSearch}>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <TextField
                    label="Search news..."
                    variant="outlined"
                    size="small"
                    placeholder="Search news..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    fullWidth
                  />
                  <Button type="submit" variant="contained" size="small">
                    <SearchIcon sx={{ fontSize: 20 }} />
                  </Button>
                </Box>
              </form>
            </Box>

            {/* 2. Language and Theme in single row */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                Settings
              </Typography>
              <Box sx={{ 
                display: "flex", 
                justifyContent: "space-around", 
                alignItems: "center",
                gap: 2
              }}>
                {/* Language Switch */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>EN</Typography>
                  <Android12Switch
                    checked={language === "hi"}
                    onChange={handleLanguageChange}
                  />
                  <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>HI</Typography>
                </Box>

                {/* Theme Switch */}
                <FormControlLabel
                  label={mode === "dark" ? "Dark" : "Light"}
                  labelPlacement="start"
                  control={
                    <MaterialUISwitch 
                      checked={mode === "dark"}
                      onChange={handleThemeChange}
                    />
                  }
                  sx={{
                    '& .MuiFormControlLabel-label': {
                      fontSize: "0.875rem",
                      ml: 1,
                    }
                  }}
                />
              </Box>
            </Box>

            {/* 3. Category Dropdown - At the bottom */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                Category
              </Typography>
              <StyledSelect
                value={category}
                onChange={handleCategoryChange}
                size="small"
                fullWidth
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: mode === 'dark' ? '#232323' : '#fff',
                      zIndex: 2000,
                      '& .MuiMenuItem-root': {
                        bgcolor: mode === 'dark' ? '#232323' : '#fff',
                        '&:hover': {
                          bgcolor: mode === 'dark' ? '#2D2D2D' : '#F5F5F5',
                        },
                      },
                    },
                  },
                  sx: {
                    zIndex: 2000,
                  }
                }}
              >
                <MenuItem value="general">General</MenuItem>
                <MenuItem value="world">World</MenuItem>
                <MenuItem value="nation">Nation</MenuItem>
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="technology">Technology</MenuItem>
                <MenuItem value="entertainment">Entertainment</MenuItem>
                <MenuItem value="sports">Sports</MenuItem>
                <MenuItem value="health">Health</MenuItem>
              </StyledSelect>
            </Box>
          </Box>
        </Box>
      </Slide>
    </Modal>
  );
};

const Filters = ({ onSearch, onCategoryChange, onLanguageChange, mode, setMode }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      {/* Desktop Layout - Horizontal */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          width: "98%",
          bgcolor: "background.default",
          padding: 3,
          borderRadius: "1vh",
          boxShadow: 1,
          mx: 2,
          my: 2,
        }}
      >
        {/* Category Dropdown */}
        <Box sx={{ minWidth: 200 }}>
          <StyledSelect
            value={localStorage.getItem('newsCategory') || "general"}
            onChange={(event) => onCategoryChange(event.target.value)}
            size="small"
            fullWidth
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: mode === 'dark' ? '#232323' : '#fff',
                  zIndex: 2000,
                  '& .MuiMenuItem-root': {
                    bgcolor: mode === 'dark' ? '#232323' : '#fff',
                    '&:hover': {
                      bgcolor: mode === 'dark' ? '#2D2D2D' : '#F5F5F5',
                    },
                  },
                },
              },
              sx: {
                zIndex: 20,
              }
            }}
          >
            <MenuItem value="general">General</MenuItem>
            <MenuItem value="world">World</MenuItem>
            <MenuItem value="nation">Nation</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="technology">Technology</MenuItem>
            <MenuItem value="entertainment">Entertainment</MenuItem>
            <MenuItem value="sports">Sports</MenuItem>
            <MenuItem value="health">Health</MenuItem>
          </StyledSelect>
        </Box>

        {/* Language Switch */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2">EN</Typography>
          <Android12Switch
            checked={localStorage.getItem('newsLanguage') === "hi"}
            onChange={() => onLanguageChange(localStorage.getItem('newsLanguage') === "en" ? "hi" : "en")}
          />
          <Typography variant="body2">HI</Typography>
        </Box>

        {/* Search Box */}
        <Box sx={{ flex: 1, maxWidth: 400 }}>
          <form onSubmit={(e) => {
            e.preventDefault();
            const query = e.target.querySelector('input').value;
            onSearch(query);
          }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                label="Search"
                variant="outlined"
                size="small"
                placeholder="Search news..."
                fullWidth
              />
              <Button type="submit" variant="contained" size="small">
                <SearchIcon sx={{ fontSize: 20 }} />
              </Button>
            </Box>
          </form>
        </Box>

        {/* Theme Switch */}
        <FormControlLabel
          label="Theme"
          control={
            <MaterialUISwitch 
              checked={mode === "dark"}
              onChange={() => setMode(mode === "light" ? "dark" : "light")}
            />
          }
        />
      </Box>

      {/* Mobile Layout - Floating Action Button */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Fab
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 2000,
            boxShadow: 6,
            bgcolor: mode === 'dark' ? '#90CAF9' : '#005BBB',
            color: mode === 'dark' ? '#121212' : '#FFFFFF',
            '&:hover': {
              bgcolor: mode === 'dark' ? '#C3E4FF' : '#003F8A',
            },
          }}
          aria-label={modalOpen ? "close filters" : "open filters"}
          onClick={modalOpen ? handleCloseModal : handleOpenModal}
        >
          {modalOpen ? <CloseIcon /> : <FilterListIcon />}
        </Fab>
      </Box>

      {/* Filters Modal */}
      <FiltersModal
        open={modalOpen}
        onClose={handleCloseModal}
        onSearch={onSearch}
        onCategoryChange={onCategoryChange}
        onLanguageChange={onLanguageChange}
        mode={mode}
        setMode={setMode}
      />
    </>
  );
};

export default Filters;
