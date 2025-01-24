import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NewsCard from "../components/shared/NewsCard";

const GNews = ({api}) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null); // State to track error messages

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=mobile&from=2025-01-23&to=&sortBy=popularity&apiKey=${api}`
        );

        if (!response.ok) {
          const errorData = await response.json(); // Extract error details from the API response
            // console.log(errorData);
          throw new Error(
            errorData.message || `HTTP error! status: ${response.status}`
          );
        }

        const data = await response.json();
        setItems(data.articles); // Update items with fetched articles
      } catch (error) {
        setError(error.message); // Set the specific error message
        // console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []); // Empty dependency array to run the effect only once

  return (
    <Box
      sx={{
        height: "90vh",
        overflow: "auto",
        bgcolor: "background",
      }}
    >
      {error ? (
        // Render error message if there's an error
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
            padding: "2vh",
          }}
        >
          <Typography
            variant="h4"
            color="error"
            sx={{
              textAlign: "center",
              padding: "2vh",
            }}
          >
            Error
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{
              textAlign: "center",
            }}
          >
            {`${error}`} {/* Show the specific error message */}
          </Typography>
        </Box>
      ) : items.length > 0 ? (
        <Grid container spacing={3}>
          {

        // console.log(items),}
        // Render news cards if items are available
        items.map((item) => (
          <Grid item key={item.url} xs={12} sm={6} md={4} lg={3}>
          <NewsCard
            title={item.title}
            description={item.description}
            imgUrl={item.urlToImage || "/news/NewsAPI-ORG.png"}
            url={item.url}
            dateTime={item.publishedAt}
            author={item.source.name}
          />
          </Grid>
        ))}
        </Grid>
      ) : (
        // Render loading message while fetching data
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
