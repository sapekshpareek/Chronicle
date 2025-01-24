import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NewsCard from "../components/shared/NewsCard";

const TheNewsApi = ({api}) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null); // State to track error messages

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://api.thenewsapi.com/v1/news/top?api_token=${api}&locale=in&limit=3`
        );

        if (!response.ok) {
          const errorData = await response.json(); // Extract error details from the API response
          //   console.log(errorData);
          throw new Error(
            errorData.errors || `HTTP error! status: ${response.status}`
          );
        }

        const data = await response.json();
        // console.log(data);
        setItems(data.data); // Update items with fetched articles
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
        // console.log(items),
        // Render news cards if items are available
        items.map((item) => (
          <NewsCard
            key={item.uuid} // Use a unique key for each item
            title={item.title}
            description={item.description}
            imgUrl={item.image_url}
            url={item.url}
            dateTime={item.published_at}
            author={item.source}
          />
        ))
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
    </Box>
  );
};

export default TheNewsApi;
