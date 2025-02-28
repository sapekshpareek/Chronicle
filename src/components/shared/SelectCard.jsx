import { Card } from "@mui/material";
import { Link } from "react-router-dom";

const SelectCard = ({ name, logo, url }) => {
  return (
    <Link to={url}>
      <Card
        className="items-center flex justify-center"
        sx={{
          height: "26vh",
          width: "34vh",
          p: 2,
          borderRadius: "2vh",
          bgcolor: "background",
        }}
      >
        <img src={logo} alt={name} />
      </Card>
    </Link>
  );
};

export default SelectCard;
