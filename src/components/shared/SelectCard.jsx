import { Card } from "@mui/material";
import { Link } from "react-router-dom";

const SelectCard = ({ name, logo, url }) => {
  return (
    <Card
      className="items-center flex justify-center"
      sx={{
        height: "26vh",
        width: "34vh",
        p: 2,
        borderRadius: "5vh",
      }}
    >
      <Link to={url}>
        <img src={logo} alt={name} />
      </Link>
    </Card>
  );
};

export default SelectCard;
