import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NewsCard = ({
  title,
  description,
  imgUrl,
  url,
  dateTime,
  author,
}) => {
  // Safely convert dateTime to a Date object
  const date = new Date(dateTime);

  // Ensure the date is valid
  if (isNaN(date)) {
    // console.error("Invalid dateTime:", dateTime);  //Comment for production
    return null; // Skip rendering if dateTime is invalid
  }

  // Format the date and time
  const formattedDate = date.toLocaleDateString("en-GB"); // e.g., "24/01/2025"
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <Card
      sx={{
        m: 2,
        borderRadius: "2vh",
        justifyContent: "space-between",
        cursor: "pointer",
        // display: "flex",
        // flexDirection: { xs: "column", md: "row" },
        // minWidth: { xs: "100%", md: "50%" }, // Set the maximum width for different screen sizes,
        // height: "auto",
      }}
    >
      <Link to={url} target="_blank">
      <CardMedia component={"img"} image={imgUrl} alt="news-image" />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="textSecondary">
            {author}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {`${formattedDate} ${formattedTime}`}
          </Typography>
        </Box>
        <Typography gutterBottom variant="h5" >
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary" textAlign={"justify"}>
          {description}
        </Typography>
      </CardContent>
      </Link>
    </Card>
  );
};

export default NewsCard;
