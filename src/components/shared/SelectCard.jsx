import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const SelectCard = ({ name, logo, url }) => {
  return (
    <Link to={url} style={{ textDecoration: 'none' }}>
      <Box
        className="items-center flex justify-center"
        sx={{
          height: "26vh",
          width: "34vh",
          p: 2,
          borderRadius: "2vh",
          bgcolor: "background.default",
          boxShadow: 3,
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: 6,
            transform: "translateY(-4px)",
          },
        }}
      >
        <img src={logo} alt={name} />
      </Box>
    </Link>
  );
};

export default SelectCard;
