import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const logoLight = "/logos/Chronicle-logo-white.png";
const logoDark = "/logos/Chronicle-logo-black.png";

const Navbar = ({mode}) => {
  return (
    <Box
      className="flex items-center justify-center"
      sx={{
        bgcolor: "background.paper",
        height: "10vh",
        position: "sticky",
        top: 0,
        zIndex: 1000,
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
