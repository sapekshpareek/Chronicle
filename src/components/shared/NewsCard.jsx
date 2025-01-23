import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const NewsCard = ({ title, description, imgUrl, url, dateTime, author, key }) => {
  return (
    <Card
      sx={{
        // p: 2,
        m: 2,
        borderRadius: "2vh",
      }}
      key={key}
    >
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
            {dateTime}
          </Typography>
        </Box>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
