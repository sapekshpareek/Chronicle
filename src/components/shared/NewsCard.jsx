import { Box, Typography } from "@mui/material";
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
    <Box
      sx={{
        m: 2,
        borderRadius: "2vh",
        justifyContent: "space-between",
        cursor: "pointer",
        bgcolor: "background.default",
        boxShadow: 2,
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: 4,
          transform: "translateY(-2px)",
        },
      }}
    >
      <Link to={url} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box
          component="img"
          src={imgUrl}
          alt="news-image"
          sx={{
            width: "100%",
            minHeight: 200,
            objectFit: "cover",
          }}
        />
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography variant="caption" color="text.secondary">
              {author}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {`${formattedDate} ${formattedTime}`}
            </Typography>
          </Box>
          <Typography gutterBottom variant="h5" color="text.primary">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign={"justify"}>
            {description}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default NewsCard;
