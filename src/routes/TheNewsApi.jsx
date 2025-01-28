import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Filters from "../components/shared/Filters";
import NewsCard from "../components/shared/NewsCard";

const TheNewsApi = ({ api }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://api.thenewsapi.com/v1/news/top?api_token=${api}&locale=in&limit=3`
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.errors || `HTTP error! status: ${response.status}`
          );
        }

        const data = await response.json();
        setItems(data.data); // Update items with fetched articles
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false after fetching completes
      }
    };

    fetchNews();
  }, [api]);

  return (
    <Box
      sx={{
        height: "90vh",
        overflow: "auto",
        bgcolor: "background",
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
            {`${error}`}
          </Typography>
        </Box>
      ) : loading ? (
        // Render skeleton UI while loading
        <Grid container spacing={3}>
          {Array.from(new Array(3)).map((_, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  m: 2,
                  borderRadius: "2vh",
                  justifyContent: "space-between",
                }}
              >
                <CardMedia>
                  <Skeleton
                    variant="rectangular"
                    height={200}
                    // sx={{ borderRadius: "2vh" }}
                  />
                </CardMedia>
                <CardContent>
                  <Skeleton variant="text" height={8} />

                  <Skeleton variant="text" height={50} />
                  <Skeleton variant="text" height={15} />
                  <Skeleton variant="text" height={15} />
                  <Skeleton variant="text" height={15} />
                  <Skeleton variant="text" height={15} />
                  <Skeleton variant="text" height={15} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : items.length > 0 ? (
        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid item key={item.uuid} xs={12} sm={6} md={4} lg={3}>
              <NewsCard
                title={item.title}
                description={item.description}
                imgUrl={item.image_url}
                url={item.url}
                dateTime={item.published_at}
                author={item.source}
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
          <Typography variant="h6">No news available.</Typography>
        </Box>
      )}
      <Filters />
      <Footer />
    </Box>
  );
};

export default TheNewsApi;
