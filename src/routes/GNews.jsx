import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NewsCard from "../components/shared/NewsCard";

const GNews = ({ api }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=${api}`
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.errors || `HTTP error! status: ${response.status}`
          );
        }

        const data = await response.json();
        setItems(data.articles);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchNews();
  }, [api]);

  return (
    <Box
      sx={{
        height: "90vh",
        overflow: "auto",
        bgcolor: "background", // Padding around the content
      }}
    >
      {error ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <Typography
            variant="h4"
            color="error"
            sx={{ textAlign: "center", mb: 2 }}
          >
            Error
          </Typography>
          <Typography variant="h6" color="textSecondary" sx={{ textAlign: "center" }}>
            {error}
          </Typography>
        </Box>
      ) : items.length > 0 ? (
        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid item key={item.url} xs={12} sm={6} md={4} lg={3}>
              <NewsCard
                title={item.title}
                description={item.description}
                imgUrl={item.image || "/news/Gnews-logo-black.png"}
                url={item.url}
                dateTime={item.publishedAt}
                author={item.source.name}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <Typography variant="h6">Loading...</Typography>
        </Box>
      )}
      <Footer />
    </Box>
  );
};

export default GNews;
