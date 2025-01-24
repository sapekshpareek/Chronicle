import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const logoLight = "/logos/Chronicle-logo-white.png";
const logoDark = "/logos/Chronicle-logo-black.png";

const Navbar = ({mode}) => {
  return (
    <Box
      className="flex items-center justify-center"
      sx={{
        bgcolor: "surface",
        height: "10vh",
      }}
    >
      <Link to={"/"}>
        <img
          src={mode==="light"? logoDark : logoLight}
          alt="Logo"
          style={{
            height: "6vh",
            width: "auto",
          }}
          />
        </Link>
    </Box>
  );
};

export default Navbar;
