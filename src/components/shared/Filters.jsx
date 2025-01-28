import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, TextField, Typography } from "@mui/material";

const Filters = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "surface",
        padding: 2,
        m: 2,
        borderRadius: "2vh",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Filters
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <form>
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
              placeholder="Search"
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
